import React from 'react';

import axios from 'axios';
import { any } from 'prop-types';
import getAllData from '../myTable/MyTable';

export default class ListOfData extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      persons: []
    }

  }
  state = {
    persons: []
  }

  componentDidMount() {
    // let persons = getAllData().then(data => data);
    // this.setState({ persons });
    axios.get(`https://reqres.in/api/users`)
      .then(res => {
        const persons = res.data.data;
        console.log(persons);
        this.setState({ persons });
      })
  }

  render() {

    const { persons } = this.state;
    return (



      <div>

        {(this.state.persons as Array<any>).map((person: any) => <div>{person.email}</div>)}

        }
 
      </div>

    )


  }
}