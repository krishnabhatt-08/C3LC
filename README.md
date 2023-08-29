# C3LC
"C3LC" (Chandrayaan 3 Lunar Craft: Galactic Space Craft Control) is a potent program for navigating lunar spacecraft in the galaxy. It ensures accurate exploration through forward, backward, vertical, and angular movements while respecting galactic limits, enabling seamless control for precise direction changes during interstellar missions.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Installation](#installation)
- [Running the Program](#running-the-program)
- [Commands](#commands)
- [Examples](#examples)

## Features

- Move the spacecraft forward/backward based on its direction.
- Turn the spacecraft left/right to change its facing direction.
- Rotate the spacecraft up/down to change its angle.
- Simulate rigid movement and rotations within the galactic boundaries.

## Usage

## Installation

Clone the repository to your local machine:

   ``bash
   git clone https://github.com/yourusername/spacecraft-simulation.git
   cd spacecraft-simulation
   
Install the required dependencies:

  npm install

## Running the Program

  To run the spacecraft simulation program, execute the following command:
  
  npm start

## Commands

  The spacecraft understands the following commands:
  
  'f': Move forward
  'b': Move backward
  'l': Turn left
  'r': Turn right
  'u': Rotate up
  'd': Rotate down

## Examples

  Here are a few examples of using the spacecraft simulation:
  
  const spacecraft = new Spacecraft(0, 0, 0, "N");
  
  // Execute a sequence of commands
  spacecraft.executeCommands(["f", "r", "f", "d", "f", "l", "b"]);
  
  // Get the current position and direction
  console.log(spacecraft.getPosition()); // { x: 1, y: 0, z: -2 }
  console.log(spacecraft.getDirection()); // "S"
