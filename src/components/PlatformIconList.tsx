import { HStack, Icon } from "@chakra-ui/react";
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
import { Platform } from "../Hooks/usePlatforms";

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
        <Icon as={iconmap[item.slug]} fontSize={'large'} color={"gray.500"} key={item.id}/>
      ))}
    </HStack>
  );
}
