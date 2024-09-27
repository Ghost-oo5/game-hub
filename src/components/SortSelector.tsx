import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";


interface Props
{
    onSelectSortOrder: (SortOrders:string)=>void;
    sortOrder:String,
}
export default function SortSelector({onSelectSortOrder, sortOrder}:Props) {
  const SortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Data Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "metacritic", label: "Popularity" },
    { value: "rating", label: "Average Rating" },
  ];

  const currentSortOrder = SortOrders.find((item)=>item.value=== sortOrder)
  
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order {currentSortOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {SortOrders.map((item) => (
            <MenuItem onClick={()=>onSelectSortOrder(item.value)} key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}
