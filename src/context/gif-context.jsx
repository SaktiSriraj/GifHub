import { GiphyFetch } from '@giphy/js-fetch-api';
import React, { createContext, useState, useContext } from 'react';

const GifContext = createContext();

const GifProvider = ({ children }) => {

    const [ gifs, setGifs ] = useState([]);
    const [ filter, setFilter ] = useState("gifs");
    const [ favorites, setFavorites ] = useState([]);

    const gif = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY)
    return (
        <div>
            <GifContext.Provider value={{ gif, gifs, setGifs, filter, setFilter, favorites }}>{children}</GifContext.Provider>
        </div>
    )
}

export const GifState = () => {
    return useContext(GifContext)
}

export default GifProvider
