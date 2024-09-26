import useGenre from "../Services/usegenre"

export default function GenreList() {
    const {genre}= useGenre();
  return (
    <>
<ul>
    {genre.map((item)=><li key={item.id}>{item.name}</li>)}
</ul>
    </>
  )
}
