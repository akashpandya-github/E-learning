import React, { Component } from 'react'; 
import TableBody from './TableData';
import TableHead from './TableHead';

class FetchData extends Component {

    state = {
        characters: [
            {
              name: 'John',
              job: 'SE',
            },
            {
              name: 'Charlie',
              job: 'Janitor',
            },
            {
              name: 'Mac',
              job: 'Bouncer',
            },
            {
              name: 'Dee',
              job: 'Aspring actress',
            },
            {
              name: 'Dennis',
              job: 'Bartender',
            },
          ]
      }

    removeCharacter = (index) => {
        const { characters } = this.state
      
        this.setState({
          characters: characters.filter((character, i) => {
            return i !== index
          }),
        })
      }

    render() {

        const { characters } = this.state

        return (
            <table>
                <TableHead />
                <TableBody charData={characters} removeCharacter={this.removeCharacter} />
            </table>
        );        
    }
}

export default FetchData