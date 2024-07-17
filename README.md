# React Three Fiber Octahedron Project

This project demonstrates the creation of an interactive 3D octahedron using React Three Fiber, a popular library for creating 3D graphics in React applications using Three.js.

## Table of Contents

1. [Setup](#setup)
2. [Key Concepts](#key-concepts)
3. [Component Breakdown](#component-breakdown)
4. [Interactivity](#interactivity)
5. [Geometry and Materials](#geometry-and-materials)
6. [Animation](#animation)
7. [Troubleshooting](#troubleshooting)

## Setup

To create a new React Three Fiber project:

1. Ensure you have Node.js installed.
2. Create a new React app:
   `npx create-react-app my-r3f-project`
   `cd my-r3f-project`
3. Install necessary dependencies:
   `npm install three @react-three/fiber`

## Key Concepts

- **Canvas**: The container for your 3D scene in React Three Fiber.
- **Mesh**: 3D objects in the scene.
- **Geometry**: Defines the shape of 3D objects.
- **Material**: Defines the appearance of 3D objects.
- **useFrame**: A hook for executing code on every frame render.3
- **useRef**: Used to reference and manipulate 3D objects directly.
- **lineSegments**: Used to create a wire mesh aroudn the 3d object.
- **group**: Used to hold all properties of the mesh and lines together and to write code over them.

Animation

````useFrame((state, delta) => {
    group.current.rotation.x += 0.01;
    group.current.rotation.y += 0.01;
})```
This rotates the octahedron around both its X and Y axes on each frame.
````
