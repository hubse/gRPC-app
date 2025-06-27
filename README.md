# gRPC Demo Application

This is a basic gRPC demo application implemented in Node.js. It demonstrates the core functionality of gRPC including defining a service, implementing a server, and creating a client to call the service.

## Files

- `helloworld.proto`: Protocol buffer file defining the Greeter service and SayHello method.
- `server.js`: gRPC server implementation that listens on port 50051 and responds with a greeting message.
- `client.js`: gRPC client implementation that calls the SayHello method and prints the response.
- `python_client.py`: Another gRPC client implementation that calls the SayHello method and prints the response.


## Setup and Run

1. Install dependencies:
   ```
   npm install
   ```

2. Start the gRPC server:
   ```
   node server.js
   ```

3. In another terminal, run the client:
   ```
   node client.js
   ```

## What it demonstrates

- Defining a gRPC service using Protocol Buffers.
- Implementing a gRPC server in Node.js.
- Creating a gRPC client to call the server.
- Basic request-response interaction over gRPC.

## Requirements

- Node.js (version 12 or higher recommended)
- npm