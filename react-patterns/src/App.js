import React from 'react';
import logo from './logo.svg';
import './App.css';


function UserName({children}) {
  return (
      <div>
        {children.firstName}
        {children.secondName}
      </div>
    )
}

function TodoList({ todos, render }) {
  return (
    <section>
      <ul>  
        {
          todos.map((todo, i) => (<li key={i}>{render(todo)}</li>))
        }
      </ul>
    </section>
  )

}

class DataLoader extends React.Component {

  constructor(props) {
    super(props);

    this.state = { data: null }
    setTimeout(() => this.setState({data: 'Loaded'}), 5000)
  }

  render() {
    if (this.state.data === null) return null;

    return (
        <div>{this.props.render(this.state.data)}</div>
      )
  }

}


function App() {
  const todos = [
    {label: 'Javascript basics', status: 'completed'}, 
    {label: 'Redux', status: 'inplan'}, 
    {label: 'HOF Components', status: 'completed'}
  ]

  const isCompleted = todo => todo.status === "completed";

  return (
    <div className="App">
      <TodoList todos={todos}
        render={
          todo => isCompleted(todo) ? 
              <b> {todo.label} </b> : todo.label
        } />

        <DataLoader render={data => <p>The data is loaded!!</p>} />
    </div>
  );
}








/*
class DisplayPersonDetails extends React.Component {
  state = {
    data: null
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => {
        this.setState({data})
      })
  }

  render() {
    console.log(this.state)

    if (!this.state.data) {
      return <div>Loading...</div>
    }

    return (<div>
        {this.state.data.results[0].email}
      </div>)
  }
}
*/



/*
class DisplayStreetDetails extends React.Component {
  state = {
    data: null
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => {
        this.setState({data})
      })
  }

  render() {
    console.log(this.state)

    if (!this.state.data) {
      return <div>Loading...</div>
    }

    return (<div>
        {this.state.data.results[0].location.street}
      </div>)
  }
}
*/


/*
const apiURL = "https://randomuser.me/api/";

const withLoader = (BaseComponent, url) => {
  class EnhancedComponent extends React.Component {

    state = {
      data: null
    }

    componentDidMount() {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          this.setState({data})
        })
    }

    render() {
      console.log(this.state)

      if (!this.state.data) {
        return <div>Loading...</div>
      }

      return <BaseComponent data={this.state.data} />
    }   
  }

  return EnhancedComponent;
}

const DisplayStreetDetails = ({data}) => {
  return (
      <div>
        {data.results[0].location.street}
      </div>
    )
}

const DisplayStreetDetailsWrapper = withLoader(DisplayStreetDetails,apiURL )


const DisplayPersonDetails = props => {
  return (<div>
      {props.data.results[0].email}
    </div>)
}

const DisplayPersonDetailsWrapper = withLoader(DisplayPersonDetails, apiURL)

*/











export default App;
