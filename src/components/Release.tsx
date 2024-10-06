import { Badge } from "@chakra-ui/react"

interface Props
{
    release: string,
}
function Release({release}:Props) {
  return (
    <>
    <Badge fontSize={"14px"} color={'gray.400'} paddingX={2} borderRadius={"5px"} textTransform={'capitalize'}>Release date: {release}</Badge>

    </>
  )
}

export default Release