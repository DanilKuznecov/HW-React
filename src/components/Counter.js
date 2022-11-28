import React from "react";
import './Counter.css'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.count
        }

        this.increment = this.increment.bind(this)
        this.minus = this.minus.bind(this)
        this.random = this.random.bind(this)
        this.reset = this.reset.bind(this)
    }


    increment() {
        if(this.state.count < 30) {
            this.setState({
                count: this.state.count +1
            })
        }
    }

    minus() {
        if(this.state.count > -30) {
        this.setState({
            count: this.state.count -1
        })
        }
    }

    random() {
        this.setState({
            count: Math.floor(Math.random()*(30 - 1 + 1) + 1)
        })
    }

    reset() {
        this.setState({            
            count: 0
        })
    }


    render() {
        return(            
            <div className="counter__box">
                <div className="counter__box-item">
                    <h1 className="counter__box-logo">{this.state.count}</h1>
                    <div className="counter__box-btn">
                        <button className="box__btn" onClick={this.increment}>inc</button>
                        <button className="box__btn" onClick={this.minus}>min</button>
                        <button className="box__btn" onClick={this.random}>rnd</button>
                        <button className="box__btn" onClick={this.reset}>res</button>
                    </div>
                </div>
            </div>            
        )
    }
}

export default Counter