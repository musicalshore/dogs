import axios from "axios";

export const fetchBreeds = async () => {
  const breeds = [];
  const response = await axios("https://dog.ceo/api/breeds/list/all");
  const { message } = response.data;
  let id=0;
  for (let name in message) {
    breeds.push({
      id: ++id,
      name,
      subBreeds: [...message[name]]
    });
  }
  console.log("🚀 ~ file: api.js ~ line 8 ~ fetchBreeds ~ message", breeds)

  return breeds;
};

export const fetchBreedImage = async (breed) => {
  const response = await axios(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );
  const { message: breedImage } = response.data;
  return breedImage;
};
