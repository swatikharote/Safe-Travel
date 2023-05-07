import React, { useEffect } from 'react'
import { getAccomodation } from '../Redux/productReducer/action'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Box, Flex } from '@chakra-ui/react';

import { HousingCard } from '../Components/HousingCard';

const Housing = () => {

  const { id } = useParams();
  const dispatch = useDispatch()
  const data = useSelector((store) => store.productReducer.products)



  useEffect(() => {

    dispatch(getAccomodation(id))

  }, [])



  return (
    <>
      <Flex>
        <Box w={"22%"} >
          sidebar
        </Box>
        <Box w={"88%"}>

          <DIV>

            {data?.map((item) => {
              return <HousingCard key={item.id} {...item} />
            })}
          </DIV>
        </Box>
      </Flex>

    </>
  )
}

export default Housing


const DIV = styled.div`
margin:auto;
margin-top:20px;

display:grid;
grid-template-columns:repeat(3,1fr);
gap: 10px;
grid-template-rows:auto;
`