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

// Main function to call SayHello
function main() {
  const client = new hello_proto.Greeter('localhost:50051', grpc.credentials.createInsecure());
  const userName = 'World';
  client.SayHello({ name: userName }, (err, response) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Greeting:', response.message);
    }
  });
}

main();
