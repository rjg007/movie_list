import React from 'react'
import {useDispatch} from 'react-redux'
import {FcEmptyTrash, FcRating} from 'react-icons/fc'
import {removeMovie} from '../actions/moviesAction'
import Image from './Images/1179069.svg'

const MovieItem = (props) => {

    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(removeMovie(id))
    }

    const {movie} = props

    return (
        <div className='container'>
            <div className='row'>
                <div>
                    {/* <div className='card' style={{width: '18rem'}}>
                        <div className='card-body'>
                            
                            <h5 className='card-title'> {movie.name} </h5>
                            <h6 className='card-subtitle mb-2 text-muted'><i class="fas fa-star"></i> {movie.rating} </h6>
                        </div>
                        <button className='removeBtn' onClick={() => {
                        handleRemove(movie.id)
                        }} > <i class="fas fa-trash-alt"></i> </button>
                    </div> */}

                    <div className="card" style={{width: '18rem'}}> 
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <img className='card-img' src={Image} alt="image"/>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {movie.name}
                                        </h5>
                                        <h6 className='card-subtitle mb-2 text-muted'><FcRating /> {movie.rating} </h6>
                                    </div>
                                </div>
                            </div>
                            <button className='removeBtn' onClick={() => {
                        handleRemove(movie.id)
                        }} > <FcEmptyTrash className='icon_trash' /> </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>        
    )
}

export default MovieItem
