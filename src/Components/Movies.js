import React, {Component} from 'react'

import Display_Movies from './Display_Movies'

import Search from './Search'

class Movies extends Component {
    constructor(props){
        super(props)

    }

    render(){
        console.log(this.props)
        if(this.props.movies){

        
        const movieList = this.props.movies.map(element => {

            return (
            <Display_Movies 
            key={element.id}
            saveMovies={this.props.saveMovies}
            deleteMovies={this.props.deleteMovies}
            title={element.title}
            id={element.id}
            rateMovies={this.props.rateMovies}
            
            />
            )
        })
        console.log(movieList)
        return (
            <div>
                <h2 className='title1'>My Movies</h2>
                {movieList}
            </div>
        )
        }
    }

}
//this.saveMovies
//this.deleteMovies
export default Movies