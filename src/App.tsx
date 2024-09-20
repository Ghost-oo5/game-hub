import { Show } from "@chakra-ui/react"
import { Grid, GridItem } from '@chakra-ui/react'
export default function App() {
  return (
    <>
    <Grid templateAreas={{
      base: ` "main"`,
      lg:`"nav nav" "aside main"`
    }}>
      <GridItem area={'nav'} bg={"coral"}>Nav</GridItem>
      <Show above="lg">
        <GridItem area={'aside'} bg={"gold"}>Aside</GridItem>
      </Show>
      <GridItem area={'main'} bg={"dodgerblue"}>Main</GridItem>
    </Grid>
    </>
  )
}