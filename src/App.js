import React, { useEffect, useState } from 'react';
import SearchBar from "./components/SearchBar";
import apiAxios from './apiAxios';
import ImagList from './components/ImagesList';
import './css/styles.css';

function App() {

  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (term = 'dog') => {
    setLoading(true)
    let result = await apiAxios(term)
      .catch(error => console.error(error))
      .finally(() => setLoading(false))

    setImages(result)
  }

  useEffect(() => {
    handleSubmit()
  }, [])

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '3rem' }}>Cargando...</p>
  }

  return (
    <div className='App'>
      <SearchBar enSubmit={handleSubmit} />
      <ImagList images={images} />
    </div>
  )
}

export default App