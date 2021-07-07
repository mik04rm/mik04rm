import React, {useEffect, useReducer, useState} from 'react';
import {Obstacle, Vec2} from '../utility';
import Grid from './Grid';

type State = {
    position: Vec2;
    obstacles: Obstacle[];
};

type Action = {
    type: 'moveUp' | 'moveDown';
};

const reducer = (state: State, action: Action): State => {
    const newObstacles = state.obstacles.map((obstacle) => {
        obstacle.col -= 1;
        return obstacle;
    });
    switch (action.type) {
        case 'moveUp':
            return {
                position: new Vec2(state.position.row - 1, state.position.col),
                obstacles: newObstacles
            };
        case 'moveDown':
            return {
                position: new Vec2(state.position.row + 1, state.position.col),
                obstacles: newObstacles
            };
        default:
            return state;
    }
};

const Game: React.FC = () => {
    const initialObstacles: Obstacle[] = [
        {col: 6, height: 3, side: 'bottom'},
        {col: 8, height: 4, side: 'top'},
        {col: 8, height: 2, side: 'bottom'}
    ];

    const initialState: State = {
        position: new Vec2(3, 3),
        obstacles: initialObstacles
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const moveHandler = (event: KeyboardEvent) => {
        if (event.key == 'ArrowUp') {
            dispatch({type: 'moveUp'});
        } else if (event.key == 'ArrowDown') {
            dispatch({type: 'moveDown'});
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', moveHandler);
        return () => document.removeEventListener('keydown', moveHandler);
    });

    return <Grid position={state.position} obstacles={state.obstacles} />;
};

export default Game;
