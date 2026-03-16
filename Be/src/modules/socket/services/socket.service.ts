import { Injectable } from "@nestjs/common"
import { Server } from "socket.io"
import { SocketEvent } from "../enums/socket-event.enum"
import { adminRoom } from "../utils/socket-room.util"

@Injectable()
export class SocketService {

  private server: Server

  setServer(server: Server) {
    this.server = server
  }

  emitToAdmin(event: SocketEvent, data: any) {
    this.server.to(adminRoom()).emit(event, data)
  }

  emitToTable(tableId: string, event: SocketEvent, data: any) {
    this.server.to(`table-${tableId}`).emit(event, data)
  }

}