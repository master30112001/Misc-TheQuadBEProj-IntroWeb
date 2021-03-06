import React from 'react';
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  SimpleGrid,
  Icon,
  Image,
} from '@chakra-ui/react';

import { FiExternalLink } from 'react-icons/fi';

const FeaturesHighlight = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
      <Flex bg="brand.400">
        <Image
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
          alt="3 women looking at a laptop"
          fit="cover"
          w="full"
          h={{ base: 64, md: 'full' }}
          bg="gray.100"
          loading="lazy"
          opacity={0.4}
        />
      </Flex>
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, md: 8, lg: 20 }}
        py={24}
        zIndex={3}
      >
        <chakra.span
          color={useColorModeValue('brand.600', 'gray.300')}
          fontSize="lg"
          textTransform="uppercase"
          fontWeight="extrabold"
        >
          Finest developers
        </chakra.span>
        <chakra.h1
          mb={4}
          fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }}
          fontWeight="bold"
          color={useColorModeValue('brand.600', 'gray.300')}
          lineHeight="shorter"
          textShadow="2px 0 currentcolor"
        >
          We&apos;re here to develop
        </chakra.h1>
        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="lg"
          color={useColorModeValue('brand.600', 'gray.400')}
          letterSpacing="wider"
        >
          We are the matchless developers to get your work par excellence.
        </chakra.p>
        <Box display="inline-flex" rounded="md" shadow="lg">
          <chakra.a
            mt={2}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            px={5}
            py={3}
            border="solid transparent"
            fontWeight="bold"
            w="full"
            rounded="md"
            color={useColorModeValue('black')}
            bg={useColorModeValue('brand.600', 'green.500')}
            _hover={{
              bg: useColorModeValue('brand.700', 'green.600'),
            }}
          >
            Get in touch
            <Icon as={FiExternalLink} ml={2} />
          </chakra.a>
        </Box>
      </Flex>
    </SimpleGrid>
  );
};

export default FeaturesHighlight;
