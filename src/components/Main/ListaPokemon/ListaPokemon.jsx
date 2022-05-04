import React from 'react'

const ListaPokemon = (props) => {
   const pokelista = props.data;
   console.log(pokelista[0])

  return    <section>
{/*              
              {pokelista[0].sprites === undefined? 
                <div>
                </div>: 
                          <section className="searchedPoke">
                          <div className='pokeinfo'>
                          <p>Name: {pokelista[0].name}</p>
                          <p>Id: {pokelista[0].id}</p>
                          <p>Height: {pokelista[0].height}</p>
                          <p>Weight: {pokelista[0].weight}</p>
                          <img className='imagenpoke' src={pokelista[0].sprites.other.dream_world.front_default} alt='pokemon'/>
                          </div>
                          </section>                                
              }
               */}
            </section>
};
export default ListaPokemon;










