import { Button, HStack, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from 'react-infinite-scroller';
import { Fragment } from "react/jsx-runtime";
import { GameQuery } from "../App";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

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
      <InfiniteScroll 
      loadMore={()=>fetchNextPage()}
      hasMore={!!hasNextPage}
      >
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
      </InfiniteScroll>
      <HStack justifyContent={'center'} marginBottom={5}>
        {hasNextPage && <Button colorScheme ={isFetchingNextPage?'yellow':'gray'} disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
          {"Loading..."}<Spinner marginLeft={3}/>
        </Button>}
      </HStack>
    </>
  );
}
