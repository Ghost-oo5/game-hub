import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient from "../Services/api-client";
import { Platform } from "./usePlatforms";



export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating:number,
  released:string,
  developers:String,
}
const apiclient = new APIClient<Game>('/games')
const useGames = (gameQuery: GameQuery) => 
  useQuery({
    queryKey:['games', gameQuery],
    queryFn:()=>
      apiclient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering:gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      })
  })

export default useGames;
