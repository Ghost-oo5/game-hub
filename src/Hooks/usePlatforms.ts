import { useQuery } from "@tanstack/react-query";
// import useData from "./useData";
import apiClient, { FetchResponse } from "../Services/api-client";
import platforms from '../Data/Platforms'

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //Platforms remain fresh fro 24 hours
    initialData:{count:platforms.length, results:platforms} // this line loads platforms data from local directory not from API. it helps to load platforms faster
  });

export default usePlatforms;
