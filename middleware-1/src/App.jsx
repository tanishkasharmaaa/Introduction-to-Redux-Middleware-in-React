// App.js
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FAILURE, REQUEST, SUCCESS } from './redux/action';
import {Card,Image,Stack,CardBody,Heading,Text,CardFooter,Button} from '@chakra-ui/react'
import { useState } from 'react';

function App() {
const[sortdata,setSortData]=useState('asc')
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useSelector((state) => state.data);

  const getData = async () => {
    dispatch({ type: REQUEST });
    try {
      const res = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?sort=price&order=${sortdata}`);
      dispatch({ type: SUCCESS, payload: res.data.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: FAILURE });
    }
  };

  useEffect(() => {
    getData();
  }, [sortdata]);
const ToggleOrder=()=>{
  const newOrder=sortdata==='asc'?'desc':'asc'
  setSortData(newOrder)
}
  return (
    <>
      <h1>Coffee Shop</h1>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Some error occurred</h2>}
      <div>
        <div>
          
          <Button onClick={ToggleOrder}>{sortdata==='asc'? 'High prices':'Low prices'}</Button>
         
        </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)", gridGap:"10px",marginTop:"20px"}}>
        {data.map((ele) => (
          <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          key={ele.id}
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={ele.image}
            alt={ele.name}
          />
        
          <Stack>
            <CardBody>
              <Heading size='md'>The perfect latte</Heading>
        
              <Text py='2'>
                {ele.description}
              </Text>
            </CardBody>
        
            <CardFooter>
              <Button variant='solid' colorScheme='blue'>
                Buy {ele.price}
              </Button>
            </CardFooter>
          </Stack>
        </Card>
        ))}
      </div></div>
    </>
  );
}

export default App;
