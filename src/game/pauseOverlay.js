import React, { Component } from 'react';

class PauseOverlay extends Component {
    render(){
        if (this.props.timeScale === 0){
            if (this.props.gameState === "not-started"){
                return(<div>Press any key to start!</div>);
            }
            else{
                return (<div>Press escape to unpause!</div>);
            }
        }
        else{
            return (<div></div>);
        }
    }
}

export default PauseOverlay;
