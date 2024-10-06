import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenre";
import getCroppedImage from "../Services/image.url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null,
}

export default function GenreList({selectedGenre,onSelectGenre}:Props) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
    <Heading fontSize={'2xl'} marginY={2}>Genres</Heading>
      <List>
        {data.map((item) => (
          <ListItem key={item.id} paddingY={"10px"}>
            <HStack>
              <Image
                boxSize={"45px"}
                objectFit={"cover"}
                borderRadius={8}
                src={getCroppedImage(item.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(item)}
                variant={"link"}
                fontSize={"xl"}
                fontWeight={item.id==selectedGenre?.id ? "bold": "normal"}
                whiteSpace={'normal'}
                textAlign={'left'}
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
