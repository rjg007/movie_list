import React from 'react'
import {useSelector} from 'react-redux'
import {FcRating} from 'react-icons/fc'
import {ImStatsBars} from 'react-icons/im'

const MoviesStats = (props) => {

    let topRated = null

    const movies = useSelector(state => {
        return state.movies
    })

    // const highestRating = () => {
    //     if(movies.length === 0) {
    //         return 'N/A'
    //     } else {
    //         topRated = movies.find(movie => {
    //             const maxRating = Math.max(...movies.map(movie => movie.rating))
    //             return movie.rating === maxRating
    //         })   
    //         return `${topRated.name} (${topRated.rating})`
    //     }
    // }

    if (movies.length === 0) {
        topRated = 'N/A'
    } else {
        topRated = movies.find(movie => {
            const maxRating = Math.max(...movies.map(movie => movie.rating))
            return movie.rating === maxRating
        })   
    }

    return (
        <div className='movie_stats'>
            <h2 className="stats_heading"> Movie Stats <ImStatsBars /> </h2>
            <h4> Total Movies - {movies.length} </h4>
            {/* <h4> Highest Rated Movie : {`${topRated.name} (${topRated.rating})`}  </h4> */}
            {
                movies.length > 0 ? (
                    <h4> Highest Rated Movie : {`${topRated.name}`} (<FcRating /> {`${topRated.rating}`}) </h4>
                ) : (
                    <h4> Highest Rated Movie : {topRated} </h4>
                )
            }
            
        </div>
    )
}

export default MoviesStats
