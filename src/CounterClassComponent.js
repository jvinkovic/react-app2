import React from 'react';

export default class CounterClassComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0
        }

        console.log('constructor');
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    render() {
        return <>
            <p>Ja sam CounterClassComponent</p>
            <button onClick={() => this.setState({count: this.state.count+1})}>Count: {this.state.count}</button>
        </>;
    }
}
