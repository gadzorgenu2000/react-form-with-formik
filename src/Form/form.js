import React,{ Fragment} from 'react';
import { Box,Input,Flex,Radio ,Select,FormControl, FormLabel,Text,Button} from '@chakra-ui/core'
// import {ColorModeProvider, theme, CSSReset  } from "@chakra-ui/core";
function Form() {
    // const {colorMode} =useColorMode();
  return (
      
    <>
    <Fragment>
      <Flex h="100vh" align="center" justify="center">
          <Box w={["70%","65%","60%"]} p="20px" bgImage="url('/Image/logo.jpg')" bgRepeat="no-repeat" bgPos="center"
           rounded="lg" boxShadow="lg" borderWidth={2}>
            <Flex mt="15px" >
              <Radio w="42%" value="one-way">One way</Radio>
              <Radio   px="20" value="round-trip">Round Trip</Radio>
            </Flex>
            <Flex mt="20px" justifyContent="space-between">
              <FormControl w="50%">
                <FormLabel htmlFor="From">From</FormLabel>
                  <Select id="from" placeholder="Select Depature" />
              </FormControl>
              <FormControl w="50%" px="15px">
                <FormLabel htmlFor="to">To</FormLabel>
                  <Select id="to" placeholder="Select Depature" />
              </FormControl>
            </Flex>
            <Flex mt="20px" >
              <FormControl w="50%">
                <FormLabel htmlFor="depature-date">Depature Date</FormLabel>               
                 <Input type="date" placeholder="dd/mm/yy"/>
              </FormControl>
              <FormControl w="50%"  px="15px">
                <FormLabel htmlFor="return-date">Return Date</FormLabel>
                <Input type="date" placeholder="dd/mm/yy"/>
              </FormControl>
            </Flex>
            <Text mt="20px" fontWeight="bold">Passenger Information</Text>
            <Flex mt="5px" justifyContent="space-around">
              <FormControl  w="30%">
                <FormLabel htmlFor="adult">Adult (12+ yrs)</FormLabel>
                <Select id="to" placeholder="12" />
              </FormControl>
              <FormControl  w="30%">
                <FormLabel htmlFor="child">Child (2-12yrs)</FormLabel>
                <Select id="to" placeholder="2" />
              </FormControl>
              <FormControl w="30%">
                <FormLabel htmlFor="infant">Infant</FormLabel>
                <Select id="to" placeholder="0" />
              </FormControl>
            </Flex>
            <Flex justify="center">
              <Button mt="15px" type="submit" variantColor="orange">Search Flights</Button>
            </Flex>
          </Box>
          </Flex>
    </Fragment>
    </>
  );
}

export default Form;
