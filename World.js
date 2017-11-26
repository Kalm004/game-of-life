const Cell = require('./Cell');
module.exports = class World {
    constructor(width, height) {
        this.width = width;
        this.cells = new Array(width * height).fill();
        this.cells = this.cells.map((cell, index) => new Cell(index % this.width, Math.floor(index / this.width)));
    }

    spawnCell(x, y) {
        this.getCell(x, y).alive = true;
    }

    step() {
        this.cells = this.cells.map(cell => {
            let neighbors = [
                this.getCell(cell.posx - 1, cell.posy - 1),
                this.getCell(cell.posx, cell.posy - 1),
                this.getCell(cell.posx + 1, cell.posy - 1),
                this.getCell(cell.posx - 1, cell.posy),
                this.getCell(cell.posx + 1, cell.posy),
                this.getCell(cell.posx - 1, cell.posy + 1),
                this.getCell(cell.posx, cell.posy + 1),
                this.getCell(cell.posx + 1, cell.posy + 1)];
            const numberNeighbors = neighbors.reduce((prev, current) => prev + ((current && current.alive) ? 1 : 0), 0);
            const newCell = new Cell(cell.posx, cell.posy, false);
            if (cell.alive) {
                if (numberNeighbors <= 1) {
                    newCell.alive = false;
                }
                if (numberNeighbors > 3) {
                    newCell.alive = false;
                }
                if (numberNeighbors === 2 || numberNeighbors === 3) {
                    newCell.alive = true;
                }
            } else {
                if (numberNeighbors === 3) {
                    newCell.alive = true;
                }
            }
            return newCell;
        });
    }

    getCell(x,y) {
        if (x >= 0 && y >= 0) {
            return this.cells.find(cell => cell.posx === x && cell.posy === y);
        }
    }
}