import { Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import { Game } from "../Hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImage from "../Services/image.url";
import Rating from "./Rating";
import Release from "./Release";
// import Emojis from "./Emojis";

interface Props {
  game: Game;
  
}

export default function GameCard({ game }: Props) {
  return (
    <>
      <Card  borderRadius={10} overflow={"hidden"}>
        <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
      <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"} marginTop={2}>
          <PlatformIconList platform={game.parent_platforms.map((item)=>item.platform)}/>
            <CriticScore score={game.metacritic}/>
        </HStack>
        <Rating rating={game.rating}/>
        <Release release={game.released}/>
      </CardBody>
      </Card>
    </>
  );
}
