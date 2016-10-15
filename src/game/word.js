var classNames = require('classnames');
var textUtils = require('persian-text');

import React, { Component } from 'react';

class Word extends Component {
    constructor(){
        super();
        this.word= "blablabla";
        this.state = {typedWord: "bla"};
    }
    render(){
      const className = classNames([
        "word",
        "sprite",
        "row-"+this.props.index,
        "col-"+(this.props.position % 2)
      ]);
        return (
            <div className={className}>
                {textUtils.denormalize(this.props.word).split('').map((char, index) => {
                    var classes = [];
                    if(index < this.props.matchedLetters) {
                        classes.push("correct");
                    }
                    classes = classNames(classes)

                    return (
                        <span className={classes}>{char}</span>
                    )
                })}
            </div>
        );
    }
}

export default Word;
