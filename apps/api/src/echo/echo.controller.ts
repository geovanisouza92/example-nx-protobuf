import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('echo')
export class EchoController {
  @GrpcMethod('EchoService')
  async echo(req: EchoRequest): Promise<EchoResponse> {
    return { message: req.message };
  }
}

interface EchoRequest {
  message: string;
}

interface EchoResponse {
  message: string;
}
