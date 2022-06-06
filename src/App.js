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
import FeaturesHighlight from './components/Features-Highlight.component';
import FeaturesDescription from './components/Features-Description.component';
import Contact from './components/Contact.component';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Grid minH="100vh" p={0}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={0}>
            <Header />

            <FeaturesDescription />

            <FeaturesHighlight />

            <Card />
            <Card />

            {/* <Contact /> */}

            {/* <Footer /> */}
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;

/*

- fill details
- add email icon in cards
- make SOP
- make default as dark mode


*/
