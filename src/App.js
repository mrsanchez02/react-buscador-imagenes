import React,{useState,useEffect} from 'react'
import Formulario from './components/Formulario';
import ImageList from './components/ImageList';


function App() {

  // State de la app.
  const [ query, setQuery ]= useState('');
  const [results, setResults]=useState([]);
  const [actualPage, setActualPage]=useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if(query==='') return;

    const queryApi = async () => {
      const imgPerPage = 30;
      const key = '25193059-8dedb6567337df951ce9ccf6c';
      const URI = `https://pixabay.com/api/?key=${key}&q=${query}&per_page=${imgPerPage}&page=${actualPage}`;

      const response = await fetch(URI);
      const result = await response.json();
      setResults(result.hits);

      // console.log(result)
      // Calcular el total de paginas.

      const CalcTotalPages = Math.ceil(result.totalHits / imgPerPage);
      setTotalPages(CalcTotalPages);

      // Mover la pantalla hacia arriba.
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior:'smooth'});

    };
    queryApi();
  }, [query,actualPage]);


  const previousPage = () => {
    const newActualPage = actualPage - 1;
    if(newActualPage===0)return;
    setActualPage(newActualPage);
  }

  const nextPage = () => {
    const newActualPage = actualPage + 1;
    if(newActualPage>totalPages)return;
    setActualPage(newActualPage);
  }

  return (
    <div className='container'>
      <div className='jumbotron'>
        <p className='lead text-center'>Buscador de imagenes</p>
      <Formulario
        setQuery={setQuery} 
        setActualPage={setActualPage}
        />
      </div>
      <div className='row justify-content-center'>
        <ImageList
          results={results} 
        />
       {(actualPage ===1)?null:
        <button
          type="button"
          className="btn btn-info mr-1"
          onClick={previousPage}>
            &laquo; Anterior
        </button>
       }
        {(actualPage===totalPages)?null:
        <button
        type="button"
        className="btn btn-info"
        onClick={nextPage}>
          Siguiente &raquo;
        </button>
        }
      </div>
    </div>
  );
}

export default App;
