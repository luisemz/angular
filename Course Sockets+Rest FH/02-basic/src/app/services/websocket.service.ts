import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  public socketStatus: boolean;

  constructor(private socket: Socket) {
    this.socketStatus = false;

    this.checkStatus();
  }

  checkStatus = () => {
    this.socket.on('connect', () => {
      console.log('Socket connected!!!');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Socket disconnected!!!');
      this.socketStatus = false;
    });
  };

  emit = (event: string, payload?: any, callback?: Function) => {
    console.log(`Emitting event: ${event}`);
    this.socket.emit(event, payload, callback);
  };

  listen = (event: string): Observable<any> => {
    console.log(`Listening event: ${event}`);
    return this.socket.fromEvent(event);
  };
}
