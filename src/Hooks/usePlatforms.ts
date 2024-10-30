import { useQuery } from "@tanstack/react-query";
// import useData from "./useData";
import platforms from '../Data/Platforms';
import APIClient from "../Services/api-client";


export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiclient = new APIClient<Platform>('/platforms')

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn:  apiclient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //Platforms remain fresh fro 24 hours
    initialData:{count:platforms.length, results:platforms, next:null} // this line loads platforms data from local directory not from API. it helps to load platforms faster
  });

export default usePlatforms;


export const Platform=(id?:number)=>
{
  const {data:platforms} = usePlatforms();
  return platforms?.results.find((item)=>item.id==id)
}