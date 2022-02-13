import { Box, Flex, Avatar, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      { !!showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Daniel Vidal</Text>
          <Text color="gray.300" fontSize="small">
            denion465
          </Text>
      </Box>
      )}
    <Avatar size="md" name="Daniel Vidal" src="https://github.com/denion465.png" />
  </Flex>
  );
}
