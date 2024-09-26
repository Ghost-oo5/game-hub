import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png"
import "../index.css"
import ColorModeSwitch from "./ColorModeSwitch";
export default function Navbar() {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
        <Image src={logo} boxSize={'60px'} className="logo"/>
        <Text>Ghosts.co</Text>
        <ColorModeSwitch/>
    </HStack>
  )
}
