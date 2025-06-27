# gRPC Demo Application

This is a basic gRPC demo application implemented in Node.js. It demonstrates the core functionality of gRPC including defining a service, implementing a server, and creating a client to call the service.

# Java RMI vs gRPC – Quick Differences

| Feature                     | **Java RMI**                                         | **gRPC**                                              |
|-----------------------------|------------------------------------------------------|--------------------------------------------------------|
| **Language Support**        | Java only                                            | Multiple languages (Java, Go, Python, C++, etc.)       |
| **Communication Protocol**  | Java-specific protocol (JRMP or IIOP)                | HTTP/2                                                 |
| **Data Serialization**      | Java Serialization                                   | Protocol Buffers (protobuf)                            |
| **Platform Independence**   | Limited (Java-only environments)                     | Fully cross-platform                                   |
| **Performance**             | Slower due to Java serialization and RMI overhead    | High performance (compact protobuf + HTTP/2)           |
| **Streaming Support**       | No built-in support                                  | Full support for client/server and bi-directional streaming |
| **Interoperability**        | Poor (Java-to-Java only)                             | Excellent (multi-language, cross-platform)             |
| **IDL (Interface Definition)** | Java interfaces                                     | .proto files                                            |
| **Deployment Complexity**   | Simpler in Java-only environments                    | Requires tooling for protobuf, more setup              |
| **Use Case**                | Legacy Java applications, distributed Java systems   | Modern microservices, polyglot systems                 |


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
