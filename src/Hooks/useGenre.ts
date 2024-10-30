import { useQuery } from "@tanstack/react-query";
import genres from "../Data/Genre";
import apiClient from "../Services/api-client";
import { FetchResponse } from "./useData";
//
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({ 
    queryKey: ['genres'],
    queryFn: () => {
      return apiClient.get<FetchResponse<Genre>>("/genres").then((res)=>res.data);
    },
  });

export default useGenres;
