import React from 'react';
import {Vec2, CELL_SIZE} from '../utility';

type CellProps = {
    position: Vec2;
    color: string;
};

const Cell: React.FC<CellProps> = (props) => {
    return (
        <div
            style={{
                backgroundColor: props.color,
                width: CELL_SIZE + 'px',
                height: CELL_SIZE + 'px'
            }}>
            {null}
        </div>
    );
};

export default Cell;
