import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png"
import "../index.css"
export default function Navbar() {
  return (
    <HStack>
        <Image src={logo} boxSize={'60px'} className="logo"/>
        <Text>Ghosts.co</Text>
    </HStack>
  )
}
