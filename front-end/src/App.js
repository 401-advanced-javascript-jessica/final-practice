import React from 'react';
import {connect} from 'react-redux';
import superagent from 'superagent';

const API_URL = 'http://localhost:8080';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [
        // { name: 'Frank', _id: 1 },
        // { name: 'Betty', _id: 2 },
        // { name: 'Ginger', _id: 3 },
        // { name: 'Kali', _id: 4 },
      ]
    }
  }

  handleDelete = (event) => {
    event.preventDefault();
    const _id = event.target.value;
    superagent.delete(`${API_URL}/pet/${_id}`)
        .then( (response) => {
        })
        .then ( superagent.get(`${API_URL}/pet`)
            .then ( (results) => {
              this.props.createPets(results.body);
            })
        )
  };


  componentDidMount() {
    superagent.get(`${API_URL}/pet`)
        .then ( (results) => {
          this.props.createPets(results.body);
        })
  }

  componentDidUpdate() {
    superagent.get(`${API_URL}/pet`)
        .then ( (results) => {
          this.props.createPets(results.body);
        })
  }

  render() {
    return (
        <>
          {
            this.props.pets.map( (pet) => (
                <li key={pet._id}>{pet.name}<button value={pet._id} onClick={this.handleDelete}>Delete</button></li>
                )
            )
          }
        </>
    );
  }


}


const mapStateToProps = (state) => {
  return {
    pets: state.pets,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPets : (pets) => {
      dispatch({
        type: 'PETS_CREATE',
        payload: pets,
      })
    },
    deletePet : (_id) => {
      dispatch({
        type: 'PETS_DELETE',
        payload: _id,
      });
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);






















