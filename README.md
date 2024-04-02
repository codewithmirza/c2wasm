# WebAssembly Function Call Example

This is a simple project demonstrating how to compile a C function to WebAssembly (WASM) using Emscripten and call it from a web application.

## Project Structure

- **functions.c**: Contains a simple C function to add two numbers.
- **index.html**: HTML file for the web application.
- **script.js**: JavaScript file to load and call the WebAssembly module.
- **styles.css**: For styling the web application.
- **functions.wasm**: Compiled WebAssembly module generated from `functions.c`.
- **README.md**: Documentation for the project.

## Steps to Run

1. **Compile C Function to WebAssembly**:
   - Use Emscripten to compile `functions.c` to WebAssembly:
     ```
     emcc functions.c -o functions.wasm -s EXPORTED_FUNCTIONS="['_add']" -s EXPORTED_RUNTIME_METHODS="['ccall']"
     ```

2. **Access the Web Application**:
   - Open the GitHub Pages website connected to this repository [here](https://codewithmirza.github.io/c2wasm/).

## Usage
- Enter two numbers in the input fields and click the "Add" button to see the result.

## Additional Notes
- Experiment with different C functions and compile them to WebAssembly for use in web applications.
- Explore more advanced features and optimizations offered by Emscripten for WebAssembly development.
