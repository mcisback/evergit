import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppBackendApi } from '../app-backend-api';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  protected notes: any;
  protected api: AppBackendApi;
  protected allNotes: any;

  constructor(private  httpClient: HttpClient) {

    this.api = new AppBackendApi(httpClient);

    this.loadNotes();
  }

  ngOnInit() {
  }

  loadNotes() {

    this.allNotes = this.api.getNotes();

  }

}
