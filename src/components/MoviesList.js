import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import MovieItem from './MovieItem'
import {sortMovie} from '../actions/moviesAction'

const MoviesList = (props) => {

    const {movies} = props

    let sortStr = ''

    const dispatch = useDispatch()

    // const movies = useSelector((state) => {
    //     return state.movies
    // })

    const handleSort = (e) => {
        sortStr = e.target.value
        dispatch(sortMovie(sortStr))
    }

    return (
        <div>
            <h2 className='movie_list'> Movies List  </h2> 

            <select className='select' onChange={handleSort}>
                <option value='order by' hidden> Order By </option>
                <option value="Ascending (Name)"> Ascending (Name) </option>
                <option value="Descending (Name)"> Descending (Name) </option>
                <option value='Ratings (High - Low)'> Ratings (High - Low) </option>
                <option value='Ratings (Low - High)'> Ratings (Low - High) </option>
            </select>

            <ul className='list' style={{listStyleType: 'none'}}> 
                {
                    movies.map(movie => {
                        return (
                            // <li key={movie.id}> {movie.name} - {movie.rating} <button> Remove </button> </li>
                            <li key={movie.id} className='list_item' > <MovieItem  movie={movie} /> </li>
                        )
                    })
                }    
            </ul>
        </div>
    )
}

export default MoviesList
