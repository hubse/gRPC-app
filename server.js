const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.join(__dirname, 'helloworld.proto');

// Load the protobuf
const packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });
const hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

// Implement the SayHello RPC method
function sayHello(call, callback) {
  callback(null, { message: 'Hello ' + call.request.name });
}

// Start the gRPC server
function main() {
  const server = new grpc.Server();
  server.addService(hello_proto.Greeter.service, { SayHello: sayHello });
  const bindAddress = '0.0.0.0:50051';
  server.bindAsync(bindAddress, grpc.ServerCredentials.createInsecure(), () => {
    console.log('Server running at ' + bindAddress);
    server.start();
  });
}

main();
