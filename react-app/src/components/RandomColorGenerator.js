import React from 'react'
import colorGenerator from '../utility/colorGenerator';

const RandomColorGenerator = () => {
  const color = colorGenerator();
  return (
    <div style={{background: `${color}`, height: '100vh'}}/>
  )
}

export default RandomColorGenerator;