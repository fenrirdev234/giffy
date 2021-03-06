import { useEffect, useState, useContext } from 'react'
import GifsContext from '../context/GifsContext'
import getGifs from '../services/getGifs'

const INITIAL_PAGE = 0
const useGifs = ({ keyword } = { keyword: null }) => {

    const { gifs, setGifs } = useContext(GifsContext)
    const [page, setPage] = useState(INITIAL_PAGE)

    const [loadingNextPage, setLoadingNextPage] = useState(false)
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

    useEffect(function () {
        if (page === INITIAL_PAGE) return

        setLoadingNextPage(true)

        getGifs({ keyword: keywordToUse, page })
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadingNextPage(false)
            })

    }
        , [keywordToUse, page, setGifs])

    return { loading, gifs, setPage, loadingNextPage }
}

export default useGifs