import React from 'react';
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Link,
  List,
  ListItem,
  ListIcon,
  Spacer,
  Stack,
  Badge,
  HStack,
  Button,
} from '@chakra-ui/react';

import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { CheckIcon } from '@chakra-ui/icons';

const KarCard = () => {
  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        mx={{ lg: 8 }}
        display={{ lg: 'flex' }}
        maxW={{ lg: '5xl' }}
        minW={{ lg: '5xl' }}
        boxShadow={'5xl'}
        rounded="lg"
      >
        <Box w={{ lg: '25%' }}>
          <Box
            h={{ base: 64, lg: 'full' }}
            rounded="lg"
            bgSize="cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
            }}
          ></Box>
        </Box>

        <Box py={12} px={6} maxW={{ base: 'xl', lg: '5xl' }} w={{ lg: '75%' }}>
          <chakra.h2
            fontSize={{ base: '2xl', md: '3xl' }}
            color={useColorModeValue('gray.800', 'white')}
            fontWeight="bold"
          >
            Karan Lakhwani
          </chakra.h2>

          <Stack direction="row">
            <Badge px={1} rounded="lg" variant="subtle" colorScheme="green">
              Success
            </Badge>
          </Stack>

          <chakra.p mt={4} color={useColorModeValue('gray.600', 'gray.400')}>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure */}
          </chakra.p>
          <Flex>
            <List mr="5%" spacing={0.5}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                5.000 page views
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                50 automation executions
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                50 identified users
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                All features
              </ListItem>
            </List>

            <List spacing={0.5}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                5.000 page views
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                50 automation executions
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                50 identified users
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                All features
              </ListItem>
            </List>
          </Flex>
          <Box mt={8}>
            <HStack>
              <Link href="https://chakra-ui.com">
                {' '}
                <Button
                  size="sm"
                  colorScheme="facebook"
                  leftIcon={<FaGithub />}
                >
                  Github
                </Button>
              </Link>

              <Link href="https://chakra-ui.com">
                <Button
                  size="sm"
                  colorScheme="linkedin"
                  leftIcon={<FaLinkedin />}
                >
                  LinkedIn
                </Button>
              </Link>

              <Link href="https://chakra-ui.com">
                <Button
                  size="sm"
                  leftIcon={<MdEmail />}
                  colorScheme="red"
                  variant="solid"
                >
                  Email
                </Button>
              </Link>
            </HStack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default KarCard;
