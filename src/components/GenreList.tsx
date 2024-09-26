import useGenres from "../Hooks/useGenre";


export default function GenreList() {
    const {data}= useGenres();
  return (
    <>
<ul>
    {data.map((item)=><li key={item.id}>{item.name}</li>)}
</ul>
    </>
  )
}
