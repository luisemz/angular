import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";

import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";

import { map } from "rxjs/operators";

import { Message } from "../interfaces/message.interface";
import { User } from "../interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Partial<Message>>;

  chat: Message[];
  user: User;

  constructor(private afs: AngularFirestore, public auth: AngularFireAuth) {
    this.chat = [];
    this.initUser();

    this.auth.authState.subscribe((user) => {
      if (!user) return;

      this.user.name = user.displayName;
      this.user.email = user.email;
      this.user.uid = user.uid;
      this.user.image = user.photoURL;
    });
  }

  initUser = () => {
    this.user = {
      name: null,
      email: null,
      uid: null,
      image: null,
    };
  };

  login = (type: string) => {
    if (type === "google")
      return this.auth.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
    else if (type === "twitter")
      return this.auth.auth.signInWithPopup(
        new firebase.auth.TwitterAuthProvider()
      );
  };

  logout = () => {
    this.initUser();
    return this.auth.auth.signOut();
  };

  loadMessage = () => {
    this.itemsCollection = this.afs.collection<Partial<Message>>(
      "chats",
      (ref) => ref.orderBy("date", "desc").limit(5)
    );
    return this.itemsCollection.valueChanges().pipe(
      map((chat: Message[]) => {
        chat.reverse();
        this.chat = chat;
      })
    );
  };

  addMessage = (message: string) => {
    let messageObj: Partial<Message> = {
      user: this.user.name,
      message: message,
      date: new Date().getTime(),
      uid: this.user.uid,
    };

    return this.itemsCollection.add(messageObj);
  };
}
