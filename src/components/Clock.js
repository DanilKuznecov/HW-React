import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            date: new Date()
        }
        
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.timer(), 1000);
    }

    componentDidUpdate() {
        console.log('Данные обновленны.');
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    

    timer() {
        this.setState({
            date: new Date()
        }) 
    }

    render() {
        return (
            <div>
                <h1>Hello, world</h1>
                <h2>Cейчас: {this.state.date.toLocaleString()}</h2>
            </div>
        )
    }
}

export default Clock;