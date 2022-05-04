import React, {  useEffect, useState } from 'react'
import logopoke from '../../assets/logopoke.png'
import { Route,Routes } from 'react-router-dom'
import Card from './Card'
import ListaPokemon from './ListaPokemon'
import axios from 'axios'

export default function Main() {
  const [value, setValue] = useState(""); // Para guardar el dato a buscar
  const [pokemon, setPokemons] = useState({}); // Para guardar los posts

  // equivale a un componentDidUpdate()
  useEffect(() => {
    async function fetchData() {
      try{
        // Petición HTTP
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
        const json = res.data;
        setPokemons(json);
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
    e.target.topic.value = ""

  };
  
  return (
    <main>
    <img className='logoinicial' src={logopoke} alt="logopokemon"/>
    <h1> Bienvenido a la Pokedex</h1>
              <form onSubmit={handleSubmit}>
                <input name="topic" className='busqueda'/>
              </form>
    <Routes>
    <Route element={<Card data={pokemon}/>} path='/card'/>
    <Route element={<ListaPokemon/>} path='/listapokemon'/>
    </Routes>
    
    </main>
  )
}



