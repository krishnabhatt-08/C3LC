class Spacecraft {
  constructor(x, y, z, direction) {
    // Initialize spacecraft position and direction
    this.position = { x, y, z };
    this.direction = direction;
  }

  getPosition() {
    return this.position;
  }

  getDirection() {
    return this.direction;
  }

  moveForward() {
    if (this.direction === "N") this.position.y += 1;
    else if (this.direction === "S") this.position.y -= 1;
    else if (this.direction === "E") this.position.x += 1;
    else if (this.direction === "W") this.position.x -= 1;
    else if (this.direction === "Up") this.position.z += 1;
    else if (this.direction === "Down") this.position.z -= 1;
  }

  moveBackward() {
    if (this.direction === "N") this.position.y -= 1;
    else if (this.direction === "S") this.position.y += 1;
    else if (this.direction === "E") this.position.x -= 1;
    else if (this.direction === "W") this.position.x += 1;
    else if (this.direction === "Up") this.position.z -= 1;
    else if (this.direction === "Down") this.position.z += 1;
  }

  moveUp() {
    if (
      this.direction === "Up" ||
      this.direction === "N" ||
      this.direction === "S"
    ) {
      this.position.z += 1;
    }
  }

  moveDown() {
    if (
      this.direction === "Down" ||
      this.direction === "N" ||
      this.direction === "S"
    ) {
      this.position.z -= 1;
    }
  }

  turnLeft() {
    if (this.direction === "N") this.direction = "W";
    else if (this.direction === "S") this.direction = "E";
    else if (this.direction === "E") this.direction = "N";
    else if (this.direction === "W") this.direction = "S";
    else if (this.direction === "Up") this.direction = "W";
    else if (this.direction === "Down") this.direction = "E";
  }

  turnRight() {
    if (this.direction === "N") this.direction = "E";
    else if (this.direction === "S") this.direction = "W";
    else if (this.direction === "E") this.direction = "S";
    else if (this.direction === "W") this.direction = "N";
    else if (this.direction === "Up") this.direction = "E";
    else if (this.direction === "Down") this.direction = "W";
  }
  turnUp() {
    if (this.direction === "N" || this.direction === "S") {
      this.direction = "Up";
      this.position.z += 1;
    }
  }

  turnDown() {
    if (this.direction === "N" || this.direction === "S") {
      this.direction = "Down";
      this.position.z -= 1; // Decrement z-coordinate
    }
  }

  executeCommand(command) {
    if (command === "f") this.moveForward();
    else if (command === "b") this.moveBackward();
    else if (command === "l") this.turnLeft();
    else if (command === "r") this.turnRight();
    else if (command === "u") this.moveUp();
    else if (command === "d") this.moveDown();
  }

  executeCommands(commands) {
    for (const command of commands) {
      console.log(`Executing command: ${command}`);

      if (command === "f") this.moveForward();
      else if (command === "b") this.moveBackward();
      else if (command === "l") this.turnLeft();
      else if (command === "r") this.turnRight();
      else if (command === "u") this.turnUp();
      else if (command === "d") this.turnDown();
    }
  }
}

module.exports = Spacecraft;
