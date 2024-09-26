import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

export default function GameGrid() {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && (
        <Text fontSize="30px" color="tomato">
          {error}
        </Text>
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding={10}
        spacing={3}
      >
        {isLoading && skeletons.map((item)=><GameCardSkeleton key={item}/>)}
        {data.map((item) => (
          <GameCard key={item.id} game={item} />
        ))}
      </SimpleGrid>
    </>
  );
}
