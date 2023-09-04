import React from 'react'
import ImageShow from './ImageShow'

function ImagesList({ images }) {

  const renderedImage = images.map(image => {
    return <ImageShow key={image.id} image={image} />
  })

  return (
    <div className='images'>
      {(images !== []) && renderedImage}
    </div>
  )
}

export default ImagesList