import { Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";




export default function GameGrid() {
const {games, error}= useGames();

  return (
    <>
    {error && <Text fontSize='30px' color='tomato'>{error}</Text> }
      {games.map((item) => 
        <li key={item.id}>{item.name}</li>
      )}
    </>
  );
}
