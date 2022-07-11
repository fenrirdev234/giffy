

import ListOfGifs from '../../components/ListOfGif/ListOfGifs'
import useGifs from '../../hooks/useGifs'

const SearchResults = ({ params }) => {
  const { keyword } = params
  const { loading, gifs } = useGifs({ keyword })
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
    </>
  )

}

export default SearchResults