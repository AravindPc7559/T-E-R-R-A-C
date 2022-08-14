import {
  Box,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import "./App.css";
import InputField from "./Components/Input/InputField";
import InitialAnimation from "./Components/IntialAnimation";

const colors = {
  brand: {
    900: "#1a365d",
    // 800: '#153e75',
    // 700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

function App() {
  const [status, setStatus] = useState(false);

  setTimeout(() => {
    setStatus(true);
  }, 3000);
  return (
    <ChakraProvider theme={theme}>
      {status ? (
        <Container className="App" maxW="container.xlg">
          <Center pt={150}>
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h3 className="animate-charcter"> T E R R A C</h3>
                </div>
              </div>
            </div>
          </Center>
          <Center>
            <Heading size="sm" fontSize="15px" noOfLines={1} color="gray">
              Youtube Video Downloader
            </Heading>
          </Center>
          <InputField />
          <SimpleGrid minChildWidth="120px" column={4} row={1} spacing="40px">
            <Center gap={10} mt={100}>
              <Box height="80px">
                <SocialIcon url="https://www.facebook.com/pc.pc.167/" />
              </Box>
              <Box height="80px">
                <SocialIcon url="https://www.linkedin.com/in/aravindpc/" />
              </Box>
              <Box height="80px">
                <SocialIcon url="https://twitter.com/AravindPc14" />
              </Box>
              <Box height="80px">
                <SocialIcon url="https://www.instagram.com/_arvn_d/" />
              </Box>
            </Center>
          </SimpleGrid>
          <Center>
            <Text color="white">2022 | Founder : Aravind Pc</Text>
          </Center>
        </Container>
      ) : (
        <InitialAnimation />
      )}
    </ChakraProvider>
  );
}

export default App;
