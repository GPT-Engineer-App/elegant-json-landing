import { Container, VStack, Text, Box, Link, Code } from "@chakra-ui/react";
import { FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} align="start">
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            {"{"}
          </Text>
          <Box pl={4}>
            <Text fontSize="lg" fontWeight="bold">
              "0KB.ORG": {"{"}
            </Text>
            <Box pl={4}>
              <Text>
                "error": <Code>false</Code>,
              </Text>
              <Text>
                "packet-size": <Code>"0KB"</Code>,
              </Text>
              <Text>
                "response": <Code>"Coming soon..."</Code>,
              </Text>
              <Text>
                "site":{" "}
                <Link href="https://0KB.org" color="teal.500" isExternal>
                  <Code>"https://0KB.org"</Code>
                </Link>
                ,
              </Text>
              <Text>
                "domain-admin": <Code>"0@0KB.ORG"</Code>
              </Text>
            </Box>
            <Text fontSize="lg" fontWeight="bold">
              {"},"}
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              "Contact": {"{"}
            </Text>
            <Box pl={4}>
              <Text>
                "telegram":{" "}
                <Link href="https://t.me/zerokilobytes" color="teal.500" isExternal>
                  <Code>"https://t.me/zerokilobytes"</Code>
                </Link>
                ,
              </Text>
              <Text>
                "site":{" "}
                <Link href="https://johnle.org" color="teal.500" isExternal>
                  <Code>"https://johnle.org"</Code>
                </Link>
                ,
              </Text>
              <Text>
                "github":{" "}
                <Link href="https://github.com/9-5" color="teal.500" isExternal>
                  <Code>"https://github.com/9-5"</Code>
                </Link>
                ,
              </Text>
              <Text>
                "linkedin":{" "}
                <Link href="https://linkedin.com/in/johnle" color="teal.500" isExternal>
                  <Code>"https://linkedin.com/in/johnle"</Code>
                </Link>
                ,
              </Text>
              <Text>
                "email": <Code>"john@johnle.org"</Code>
              </Text>
            </Box>
            <Text fontSize="lg" fontWeight="bold">
              {"},"}
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              "Projects": {"{"}
            </Text>
            <Box pl={4}>
              <Text>
                "portfolio": <Code>"Coming soon."</Code>
              </Text>
            </Box>
            <Text fontSize="lg" fontWeight="bold">
              {"}"}
            </Text>
          </Box>
          <Text fontSize="xl" fontWeight="bold">
            {"}"}
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
