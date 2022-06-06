import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Spacer,
  HStack,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

import Header from './components/Header.component';
import Footer from './components/Footer.component';
import FeaturesHighlight from './components/Features-Highlight.component';
import FeaturesDescription from './components/Features-Description.component';
import Contact from './components/Contact.component';

import VedCard from './components/PersonCards/VedCard.component';
import TanCard from './components/PersonCards/TanCard.component';
import KarCard from './components/PersonCards/KarCard.component';
import VaishCard from './components/PersonCards/VaishCard.component';

import theme from './theme';

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

            <KarCard />
            <TanCard />
            <VaishCard />
            <VedCard />

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
- make SOP
- make default as dark mode


*/
