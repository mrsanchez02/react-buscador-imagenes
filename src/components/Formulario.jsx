import React,{useState} from 'react'
import Error from './Error';

const Formulario = ({setQuery,setActualPage}) => {



    const [ termino, setTermino ] = useState('');
    const [ error, setError ] = useState(false);

    // onChange
    const handleChange = e => setTermino(e.target.value)

    // onSubmit
    const handleSubmit = e => {
        e.preventDefault();

        // validar
        if(termino.trim()===''){
            setError(true);
            setTimeout(() => {
                setError(false);
                
            }, 2500);
            return
        }

        setError(false);
        
        // retornar a pagina 1.
        setActualPage(1);

        // Enviar al app.
        setQuery(termino);

        // Limpiar campos.
        setTermino('')

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input type="text" value={termino} onChange={handleChange} className="form-control form-control-lg" placeholder='busca una imagen, paisaje o cafe...'/>
                </div>
                <div className="form-group col-md-4">
                    <input type="submit" value="buscar" className="btn btn-lg btn-danger btn-block" />
                </div>
            </div>
            {error? <Error mensaje="Por favor ingrese un termino de busqueda."/> : null}
        </form>
    )
}

export default Formulario
