import { Badge, Box, Button, Container, HStack, Image, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { server } from '../index';
import ErrorComponent from './ErrorComponent';
import CustomBar from './CustomBar';
import Item from './Item';
import Chart from './Chart';

const CoinDetails = () => {
  
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("1d");
  const [chartArray, setChartArray] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // event.preventDefault();
      const fetchCoin = async () => {
        try {
          const { data } = await axios.get(`${server}/coins/${id}`);
  
          const { data: chartData } = await axios.get(`${server}/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`)
  
          setCoin(data);
          setChartArray(chartData.prices);
          setLoading(false);
        } catch (error) {
          setError(true);
          setLoading(false);
        }
      }
      fetchCoin();
    };
    // window.addEventListener('beforeunload', handleBeforeUnload);
    handleBeforeUnload();
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [id, currency, days])

  const currencySymbol = (currency === "inr") ? "₹" : (currency === "eur") ? "€" : (currency === "gbp") ? "£" : "$";

  const btns = ["1 Day", "1 Week", "15 Days", "1 Month", "1 Quarter", "6 Months", "1 Year", "All Time"];
  
  const switchChartStats = (e) => {
    switch (e) {
      case "1 Day":
        setDays("24h");
        break;
      case "1 Week":
        setDays("7d");
        break;
      case "15 Days":
        setDays("15d");
        break;
      case "1 Month":
        setDays("30d");
        break;
      case "1 Quarter":
        setDays("90d");
        break;
      case "6 Months":
        setDays("180d");
        break;
      case "1 Year":
        setDays("356d");
        break;
      case "All Time":
        setDays("max");
        break;
      default:
        setDays("24h")
        break;
    }
    setLoading(true);
    console.log(e);
  }

  if(error)
    return <ErrorComponent msg="Error while fetching coin!" />

  return (
    <Container 
    maxW={"container.xl"}
    pt={"25px"}>
      {loading ? <Loader /> : 
      <>
        <HStack 
        justifyContent={"center"}
        gap={"4"}
        mb={"4"}>
          <Button onClick={() => setCurrency("inr")}>INR (₹)</Button>
          <Button onClick={() => setCurrency("eur")}>EUR (€)</Button>
          <Button onClick={() => setCurrency("gbp")}>GBP (£)</Button>
          <Button onClick={() => setCurrency("usd")}>USD ($)</Button>
        </HStack>

        <Box 
        w={"full"}
        borderWidth={1}>
          <Chart arr={chartArray} currency={currencySymbol}
          days={days} />
        </Box>

        <HStack
        p={"4"}
        m={"8"}
        wrap={"wrap"}
        justifyContent={"center"}
        overflowX={"auto"}>
          {
            btns.map((i) => (
              <Button 
              key={i} 
              onClick={() => switchChartStats(i)}
              >{i}</Button>
            ))
          }
        </HStack>

        <VStack
        spacing={"4"}
        p={"16"}
        alignItems={"flex-start"}>
          <Text
          fontSize={"small"}
          alignSelf={"center"}
          opacity={"0.7"}>
            Last Updated On {Date(coin.market_data.last_updated).split("G")[0]}
          </Text>

          <Image
          src={coin.image.large}
          w={"16"}
          h={"16"}
          objectFit={"contain"} />

          <Stat>
            <StatLabel>{coin.name}</StatLabel>
            <StatNumber>{currencySymbol} {coin.market_data.current_price[currency]}</StatNumber>
            <StatHelpText>
              <StatArrow type={coin.market_data.price_change_percentage_24h < 0 ? "decrease" : 'increase'} />
              {coin.market_data.price_change_percentage_24h}%
            </StatHelpText>
          </Stat>

          <Badge
          fontSize={"2xl"}
          border={"2px solid red"}
          borderRadius={"50%"}
          px={"4"}
          py={"3"}>
            #{coin.market_cap_rank}
          </Badge>

          <CustomBar 
          high={`${currencySymbol} ${coin.market_data.high_24h[currency]}`}
          low={`${currencySymbol} ${coin.market_data.low_24h[currency]}`}
          ratio={(coin.market_data.low_24h[currency] * 100)/(coin.market_data.high_24h[currency])} />

          <Box
          w={"full"}
          p={"4"}>
            <Item 
            title="Max Supply"
            value={coin.market_data.max_supply} />
            
            <Item 
            title="Circulating Supply"
            value={coin.market_data.circulating_supply} />
            
            <Item 
            title="Market Cap"
            value={`${currencySymbol} ${coin.market_data.market_cap[currency]}`} />
            
            <Item 
            title="All Time High"
            value={`${currencySymbol} ${coin.market_data.ath[currency]}`}
            dt={coin.market_data.ath_date[currency]} />
            
            <Item 
            title="All Time Low"
            value={`${currencySymbol} ${coin.market_data.atl[currency]}`}
            dt={coin.market_data.atl_date[currency]} />
          </Box>
        </VStack>
      </>
      }
    </Container>
  )
}

export default CoinDetails