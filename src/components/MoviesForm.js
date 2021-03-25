import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addMovie} from '../actions/moviesAction'
import {IoMdAddCircle} from 'react-icons/io'
import {RiMovie2Fill} from 'react-icons/ri'

const MoviesForm = () => {

    const [movieName, setMovieName] = useState('')
    const [movieRating, setMovieRating] = useState('')
    const [formError, setFormError] = useState({})
    const errors = {}

    const dispatch = useDispatch()

    const handleChange = (e) => {
        if(e.target.name === 'movieName') {
            setMovieName(e.target.value)
        } else {
            setMovieRating(e.target.value)
        }
    }

    const runValidations = () => {
        if(movieName.trim().length === 0) {
            errors.movieName = 'This field cannot be left blank'
        }
        if (movieRating.trim().length === 0) {
            errors.movieRating = 'This field cannot be left blank'
        } else if (isNaN(Number(movieRating))) {
            errors.movieRating = 'Enter a valid rating'
        } else if (Number(movieRating) > 10) {
            errors.movieRating = 'Maximum rating is 10'
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()

        if(Object.keys(errors).length === 0) {
            setFormError({})

            const movie = {
                id: Number(new Date()),
                name: movieName,
                rating: Number(movieRating)
            }
            dispatch(addMovie(movie))
            setMovieName('')
            setMovieRating('')
        } else {
            setFormError(errors)
        }

        
    }

    return (
        <div className='form_div'>
            <h2 className='form_h2'> Add Movie <RiMovie2Fill /> </h2>
            {/* <form className='form' onSubmit={handleSubmit} > */}
            <form className="form">
                <label style={{display : 'block'}}> Name : </label>
                <input 
                    className='form_inputs'
                    type="text" 
                    value={movieName} 
                    onChange={handleChange} 
                    name='movieName'
                    placeholder='Enter movie name...'
                /> 
                {
                    formError.movieName && <span> {formError.movieName} </span>
                }
                <br/> <br/>
                <label style={{display : 'block'}}> IMDb Rating : </label>  
                <input 
                    className='form_inputs'
                    type="text" 
                    value={movieRating} 
                    onChange={handleChange} 
                    name='movieRating'
                    placeholder='Enter IMDb Rating...'
                />
                {
                    formError.movieRating && <span> {formError.movieRating} </span>
                }
                <br/> <br/>
                {/* <input type="submit" value='Add'/>  */}
                <button className='add_btn' onClick={handleSubmit}> <IoMdAddCircle /> </button>
            </form>
        </div>
    )
}

export default MoviesForm