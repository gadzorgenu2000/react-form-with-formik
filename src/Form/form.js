import React,{ Fragment} from 'react';
import { Box,Input,Grid, useColorMode,Radio ,Select} from '@chakra-ui/core'
import {
    FormControl,
    FormLabel,

  } from "@chakra-ui/core";
function Form() {
    const {colorMode} =useColorMode();
  return (
      
    <>
    <Fragment>
          <Box w="50%" h='89vh' m="auto"
            display="flex"  
            my={20} 
            bg="gray.100" 
            color="black" 
            borderWidth={1} rounded='lg' boxShadow="lg">
                {/* <Grid display="flex" templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap={8}  
                     >
                    <FormControl mt={8} >
                        <Radio value="one-way">One way</Radio>
                        <Radio value="round-trip">Round Trip</Radio>
                    </FormControl>
                </Grid>      */}
                <Grid mt={10} display="flex" templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap={8}  
                     >
                    <FormControl w="100%">
                        <FormLabel htmlFor="From">From</FormLabel>
                        <Select id="from" placeholder="Select Depature" />
                    </FormControl>
                    <FormControl w="100%">
                        <FormLabel htmlFor="From">To</FormLabel>
                        <Select id="to" placeholder="Select Depature" />
                    </FormControl>
                </Grid>  
          </Box>
    </Fragment>
    </>
  );
}

export default Form;
