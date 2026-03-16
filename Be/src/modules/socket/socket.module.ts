import { Module } from "@nestjs/common"

import { SocketGateway } from "./gateways/socket.gateway"
import { SocketService } from "./services/socket.service"

@Module({
  providers: [SocketGateway, SocketService],
  exports: [SocketService]
})
export class SocketModule {}