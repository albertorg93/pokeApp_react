import React, { useEffect, useState } from 'react';
import axios from 'axios'
// import './Topics.css'
const Card = () => {
  const [value, setValue] = useState(""); // Para guardar el dato a buscar
  const [pokemon, setPokemons] = useState({}); // Para guardar los posts
  // const [loading, setLoading] = useState(false);
  // equivale a un componentDidUpdate()
  useEffect(() => {
    async function fetchData() {
      try{
        // setLoading(true)
        // Petición HTTP
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
        const json = res.data;

        setPokemons(json);
        // setValue("")
        // setLoading(false)
      }catch(e){
        setPokemons([]) // No pintes nada
      }
    }
    fetchData();
  }, [value]);
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.topic.value)
    setValue(e.target.topic.value) // Modificando el estado de Value
  };
  // console.log(value,"esto es value")
  // console.log(posts,"esto es posts")

  return    <section>
              <h1> Bienvenido a la Pokedex</h1>
              <form onSubmit={handleSubmit}>
                <input name="topic" className='busqueda'/>
              </form>
              {pokemon.sprites === undefined? 
                <div>
                Busca tu pokemon favorito
                </div>: 
                          <section className="searchedPoke">
                          <div className='pokeinfo'>
                          <p>Name: {pokemon.name}</p>
                          <p>Id: {pokemon.id}</p>
                          <p>Weight: {pokemon.weight}</p>
                          <img className='imagenpoke' src={pokemon.sprites.other.dream_world.front_default} alt='pokemon'/>
                          </div>
                          </section>
                             
                                
              }
              
            </section>
};
export default Card;








