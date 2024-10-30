import {
  Button,
  Heading,
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
  selectedGenreId?: number,
}

export default function GenreList({selectedGenreId,onSelectGenre}:Props) {
  const { data, isLoading, error } = useGenres();

  if (error) return <Text marginTop={5} color={'red'} fontWeight={'bold'}>{error.message}</Text>;
  if (isLoading) return <Spinner color="red" />;
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
                fontWeight={genre.id==selectedGenreId ? "bolder": "normal"}
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
