import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";

interface Game
{
    id:number,
    name:string,
}

interface FetchGamesResponse
{
    count:number,
    results:Game[];
}


export default function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        console.log(res.data)
        setGames(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <>
    {error && <p>{error}</p> }
      {games.map((item) => 
        <li key={item.id}>{item.name}</li>
      )}
    </>
  );
}
