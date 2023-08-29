const { expect } = require("chai");
const Spacecraft = require("../src/spacecraft");

describe("Spacecraft Functionality", () => {
  it("should initialize the spacecraft with correct starting position and direction", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    expect(spacecraft.getPosition()).to.deep.equal({ x: 0, y: 0, z: 0 });
    expect(spacecraft.getDirection()).to.equal("N");
  });

  it("should move the spacecraft forward correctly based on its direction", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    spacecraft.moveForward();
    expect(spacecraft.getPosition()).to.deep.equal({ x: 0, y: 1, z: 0 });
  });

  it("should move the spacecraft backward correctly based on its direction", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    spacecraft.moveBackward();
    expect(spacecraft.getPosition()).to.deep.equal({ x: 0, y: -1, z: 0 });
  });

  it("should move the spacecraft upward correctly based on its direction", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "Up");
    spacecraft.moveForward();
    expect(spacecraft.getPosition()).to.deep.equal({ x: 0, y: 0, z: 1 });
  });

  it("should move the spacecraft downward correctly based on its direction", () => {
    const spacecraft = new Spacecraft(0, 0, 1, "Down");
    spacecraft.moveForward();
    expect(spacecraft.getPosition()).to.deep.equal({ x: 0, y: 0, z: 0 });
  });

  it("should turn the spacecraft left correctly", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    spacecraft.turnLeft();
    expect(spacecraft.getDirection()).to.equal("W");
  });

  it("should turn the spacecraft right correctly", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    spacecraft.turnRight();
    expect(spacecraft.getDirection()).to.equal("E");
  });

  it("should turn the spacecraft up correctly", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    spacecraft.turnUp();
    expect(spacecraft.getDirection()).to.equal("Up");
  });

  it("should turn the spacecraft down correctly", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    spacecraft.turnDown();
    expect(spacecraft.getDirection()).to.equal("Down");
  });

  it("should execute a sequence of commands correctly", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    spacecraft.executeCommand("f"); // (0, 1, 0)
    spacecraft.executeCommand("r"); // E
    spacecraft.executeCommand("f"); // (1, 1, 0)
    spacecraft.executeCommand("u"); // Up
    spacecraft.executeCommand("b"); // (1, 1, -1)
    spacecraft.executeCommand("l"); // N
    expect(spacecraft.getDirection()).to.equal("N");
  });

  it("should handle moving to the galactic boundaries correctly", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    spacecraft.moveForward();
    spacecraft.moveBackward();
    spacecraft.moveDown();
    spacecraft.moveUp();
    spacecraft.moveForward();
    spacecraft.moveBackward();
    spacecraft.moveDown();
    spacecraft.moveUp();
    expect(spacecraft.getPosition()).to.deep.equal({ x: 0, y: 0, z: 0 });
    expect(spacecraft.getDirection()).to.equal("N"); // Change 'Up' to 'N'
  });
  it("should handle multiple turns and movements in all directions correctly", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    spacecraft.executeCommands(["f", "r", "f", "d", "f", "l", "b"]);
    expect(spacecraft.getPosition()).to.deep.equal({ x: 2, y: 0, z: 0 });
    expect(spacecraft.getDirection()).to.equal("N");
  });

  it("should handle multiple turns and movements in all directions correctly", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    spacecraft.executeCommands(["f", "r", "f", "d", "f", "l", "b"]);
    expect(spacecraft.getPosition()).to.deep.equal({ x: 2, y: 0, z: 0 });
    expect(spacecraft.getDirection()).to.equal("N");
  });

  it("should handle complex sequence of commands accurately", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    spacecraft.executeCommands(["f", "l", "r", "u", "d", "b"]);
    expect(spacecraft.getPosition()).to.deep.equal({ x: 0, y: 1, z: 0 });
  });

  it("should handle changing direction while moving and turning", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    spacecraft.executeCommands(["f", "r", "f", "d", "f", "l", "b"]);
    spacecraft.executeCommands(["r", "u", "f", "l", "b"]);
    expect(spacecraft.getPosition()).to.deep.equal({ x: 3, y: -1, z: 0 });
    expect(spacecraft.getDirection()).to.equal("N");
  });

  it("should handle changing direction while moving and rotating", () => {
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    spacecraft.executeCommands(["f", "u", "f", "r", "b"]);
    expect(spacecraft.getPosition()).to.deep.equal({ x: -1, y: 1, z: 2 });
    expect(spacecraft.getDirection()).to.equal("E");
  });
});
