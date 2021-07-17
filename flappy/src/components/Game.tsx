import React, {useEffect, useReducer} from 'react';
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
    console.log('move');
    const newObstacles = state.obstacles.map((obstacle) => {
        const newObstacle = {...obstacle};
        newObstacle.col -= 1;
        return newObstacle;
    });
    let newPosition: Vec2;
    switch (action.type) {
        case 'moveUp':
            newPosition = new Vec2(state.position.row - 1, state.position.col);
            return {
                position: newPosition,
                obstacles: newObstacles
            };
        case 'moveDown':
            newPosition = new Vec2(state.position.row + 1, state.position.col);
            return {
                position: newPosition,
                obstacles: newObstacles
            };
        default:
            return state;
    }
};

const Game: React.FC = () => {
    const initialObstacles: Obstacle[] = [
        {col: 6, height: 5, side: 'top'},
        {col: 6, height: 3, side: 'bottom'},
        {col: 8, height: 4, side: 'top'},
        {col: 8, height: 4, side: 'bottom'}
    ];

    const initialState: State = {
        position: new Vec2(3, 1),
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
