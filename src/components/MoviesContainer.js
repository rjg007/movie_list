import React, {useState} from 'react' //
import {useSelector} from 'react-redux'
import MoviesList from './MoviesList'
import MoviesForm from './MoviesForm'
import MoviesStats from './MoviesStats'
import Search from './Search'

const MoviesContainer = (props) => {

    const [term, setTerm] = useState('')

    let movies = useSelector((state) => {
        return state.movies
    })

    const handleChange = (e) => {
        setTerm(e.target.value)
    }

    if (term.length > 0) {
        movies = movies.filter(movie => {
            return movie.name.toLowerCase().includes(term)
        })
    }

    return (
        <div className='row'>

            <div className='col-sm-8'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <MoviesList movies={movies} />
                        </div>
                        <div className="col-sm-3">
                            <Search term={term} handleChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-sm-4'>
                <div className='right_side'>
                    <MoviesForm />
                    <MoviesStats />
                </div>
            </div>

            
        </div>
    )
}

export default MoviesContainer