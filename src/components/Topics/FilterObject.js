import React, {Component} from 'react';

class FilterObject extends Component {
    constructor(){
        super();

        this.state = {
          dreamPeeps:[
            {
                name: 'Ed Norton',
                profession: 'Actor',
            },
            {
                name: 'F. Scott Fitzgerald',
                profession: 'Author',
                favePlace: 'French Riviera',
            },
            {
                name: 'Frida Kahlo',
                profession: 'Artist',
                famousPainting: 'The Two Fridas',
            }
          ] ,

          userInput: '',
          filteredDreamPeeps: [], 
        }
      }

      handleChange(val) {
        this.setState({ userInput: val });
      }

        filterDreamPeeps(prop){
            let dreamPeeps = this.state.dreamPeeps;
            let filteredDreamPeeps = [];

            for(let i = 0; i < dreamPeeps.length; i++) {
                if (dreamPeeps[i].hasOwnProperty(prop) ) {
                    filteredDreamPeeps.push(dreamPeeps[i]);
                }
            }
            this.setState({ filteredDreamPeeps: filteredDreamPeeps});
        }


    render() {
        return (
            <div className="puzzleBox filterObjectPB">
            <h4> Filter Object </h4>
            <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) } </span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
            <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
          </div>       
        )

    }

}


export default FilterObject; 