import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../Hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number,
}
export default function PlatfromSelector({ onSelectPlatform,selectedPlatformId }: Props) {
  const { data, error } = usePlatforms();
const selectedPlatform = data.results.find((item)=>item.id==selectedPlatformId)
  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Platform: {selectedPlatform?.name|| "Not Specified"}
        </MenuButton>
        <MenuList>
          {data?.results.map((item) => (
            <MenuItem onClick={() => onSelectPlatform(item)} key={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}
