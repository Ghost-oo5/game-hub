import { Image, ImageProps } from "@chakra-ui/react";
import bullseye from "../assets/Bulls eye.png";
import thumbsup from "../assets/Thumbs up.png";
import fire from "../assets/fire.png";

interface Props {
  rating: number;
}
export default function Emojis({ rating }: Props) {
  if (rating < 3) return null;

  const emojiMap:{[key:number]: ImageProps} = {
    3: { src: thumbsup, alt: "meh", boxSize:"40px" },
    4: { src: bullseye, alt: "recomended", boxSize:"40px" },
    5: { src: fire, alt: "lit", boxSize:"40px" },
  };
  return (
    <>
      <Image {...emojiMap[rating]} marginTop={3} width={'50px'}/>
    </>
  );
}
