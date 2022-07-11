

import ListOfGifs from '../../components/ListOfGif/ListOfGifs'
import useGifs from '../../hooks/useGifs'

const SearchResults = ({ params }) => {
  const { keyword } = params
  const { loading, gifs, setPage, loadingNextPage } = useGifs({ keyword })
  const handleNextPages = () => setPage(prevPage => prevPage + 1)

  return (
    <>
      {loading ? <h4>cargando</h4> :
        <>
          <h3 className="App-title">
            {decodeURI(keyword)}
          </h3>
          <ListOfGifs gifs={gifs} />
        </>
      }
      <br />
      <button onClick={handleNextPages} >Get next page</button>
    </>
  )

}

export default SearchResults