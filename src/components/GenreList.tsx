import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenre";
import getCroppedImage from "../Services/image.url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

export default function GenreList({onSelectGenre}:Props) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <List>
        {data.map((item) => (
          <ListItem key={item.id} paddingY={"10px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImage(item.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(item)}
                variant={"link"}
                fontSize={"lg"}
              >
                {item.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}
