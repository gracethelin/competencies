import React, {Component} from 'react'
import Axios from 'axios'

class Search extends Component {
    constructor(props){
        super(props)

        this.state = {
            userInput: '',
        
        }
    }
    searchMovie = (value) => {
        this.setState ({
            userInput: value
        })
    }

    // addMovies = () => {
    //     axios.post(`/api/movies`).then(movies)
    //     this.setState = ({
    //         list: [this.state.userInput],
    //         userInput: ''
    //     })
    // }
    toggleEdit = () => {
        this.setState ({
            isEditing: !this.setState.isEditing
        })
    }

    render (){
        
        return (
            <div className='Movies'>
                <h2 className="searchMovie">Add Movie</h2>
               <input className="search"
                value={this.state.userInput}
                placeholder="Enter Movie"
                onChange={e => this.searchMovie(e.target.value)}
              
                />
                <button className="button" onClick={() => this.props.addMovies(this.state.userInput)}>{`Save Movie `}</button>


             
            </div>
        )
    }
}
//this.props.searchMovies
export default Search