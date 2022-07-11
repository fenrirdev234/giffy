import { useEffect, useState, useContext } from 'react'
import GifsContext from '../context/GifsContext'
import getGifs from '../services/getGifs'


const useGifs = ({ keyword } = { keyword: null }) => {

    const { gifs, setGifs } = useContext(GifsContext)

    const [loading, setLoading] = useState(false)
    //recuperamos la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(function () {
        setLoading(true)

        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                //guardamos la keyword del localStorage
                localStorage.setItem("lastKeyword", keyword)
            }
            )
    }
        , [keyword, setGifs, keywordToUse])
    return { loading, gifs }
}

export default useGifs