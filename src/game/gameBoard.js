import React, { Component } from 'react';

var classNames = require('classnames');

import Lava from './lava'
import Platform from './platform'
import Word from './word'
import Actor from './actor'
import PauseOverlay from './pauseOverlay'

class GameBoard extends Component {
    render(){
        const platforms = [];
        for(let i = 0; i < 10; i++){
            platforms.push({
              position: this.props.hiddenPlatforms + i,
              index: i
            });
        }

        const actorIndex = this.props.actorPosition - this.props.hiddenPlatforms;
        const effectiveLavaHeight = Math.max(this.props.lavaHeight - (this.props.gridSegmentHeight * this.props.hiddenPlatforms), 0);

        const classes = classNames(["game-board", this.props.gameState]);
        const boardStyle = { backgroundPositionY: (this.props.hiddenPlatforms * 10) + "px" };

        return (
            <div className="game-board-wrapper">
              <div className={classes} style={boardStyle}>
                  {platforms.map(p => (
                      <Platform key={p.index} {...p} />
                  ))}
                  <Actor position={this.props.actorPosition} index={actorIndex} />
                  <Word position={this.props.actorPosition+1} index={actorIndex+1} matchedLetters={this.props.matchedLetters} word={this.props.word}/>
                  <Lava height={effectiveLavaHeight} />
                  <PauseOverlay timeScale={this.props.timeScale} gameState={this.props.gameState} />
                </div>
            </div>
        );
    }
}

export default GameBoard;
