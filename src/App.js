import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { Search } from './components/search/search.component'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({users}))
  }

  handleSearch = e => this.setState({search: e.target.value})

  render() {
    const { users, search } = this.state
    const filteredUsers = users.filter(({name}) => name.toLowerCase().includes(search.toLowerCase()))

    return (
      <div className="App">
      <h1>Users Rolodex</h1>
        <Search 
          placeholder="Search users"
          value={search} 
          handler={this.handleSearch} 
        />
        <CardList users={filteredUsers} />
      </div>
    )
  }
}

