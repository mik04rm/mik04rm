import React from 'react';
import styled from 'styled-components';
import {Vec2, CELL_SIZE} from '../utility';

type CellProps = {
    position: Vec2;
    color: string;
    // className?: string;
};

// const Wrapper = styled.div<CellProps>`
//     border: 2px solid red;
//     color: wheat;
// `;

const Cell: React.FC<CellProps> = (props) => {
    // return <Wrapper fill={props.fill} className={props.className} />;
    //style = {};
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
