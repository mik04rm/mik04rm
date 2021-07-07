export class Vec2 {
    constructor(row: number, col: number) {
        this.row = row;
        this.col = col;
    }

    row: number;
    col: number;

    isEqual(other: Vec2): boolean {
        return this.row == other.row && this.col == other.col;
    }
}

export const range = (start: number, end: number) =>
    Array.from({length: end - start}, (v, k) => k + start);

export const CELL_SIZE = 30;

export interface Obstacle {
    col: number;
    height: number;
    side: 'bottom' | 'top';
}
