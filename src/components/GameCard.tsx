import { Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import { Game } from "../Hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImage from "../Services/image.url";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <>
      <Card  borderRadius={10} overflow={"hidden"}>
        <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList platform={game.parent_platforms.map((item)=>item.platform)}/>
            <CriticScore score={game.metacritic}/>
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
      </Card>
    </>
  );
}
