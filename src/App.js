import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Spacer,
  HStack,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

import Header from './components/Header.component';
import Card from './components/Card.component';
import Footer from './components/Footer.component';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Grid minH="100vh" p={0}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={0}>
            <Header />

            <Card />
            <Card />

            {/* <Footer /> */}
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
