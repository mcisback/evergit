import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppBackendApi } from '../app-backend-api';

@Component({
  selector: 'app-notes-dashboard',
  templateUrl: './notes-dashboard.component.html',
  styleUrls: ['./notes-dashboard.component.css']
})
export class NotesDashboardComponent implements OnInit {

  protected notes: any;
  protected api: AppBackendApi;

  constructor(private  httpClient: HttpClient) {
    this.api = new AppBackendApi(httpClient);

    this.api.getNotes()
      .subscribe(data => {
        this.notes = data[`notes`].note;
      });
  }

  ngOnInit() {
  }

}
