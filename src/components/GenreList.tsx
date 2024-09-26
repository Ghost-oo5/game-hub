import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../Hooks/useGenre";
import getCroppedImage from "../Services/image.url";

export default function GenreList() {
  const { data } = useGenres();
  return (
    <>
      <List>
        {data.map((item) => (
          <ListItem key={item.id} paddingY={"10px"}>
            <HStack>
              <Image boxSize={"32px"} borderRadius={8} src={getCroppedImage(item.image_background)}/>
              <Text fontSize={"lg"}>{item.name}</Text>
              </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}
