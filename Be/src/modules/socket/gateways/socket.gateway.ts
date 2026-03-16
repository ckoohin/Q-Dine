import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect
} from "@nestjs/websockets"

import { Server, Socket } from "socket.io"

import { SocketService } from "../services/socket.service"
import { SocketEvent } from "../enums/socket-event.enum"
import { adminRoom, tableRoom } from "../utils/socket-room.util"

@WebSocketGateway({
  cors: { origin: "*" }
})
export class SocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  server: Server

  constructor(private socketService: SocketService) {}

  afterInit() {
    this.socketService.setServer(this.server)
    console.log("socket ready")
  }

  handleConnection(client: Socket) {
    console.log("connected:", client.id)
  }

  handleDisconnect(client: Socket) {
    console.log("disconnected:", client.id)
  }

  @SubscribeMessage(SocketEvent.JOIN_ADMIN)
  joinAdmin(client: Socket) {
    client.join(adminRoom())
  }

  @SubscribeMessage(SocketEvent.JOIN_TABLE)
  joinTable(client: Socket, tableId: string) {
    client.join(tableRoom(tableId))
  }
}