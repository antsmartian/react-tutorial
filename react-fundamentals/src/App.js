import React from 'react';
import logo from './logo.svg';
import Child from './Child'
import './App.css';
import produce from "immer"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state =  {
      dollar : 0, 
      object : {
        count : 0
      }
    }
    this.handlechange = this.handlechange.bind(this);
  }

  handlechange(event) {

    let todos = [{done: true}, {done:false, text: "learning shouldComponentUpdate"}]

    const nxtTodos = produce(todos, draft => {
      draft.push({done:false, text: "building hn news"})
      draft[1].done = true
    })

    console.log(todos.length)
    console.log(todos[1].done)

    console.log(nxtTodos.length)
    console.log(nxtTodos[1].done)


    console.log(todos === nxtTodos)
    console.log(todos[0] === nxtTodos[0])


    // do something with the event
    // console.log(produce)
    const b = Object.assign({}, this.state.object)
    b.count = 5;
    // this.setState({dollar : (event.target.value)}) trie
    this.setState({object : b})
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(this.state.object ===  nextState.object)
    // return nextState.dollar % 10 === 0;
    return this.state.object === nextState.object;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate")
  }

  render() {
    return (
        <div>
          <input placeholder="how much do you pay?" 
                 type="text" onChange={this.handlechange}/>
           <div>
            Bid: $10 per iphone <br/>
            you can buy {this.state.dollar / 10} iphones
           </div>      
        </div>
      )
  }
}

App.defaultProps = { text: 'Hello world' }

export default App;
