//@ts-nocheck
import React, { Component } from 'react';


class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }
    changeDetail = () => {
        this.setState({ 
            color: "blue", 
            brand: "Tesla", 
            model: "Model S",
             year: 2023
             });
    }

    componentDidMount() {
        console.log("Component did mount");
//runs after the first render => RETRIEVES DATA FROM BACKEND SERVER
    }

    componentWillUnmount() {
        console.log("Component will unmount");
        //runs before the component is removed => CLEANS UP
    
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color}
                    {this.state.model}
                    from {this.state.year}.
                </p>
                <button
                    type="button"
                    onClick={this.changeDetail}
                >Change Detail</button>
            </div>
        );
    }
}

export default Test;