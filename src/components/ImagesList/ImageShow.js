import React from 'react'

function ImageShow({ image }) {
  return (
    <div className='image'>
      <img src={image.urls.small} alt={image.urls.description} />
    </div>
  )
}

export default ImageShow