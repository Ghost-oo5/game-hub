import { Badge } from "@chakra-ui/react";

interface Prop
{
    rating: number;
}
function Rating({rating}:Prop) {
    const color = (rating>4)?'green':(rating>3)?'yellow':"red";
  return (
    <>
    <Badge colorScheme={color} fontSize={"14px"} paddingX={2} borderRadius={"5px"} textTransform={'capitalize'}>Rating: {rating}</Badge>
    </>
  )
}

export default Rating