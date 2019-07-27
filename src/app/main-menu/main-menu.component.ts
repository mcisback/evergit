import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { AppBackendApi } from '../app-backend-api';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  protected api: AppBackendApi;
  protected notes: Array<any>;

  constructor(private  httpClient: HttpClient) {

    this.api = new AppBackendApi(httpClient);
    this.notes = [];

    this.loadNotes();
  }

  ngOnInit() {
  }

  loadNote(id: number) {
    console.log('Loading note with id: ', id);

    /*
    this.api.getNote(id)
      .subscribe(data => {
        console.log('Note data: ', data);
      });
    */
  }

  loadNotes() {

    this.api.getNotes()
      .subscribe(data => {
        console.log('Notes: ', data[`notes`]);
        console.log('typeof Notes: ', typeof data);

        this.notes = data[`notes`].note;

        console.log('this.notes: ', this.notes);
      });

  }

}
