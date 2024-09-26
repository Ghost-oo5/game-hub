import { Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
export default function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base:'1fr',
          lg:'200px 1fr'
        }}
      >
        <GridItem area={"nav"}>
          <Navbar></Navbar>
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}paddingLeft={"10px"}>
            <GenreList/>
          </GridItem>
        </Show>
        <GridItem area={"main"} bg={""}>
        <GameGrid></GameGrid>
        </GridItem>
      </Grid>
      
    </>
  );
}
