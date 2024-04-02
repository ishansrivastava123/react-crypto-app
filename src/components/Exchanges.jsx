import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from "../index"
import { Button, Container, HStack } from '@chakra-ui/react';
import Loader from './Loader';
import ExchangeCard from './ExchangeCard';
import ErrorComponent from './ErrorComponent';

const Exchanges = () => {

  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [exchangesList, setExchangesList] = useState(0);

  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges?page=${page}`);
        const list = await axios.get(`${server}/exchanges/list`);
        setExchangesList(Math.ceil(list.data.length/100));
        setExchanges(data)
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchExchange();
  }, [page])

  const btns = new Array(exchangesList).fill(1);
  
  if(error)
    return <ErrorComponent msg="Error while fetching component!" />

  return (
    <Container 
    maxW={"container.xl"}
    pt={"25px"}>
      {loading ? <Loader /> : <>
        <HStack 
        wrap={"wrap"}
        justifyContent={"space-evenly"}>
          {
            exchanges.map((e) => (
              <ExchangeCard 
              key={e.id}
              name={e.name}
              img={e.image}
              rank={e.trust_score_rank}
              url={e.url} />
          ))
          }
        </HStack>
        <HStack
        w={"full"}
        p={"8"}
        overflowX={"auto"}
        justifyContent={"center"}>
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

export default Exchanges