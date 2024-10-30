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
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"10px"}>
            <HStack>
              <Image
                boxSize={"45px"}
                objectFit={"cover"}
                borderRadius={8}
                src={getCroppedImage(genre.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                variant={"link"}
                fontSize={"xl"}
                fontWeight={genre.id==selectedGenre?.id ? "bolder": "normal"}
                whiteSpace={'normal'}
                textAlign={'left'}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}
