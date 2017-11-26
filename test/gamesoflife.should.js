const should = require('chai').should();
const expect = require('chai').expect;
const World = require('../World');
describe('game of life', () => {
    let world = null;
    beforeEach(() => {
        world = new World(3, 3);
        world.spawnCell(1, 0);
        world.spawnCell(1, 1);
        world.spawnCell(1, 2);
    });
    it('have alive cells', () => {
        world.cells.filter(cell => cell.alive).length.should.be.at.least(1);
    });
    it('after step', () => {
        world.step();
        expect(world.cells.find(cell => cell && cell.posx === 1 && cell.posy === 0).alive).to.be.false;
    });
    it('after two step', () => {
        world.step();
        world.step();
        expect(world.cells.find(cell => cell && cell.posx === 1 && cell.posy === 0).alive).to.be.true;
    });
    it('after three steps', () => {
        world.step();
        expect(world.cells.find(cell => cell && cell.posx === 1 && cell.posy === 0).alive).to.be.false;
    });
});