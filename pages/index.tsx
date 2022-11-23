import type { NextPage } from "next";
import {
  Stack,
  VStack,
  HStack,
  Text,
  Center,
  Box,
  SimpleGrid,
  IconButton,
  Flex,
  Container,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import MainFrame from "./components/MainFrame";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home: NextPage = () => {
  return (
    <VStack w={"100%"} h={"100vh"} borderWidth="6px" borderColor={"blue.100"}>
      <HStack>
        <Header />
      </HStack>
      <HStack>
        <MainFrame />
      </HStack>
      <HStack>
        <Footer />
      </HStack>
    </VStack>
  );
};

export default Home;
