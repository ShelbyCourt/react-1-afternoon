import React, {Component} from 'react';

class FilterString extends Component {

    constructor(){
        super();

        this.state = {
            movies: ['Jaws', 'The Terminator', 'The Matrix', 'Rouge', 'Lola Rennt'],
            userInput: '',
            filteredMovies: []
        };
    }
    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterMovies(userInput){
            let movies = this.state.movies;
            let filteredMovies = [];

            for(let i = 0; i < movies.length; i++) {
                if (this.movies[i].includes(userInput) ) {
                    filteredMovies.push(movies[i]);
                }
            }
            this.setState({ filteredMovies: filteredMovies});
    }
    

    render() {
        return (
            <div className="puzzleBox filterStringPB">
            <h4> Filter String </h4>
            <span className="puzzleText"> Odds: {JSON.stringify(this.state.movies, null, 10) } </span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } />
            <button className="confirmationButton" onClick={ () => { this.filterMovies(this.state.userInput) }}> Filter </button>
            <span className="resultsBox filterStringPB"> Filtered Movies: {JSON.stringify(this.state.filteredMovies, null, 10) } </span>
        </div>
            )
        
    }
}


export default FilterString; 