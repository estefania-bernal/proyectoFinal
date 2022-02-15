import React from 'react';
import estilos from './Search.module.scss';

const Search = ({ setSearch }) => {
  return (
    <form className='d-flex justify-content-center gap-4 mb-5'>
        <input 
        onChange={e=>{
            setSearch(e.target.value)
        }}
        placeholder='Busca tu personaje favorito' 
        type='text' 
        className={estilos.input}
        />
        <button className={`${estilos.btn} btn btn-light fs-5`}>Buscar</button>
    </form>
  );
}

export default Search