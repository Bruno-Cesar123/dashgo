import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Bruno Cesar</Text>
        <Text color="gray.300" fontSize="small">
          brunocesar12386@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Bruno Cesar"
        src="https://github.com/Bruno-Cesar123.png"
      />
    </Flex>
  )
}