import React from 'react'
import {BiCameraMovie} from 'react-icons/bi'
import {MdLocalMovies} from 'react-icons/md'
import MoviesContainer from './components/MoviesContainer'
import './App.css'

const App = (props) => {

  return (
    <div className='container-fluid' >
      <div className='app_div'>
        <h1 className='main_title'> <BiCameraMovie /> My Big Movie List <MdLocalMovies /> </h1>
        <MoviesContainer />
      </div>
    </div>
  )
}

export default App