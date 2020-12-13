import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { Stage, Layer, Circle, Rect, Group } from 'react-konva';
import style from './Game.module.css';

import Ball from "./Ball";
import Field from "./Field";

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false
        }
    }

    componentDidMount() {
        this.setState({
            isLoaded: true
        })
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <Layer>
                    <Field />
                    {/* You can add or remove Balls here to see how they behave */}
                    <Ball />
                    <Ball />
                    <Ball />
                    <Ball />
                    <Ball />
                    <Ball />
                </Layer>
            );
        } else {
            return (
                <div className="text-center">
                    <i className="fa fa-spinner fa-spin"></i>
                </div>
            );

        }

    }
}

export default withRouter(Game);