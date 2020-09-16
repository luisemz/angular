import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

interface IMessage {
  from: string;
  message: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, OnDestroy {
  element: HTMLElement;

  text: string;
  messages: IMessage[];
  messageSuscription: Subscription;

  constructor(public chatService: ChatService) {}

  ngOnInit(): void {
    this.element = document.getElementById('chat-messages');

    this.text = '';
    this.messages = [];

    this.messageSuscription = this.chatService
      .getMessage()
      .subscribe((message: IMessage) => {
        this.messages.push(message);
        setTimeout(() => {
          this.element.scrollTop = this.element.scrollHeight;
        }, 50);
      });
  }

  ngOnDestroy(): void {
    this.messageSuscription.unsubscribe();
  }

  send = () => {
    if (!this.text.trim().length) return;

    this.chatService.sendMessage(this.text.trim());
    this.text = '';
  };
}
