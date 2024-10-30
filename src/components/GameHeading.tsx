import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import { Genre } from "../Hooks/useGenre";
import { Platform } from "../Hooks/usePlatforms";
interface Props {
  gameQuery: GameQuery;
}
export default function GameHeading({ gameQuery }: Props) {
  const platform = Platform(gameQuery.platformId);
  const genre = Genre(gameQuery.genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} ${
    gameQuery.searchText || "Games"
  } `;

  return (
    <>
      <Heading as={"h1"} marginY={5}>
        {heading}
      </Heading>
    </>
  );
}
