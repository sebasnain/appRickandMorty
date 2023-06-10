const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

 async function getCharById(req, res) {
  const { id } = req.params;
  try {
    
  const response = (await axios.get(`${URL}${id}`)).data
    const character = {
      id: response.id,
      name: response.name,
      gender: response.gender,
      species: response.species,
      origin: response.origin,
      image: response.image,
      status: response.status
    }
      if (character.name) {
        return res.status(200).json(character);
      } else {
        return res.status(404).send("id no encontrado");
      }
    
    
  } catch (error) {
    
      return res.status(500).send({ message: error.message });
   
  }

}

module.exports = getCharById;

