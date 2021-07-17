import React from 'react';
import {CELL_SIZE, range, Vec2, Obstacle} from '../utility';
import Cell from './Cell';

type GridProps = {position: Vec2; obstacles: Obstacle[]};

const Grid: React.FC<GridProps> = (props) => {
    console.log('Grid render');
    const GRID_SIZE = 10;
    const posRow = props.position.row;
    const posCol = props.position.col;
    if (posRow < 0 || posRow > 9) {
        return <h1>Game Over</h1>;
    }
    const table: string[][] = [];
    for (let i = 0; i < GRID_SIZE; i++) {
        table.push(new Array(GRID_SIZE).fill('black'));
    }
    for (let i = 0; i < props.obstacles.length; i++) {
        const obstacle = props.obstacles[i];
        if (obstacle.col < 0 || obstacle.col > 9) {
            continue;
        }
        if (obstacle.side === 'top') {
            for (let i = 0; i < obstacle.height; i++) {
                table[i][obstacle.col] = 'green';
            }
        } else {
            const last = GRID_SIZE - 1 - obstacle.height;
            for (let i = GRID_SIZE - 1; i > last; i--) {
                table[i][obstacle.col] = 'green';
            }
        }
    }
    if (table[posRow][posCol] == 'green') {
        return <h1>Game Over</h1>;
    }
    table[posRow][posCol] = 'lime';
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                width: CELL_SIZE * GRID_SIZE + 'px'
            }}>
            {range(0, 10).map((row) =>
                range(0, 10).map((col) => {
                    return (
                        <div>
                            <Cell
                                color={table[row][col]}
                                position={new Vec2(row, col)}
                            />
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default Grid;
