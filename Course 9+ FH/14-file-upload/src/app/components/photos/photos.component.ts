import { Component, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "angularfire2/firestore";
import { Observable } from "rxjs";

interface Item {
  fileName: string;
  url: string;
}

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styles: [],
})
export class PhotosComponent implements OnInit {
  private itemCollections: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {
    this.itemCollections = this.afs.collection<Item>("img");
    this.items = this.itemCollections.valueChanges();
  }
}
