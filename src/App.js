import React, { Component } from 'react';

import Header from './Components/Header'

import Movies from './Components/Movies'

import Display_Movies from './Components/Display_Movies'

import Search from "./Components/Search"

import axios from 'axios'

import './App.css';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: []
    }
  }
  componentDidMount() {

    axios.get(`/api/movies`).then(res => {
      console.log(res.data)
      this.setState({
        movies: res.data
      })

    })
  }
  componentDidUpdate = (oldProps) => {
    if (!this.state.movies.length) {
        axios.get(`/api/movies`).then(res => {
            this.setState({
                movies: res.data
            })
        }).catch(err =>
            console.log('err', err))
    }
}


  addMovies = (title) => {
   
    axios.post(`/api/movies`, { title }).then(response => { 
      this.setState({
        movies: response.data
      })
    })
  }

  saveMovies = (movies) => {
    axios.post('/api/movies', {movies}).then(res => {
      this.setState = ({
        movies: res.data
      })
    }).catch((error) => {console.error(error)})
  }

  rateMovies = (id, rating) => {
    axios.put(`/api/movies/${id}`, { rating: rating }).then(res => {
      this.setState({
        movies: res.data
      })
    }).catch((error) => {console.error(error)})
  }

  deleteMovies = (id) => {
    axios.delete(`/api/movies/${id}`).then(res => {
     
      this.setState({
        movies: res.data
      })
    }).catch((error) => {console.error(error)})
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header />
        <Search addMovies={this.addMovies}
        movies={this.state.movies} 
        rateMovies={this.rateMovies}/>
        <Movies saveMovies={this.saveMovies}
          deleteMovies={this.deleteMovies} 
          movies={this.state.movies.map(e => {
            return e
          })}
          rateMovies={this.rateMovies}
          />

      </div>
    )
  }
}

export default App;
