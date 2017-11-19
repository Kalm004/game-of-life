module.exports = class Cell {
    constructor(posx, posy, status = false) {
        this.posx = posx;
        this.posy = posy;
        this.status = status;
    }
}