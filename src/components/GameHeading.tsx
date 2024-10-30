import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../Hooks/useGenre";
import usePlatforms from "../Hooks/usePlatforms";

interface Props
{
    gameQuery: GameQuery
}
export default function GameHeading({gameQuery}:Props) {
  
const {data:genres} = useGenres();
const {data:platforms} = usePlatforms();
const genre = genres.results.find((item)=>item.id == gameQuery.genreId)
const platform = platforms.results.find((item)=>item.id==gameQuery.platformId)
    const heading = `${platform?.name ||''} ${genre?.name ||''} ${gameQuery.searchText || 'Games'} `
    
  return (
    
    <>
    <Heading as={"h1"} marginY={5}>{heading}</Heading>
    </>
  )
}
