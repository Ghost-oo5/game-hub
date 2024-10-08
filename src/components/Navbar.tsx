import { HStack, Image } from "@chakra-ui/react";
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
      <Image src={logo} boxSize={"70px"} className="logo" cursor={'pointer'} onClick={()=>window.location.reload()}/>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}
