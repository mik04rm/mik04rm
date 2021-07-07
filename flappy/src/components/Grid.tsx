import React from 'react';
import {CELL_SIZE, range, Vec2, Obstacle} from '../utility';
import Cell from './Cell';

type GridProps = {position: Vec2; obstacles: Obstacle[]};

const Grid: React.FC<GridProps> = (props) => {
    console.log('Grid render');
    const posRow = props.position.row;
    const posCol = props.position.col;
    if (posRow < 0 || posRow > 9) {
        return <h1>Game Over</h1>;
    }
    const table: string[][] = [];
    for (let i = 0; i < 10; i++) {
        table.push(new Array(10).fill('black'));
    }
    props.obstacles.forEach(function (obstacle) {
        if (obstacle.col >= 0 && obstacle.col <= 9) {
            if (obstacle.side === 'top') {
                for (let i = 0; i < obstacle.height; i++) {
                    table[i][obstacle.col] = 'green';
                }
            } else {
                //bottom
                for (let i = 9; i > 9 - obstacle.height; i--) {
                    table[i][obstacle.col] = 'green';
                }
            }
        }
    });

    if (table[posRow][posCol] == 'green') {
        return <h1>Game Over</h1>;
    }
    table[posRow][posCol] = 'lime';
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                width: CELL_SIZE * 10 + 'px'
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
