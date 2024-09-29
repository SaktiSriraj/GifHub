import React, { createContext } from 'react'

const GifContext = createContext();

const GifProvider = ({ children }) => {
  return (
    <div>
      <GifContext.Provider>{children}</GifContext.Provider>
    </div>
  )
}

export default GifProvider
