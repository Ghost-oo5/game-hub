import { useQuery } from "@tanstack/react-query";
import genres from "../Data/Genre";
import APIClient from "../Services/api-client";

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
    staleTime: 24 * 60 * 60 * 1000, //Genres remain fresh fro 24 hours
    initialData: { count: genres.length, results: genres }, // this line loads genres data from local directory not from API. it helps to load genres faster
  });

export default useGenres;
