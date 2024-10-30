import { useQuery } from "@tanstack/react-query";
import genres from "../Data/Genre";
import APIClient from "../Services/api-client";
import ms from "ms";

const apiclient = new APIClient<Genre>('/genres')
//
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn:  apiclient.getAll,
    staleTime: ms('24h'), //Genres remain fresh fro 24 hours
    initialData: { count: genres.length, results: genres,next:null }, // this line loads genres data from local directory not from API. it helps to load genres faster
  });

export default useGenres;

export const Genre =(id?:number)=>
{
  const {data:genres} = useGenres();
  return genres?.results.find((item)=>item.id == id)
}