import grpc
import helloworld_pb2
import helloworld_pb2_grpc

def run():
    # Connect to the gRPC server
    channel = grpc.insecure_channel('localhost:50051')
    stub = helloworld_pb2_grpc.GreeterStub(channel)

    # Create a request message
    request = helloworld_pb2.HelloRequest(name='PythonClient')

    # Call the SayHello RPC
    response = stub.SayHello(request)

    print("Greeting from server:", response.message)

if __name__ == '__main__':
    run()
