import { Button, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";
import { Fragment } from "react/jsx-runtime";

interface Props {
  gameQuery: GameQuery;
}
export default function GameGrid({ gameQuery }: Props) {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error) return <Text>{error.message}</Text>;
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
        {data?.pages.map((page, index) => (
          <Fragment key={index}>
            {page?.results.map((item) => (
              <GameCard key={item.id} game={item} />
            ))}
          </Fragment>
        ))}
      </SimpleGrid>
      <HStack justifyContent={'center'} marginBottom={5}>
        {hasNextPage && <Button colorScheme ={isFetchingNextPage?'yellow':'gray'} disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load more..."}
        </Button>}
      </HStack>
    </>
  );
}
