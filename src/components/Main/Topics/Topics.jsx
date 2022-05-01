import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Topics.css'
import { v4 as uuidv4 } from 'uuid';
const Topics = () => {
  const [value, setValue] = useState(""); // Para guardar el dato a buscar
  const [posts, setPosts] = useState([]); // Para guardar los posts
  // equivale a un componentDidUpdate()
  useEffect(() => {
    async function fetchData() {
      try{
        // Petición HTTP
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
        const json = res.data;
        // Guarda en el array de posts el resultado. Procesa los datos
        
     let arr = []
      arr = Object.entries(json)

        console.log(arr,"este es el array definitivo")
        // console.log(Object.entries(json),"array del objeto de pokemons")
        setPosts(arr);
      
      }catch(e){
        setPosts([]) // No pintes nada
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
              <h1>Búsqueda por topic</h1>
              <form onSubmit={handleSubmit}>
                <input name="topic"/>
              </form>
              {posts.length!==0?
                          
                                <ul className='topics'>
                                  {posts.map(post => (
                                    <li key={uuidv4()}>
                                      {post.abilities}
                                      { console.log(post[0][1][0].name,"hola desde jsx con post y el name") }
                                      </li>
                                    
                                    // <p>hola</p>
                                  ))}
                               
                                </ul>
                             
                                :""
              }
              
            </section>
};
export default Topics;









