import React, {Component} from 'react'

import Movies from './Movies'

import Search from './Search'


function Display_Movies (props){
        
    return (
        <div className="display" >
            
              {props.title}  

         <input className="bar" type="range" onChange={(e) =>props.rateMovies(props.id, e.target.value)} min="1" max="5" list="list" />
         <datalist id="list">
             <option value="1" label="1"/>
             <option value="2" label="2"/>
             <option value="3" label="3"></option>
             <option value="4" label="4"/>
             <option value="5" label="5"/>
             <option value="0" label="0"/>
         </datalist>

        

         <button className="deleteButton" onClick={() => {
             props.deleteMovies(props.id)

         }}>Delete Movie</button> 

      
      
         
    </div>
    
    )
}


export default Display_Movies
