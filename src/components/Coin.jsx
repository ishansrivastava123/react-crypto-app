import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from "../index"
import { Button, Container, HStack } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import CoinCards from './CoinCards';

const Coin = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  const [coinList, setCoinList] = useState(0);

  const currencySymbol = (currency === "inr") ? "₹" : (currency === "eur") ? "€" : (currency === "gbp") ? "£" : "$";

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        const list = await axios.get(`${server}/coins/list`);
        setCoinList(Math.ceil(list.data.length/100));
        setCoins(data)
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchCoins();
  }, [currency, page])
  
  const btns = new Array(coinList).fill(1);

  if(error)
    return <ErrorComponent msg="Error while fetching coins!" />

  return (
    <Container 
    maxW={"container.xl"}
    pt={"25px"}>
      {loading ? <Loader /> : <>
        <HStack 
        justifyContent={"center"}
        gap={"4"}
        mb={"4"}>
          <Button onClick={() => setCurrency("inr")}>INR (₹)</Button>
          <Button onClick={() => setCurrency("eur")}>EUR (€)</Button>
          <Button onClick={() => setCurrency("gbp")}>GBP (£)</Button>
          <Button onClick={() => setCurrency("usd")}>USD ($)</Button>
        </HStack>
        <HStack 
        wrap={"wrap"}
        justifyContent={"space-evenly"}>
          {
            coins.map((e) => (
              <CoinCards 
              key={e.id}
              id={e.id}
              name={e.name}
              img={e.image}
              price={e.current_price}
              symbol={e.symbol}
              currencySymbol={currencySymbol} />
          ))
          }
        </HStack>
        <HStack
        w={"full"}
        p={"8"}
        overflowX={"auto"}>
          {
            btns.map((item, index) => (
              <Button
              bgColor={"blackAlpha.900"}
              color={"white"}
              key={index}
              onClick={() => {
                setPage(index + 1);
                setLoading(true);
              }}>
                {index + 1}</Button>
            ))
          }
        </HStack>
      </>}
    </Container>
  )
}

export default Coin