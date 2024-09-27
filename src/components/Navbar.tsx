import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import "../index.css";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
export default function Navbar() {
  return (
    <HStack  padding={"10px"}>
      <Image src={logo} boxSize={"60px"} className="logo" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}
