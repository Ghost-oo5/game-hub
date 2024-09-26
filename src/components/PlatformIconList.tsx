import { Platform } from "../Hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaApple,
  FaPlaystation,
  FaAndroid,
  FaXbox,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platform: Platform[];
}

export default function PlatformIconList({ platform }: Props) {
  const iconmap: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    linux: FaLinux,
    apple: FaApple,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  return (
    <HStack marginY={"10px"}>
      {platform.map((item) => (
        <Icon as={iconmap[item.slug]} color={"gray.500"}/>
      ))}
    </HStack>
  );
}
