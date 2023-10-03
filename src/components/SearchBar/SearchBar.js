import React, { useState } from 'react'
import './SearchBar.css'

function SearchBar({ enSubmit }) {

  const [valueChange, setValueChange] = useState('')

  const handleForm = (e) => {
    e.preventDefault();
    valueChange && enSubmit(valueChange);
  }

  const handleChange = e => setValueChange(e.target.value)

  return (
    <div className='form'>
      <h1>Buscador de Fotos</h1>
      <form onSubmit={handleForm}>
        <input maxLength={20} value={valueChange}
          onChange={handleChange} placeholder='ej: Perros' />
        <button>Buscar</button>
      </form>
    </div>
  )
}

export default SearchBar