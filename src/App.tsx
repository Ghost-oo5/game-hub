import { Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/useGenre";
import PlatfromSelector from "./components/PlatfromSelector";
import { Platform } from "./Hooks/useGames";


export interface GameQuery
{
  genre: Genre|null,
  platform: Platform|null,
}


export default function App() {
 const [gameQuery, setGameQuery]= useState<GameQuery>({} as GameQuery)
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <Navbar></Navbar>
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingLeft={"10px"}>
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery ,genre})} />
          </GridItem> 
        </Show>
        <GridItem area={"main"} bg={""}>
          <PlatfromSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery ,platform})}/>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </> 
  );
}
