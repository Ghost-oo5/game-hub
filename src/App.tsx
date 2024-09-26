import { Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
export default function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <Navbar></Navbar>
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} bg={""}>
            Aside
          </GridItem>
        </Show>
        <GridItem area={"main"} bg={""}>
        <GameGrid></GameGrid>
        </GridItem>
      </Grid>
      
    </>
  );
}
