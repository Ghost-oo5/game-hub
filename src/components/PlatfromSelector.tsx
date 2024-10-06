import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../Hooks/usePlatforms";
import { Platform } from "../Hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform|null,
}
export default function PlatfromSelector({ onSelectPlatform,selectedPlatform }: Props) {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Platform: {selectedPlatform?.name || "Not Selected"}
        </MenuButton>
        <MenuList>
          {data.map((item) => (
            <MenuItem onClick={() => onSelectPlatform(item)} key={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}
