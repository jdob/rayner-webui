import React, { Component } from 'react';


class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_color: "ffffff",
        }
        this.loadLightState = this.loadLightState.bind(this)
    }

    loadLightState() {
        fetch('http://localhost:8000/light/')
        .then(results => {
            return results.json();
        }).then(data => {
            let c = data.hex
            this.setState({current_color: c})
            console.log('current_color', this.state.current_color)
        })
    }

    componentDidMount() {
        this.loadLightState()
        setInterval(this.loadLightState, 1000)
    }

    render() {
        return(
            <div align="center">
                <div>Current Light Color</div>
                <div className="status-box"
                     style={{background: '#' + this.state.current_color}}></div>
            </div>
        )
    }

}

export default Status;