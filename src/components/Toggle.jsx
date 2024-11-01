import { Flex, FormControl, FormLabel, Switch } from "@chakra-ui/react";

export const Toggle = ({ label, isChecked, setCheck }) => {
  return (
    <FormControl display="flex" alignItems="center">
      <Flex justifyContent="space-between" w="100%">
        <FormLabel mb="0">{label}</FormLabel>
        <Switch
          position="absolute"
          right="0"
          isChecked={isChecked}
          onChange={(e) => setCheck(e.target.checked)}
        />
      </Flex>
    </FormControl>
  );
};
