import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchBreedImage } from "./api";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  text-align: center;
`
const CenteredText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font: small-caps bold 24px/1 sans-serif;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function DogTile({ breed }) {
  const [imageSrc, setImageSrc] = useState("");

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });

  useEffect(() => {
    async function fetchImageSrc() {
      const breedImage = await fetchBreedImage(breed.name);
      setImageSrc(breedImage);
    }
    /**
   * lazily fetch the image source for the breed
   */
    if (inView) {
      console.log('in', breed);
      fetchImageSrc();
    }
  }, [breed, inView]);
  return (
    <Wrapper ref={ref}>
      {imageSrc && inView &&
        <>
          <Img src={imageSrc} alt={breed.name} />
          <CenteredText>{breed.name}</CenteredText>
        </>
      }
    </Wrapper>
  );
}

export default DogTile;
