import React from 'react';

class Mycomp extends React.Component {
    constructor(props){
        super(props);
        this.state = { a:10 }
    }
    componentDidUpdate(){
        console.log("componentDidUpdate - class component");
    }
  render() {
    return (   
        <div>
            <h2> class component</h2>
            <p>props is {this.props.data}</p>
            <p>state is {this.state.a}</p>
        </div>
    );
  }  }
  export default Mycomp;