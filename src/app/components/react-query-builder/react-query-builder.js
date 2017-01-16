"use strict";

import React from 'react'
import ReactDOM from 'react-dom'
import QueryBuilder from 'react-querybuilder'

const fields = [
    {name: 'firstName', label: 'First Name'},
    {name: 'lastName', label: 'Last Name'},
    {name: 'age', label: 'Age'},
    {name: 'address', label: 'Address'},
    {name: 'phone', label: 'Phone'},
    {name: 'email', label: 'Email'},
    {name: 'twitter', label: 'Twitter'},
    {name: 'isDev', label: 'Is a Developer?', value: false},
]

export default class ReactQueryBuilder extends React.Component {
  logQuery(query) {
    console.log(query)
  }

  render() {
    return (
      <div>
        hello
        <QueryBuilder fields={fields} onQueryChange={logQuery}/>
      </div>
    );
  }
}

ReactDOM.render(<ReactQueryBuilder/>, document.getElementById(`app`))
