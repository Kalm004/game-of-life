/**
 * Class for cells.
 * A cell has a position in the world and can be alive or not.
 */
module.exports = class Cell {
    constructor(posx, posy, alive = false) {
        this.posx = posx;
        this.posy = posy;
        this.alive = alive;
    }
}