import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { color } from "framer-motion";


export default function ColorModeSwitch() {

    const {colorMode, toggleColorMode} = useColorMode();
    
  return (

    <>
    <HStack>
        <Switch colorScheme="red" isChecked={colorMode =="dark"} onChange={toggleColorMode} />
        <Text>Dark Mode</Text>
    </HStack>
    </>
  )
}
