import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import "../index.css";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props
{
    onSearch:(searchText:string)=>void;
}

export default function Navbar({onSearch}:Props) {
  return (
    <HStack  padding={"10px"}>
      <Image src={logo} boxSize={"60px"} className="logo" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}
