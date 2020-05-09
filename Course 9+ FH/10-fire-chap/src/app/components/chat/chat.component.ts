import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ChatService } from "src/app/providers/chat.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
})
export class ChatComponent implements OnInit {
  message: string;
  element: any;

  constructor(public _cs: ChatService, private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      if (!this._cs.user.uid) this.router.navigateByUrl("auth");
    }, 1000);

    this._cs.loadMessage().subscribe(() => {
      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 20);
    });
    this.message = "";

    this.element = document.getElementById("app-messages");
  }

  sendMessage = () => {
    if (this.message.length === 0) return;
    this._cs
      .addMessage(this.message)
      .then(() => {
        this.message = "";
      })
      .catch((err) => {
        console.log(`Error send message: ${err}`);
      });
  };
}
