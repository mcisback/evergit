import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { AppBackendApi } from '../app-backend-api';
import { isNumber } from 'util';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent implements OnInit {

  protected api: AppBackendApi;
  protected id: number;
  protected isNew = false;
  protected note: object;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    this.api = new AppBackendApi(httpClient);

    this.route.params.subscribe(id => {
      this.setParams();
    });
  }

  ngOnInit() {
  }

  setParams() {
    const paramValue: string = this.route.snapshot.params[`id`];

    console.log('paramValue: ', paramValue);

    if (paramValue === 'new') {
      console.log('Creating a new note');

      this.isNew = true;
      this.id = 0;

      this.note = {
        id: this.id,
        title: '',
        subtitle: '',
        parent: '',
        content: '',
        tags: {
          tag: []
        }
      };

    } else {

      this.id = parseInt(paramValue, 10);

      this.loadNote(this.id);

    }
  }

  loadNote(id: number) {
    console.log('Loading note with id: ', id);

    this.api.getNote(id)
      .subscribe(data => {
        console.log('Note data: ', data);

        this.note = data[`note`];
      });
  }

  saveNote(id: number) {
    return true;
  }

}
