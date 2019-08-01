import React from 'react';
import logo from './logo.svg';
import './App.css';
import './global.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullname: "", 
      emailaddress: "", 
      password: "", 
      language: "", 
      message: "", 
      terms: false, 
      test: "", 

      error : {
        fullname: "", 
        emailaddress: "", 
        password: "", 
        language: "", 
        message: "", 
        terms: false, 
        test: ""
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state)

    if (this.state.fullname.length < 4) {
      this.setState({
        error : {
          fullname: "Minimum 4 characters are required. "
        }
      })
    }

    event.preventDefault();
  }


  handleChange(event) {
    const target = event.target;
    const { value, name } = target;

    this.setState({
      [name] : value
    })
  }


  render() {
    return (
        <div className="App">
          <Header />


          <div className="container">
            <div className="columns">
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Full Name</label>
                  <div className="control">
                    <input 
                      className="input"
                      type="text"
                      name="fullname"
                      value={this.state.fullname}
                      onChange={this.handleChange}
                      />
                      {this.state.error.fullname !== '' && (<b>{this.state.error.fullname}</b>)}
                  </div>
                </div>


                <div className="field">
                  <label className="label">Email Address</label>
                  <div className="control">
                    <input 
                      className="input"
                      type="email"
                      name="emailaddress"
                      value={this.state.emailaddress}
                      onChange={this.handleChange}
                      />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input 
                      className="input"
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      />
                  </div>
                </div>


                <div className="field">
                  <label className="label">Pick your fav language</label>
                  <div className="control">
                    <div className="select">
                      <select 
                        name="language"
                        value={this.state.language}
                        onChange={this.handleChange} >

                        <option value="java">Java</option>
                        <option value="javascript">JS</option>
                      </select> 
                    </div>  
                  </div>
                </div>


                <div className="field">
                  <label className="label">What do you feel?</label>
                  <div className="control">
                    <textarea 
                      className="textarea"
                      name="message"
                      value={this.state.message}
                      onChange={this.handleChange} />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input 
                      type="submit"
                      value="submit"
                      className="button" />
                  </div>
                </div>

              </form>
            </div>
          </div>

        </div>
      )
  }
}

function Header() {
  return (
      <header>
            <div className="container">
              <nav className="navbar">
                <div className="navbar-brand">
                  <span className="navbar-item"> Forms in React!!! </span>
                </div>
              </nav>
            </div>
      </header>
    )
}

export default App;
