import React from 'react'

import Login from './Login.js'
import Register from './Register.js'

class Home extends React.Component{
constructor (props) {
    super(props)
    this.state = {
        componentToRender:'Login',
        buttonText:'sing Up'
    }
}

switch = () => {
   if(this.state.componentToRender ==='Login'){
       this.setState({
           'componentToRender':'Register',
           'buttonText':'Sign In'
       })
   } else {
       this.setState({
        'componentToRender':'Login',
        'buttonText':'Sign Up'
       })
   }
}

render () {
    let component
    if (this.state.componentToRender ==='Login')
    component = <Login />
    else component = <Register />

    return <div> 
        {component}
        <br />
        <br />
  <button id="switch" onClick={this.switch}> {this.state.buttonText} 
    </button> 

</div>
   
}
}

export default Home