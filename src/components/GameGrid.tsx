import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";

interface Props {
  gameQuery : GameQuery

}
export default function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && (
        <Text fontSize="30px" color="tomato">
          {error}
        </Text>
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={10}
        spacing={6}
      >
        {isLoading && skeletons.map((item) => <GameCardSkeleton key={item} />)}
        {data.map((item) => (
          <GameCard key={item.id} game={item} />
        ))}
      </SimpleGrid>
    </>
  );
}
