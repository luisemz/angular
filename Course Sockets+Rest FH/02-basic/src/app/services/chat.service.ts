import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(public wsService: WebsocketService) {}

  sendMessage = (message: string) => {
    const payload = {
      from: 'Luis',
      message,
    };

    this.wsService.emit('message', payload);
  };

  getMessage = () => {
    return this.wsService.listen('new-message');
  };
}
