import { HttpClient } from '@angular/common/http';

import { AppSettings } from './app-settings';

export class AppBackendApi {

  protected apiUrl: string;

  constructor(private  httpClient: HttpClient) {
    this.apiUrl = AppSettings.getInstance.getApiEndpoint();
  }

  getNotes() {

    return this.httpClient.get(this.apiUrl + 'notes');

  }

  getNote(id: number) {
    return this.httpClient.get(this.apiUrl + 'note/' + id);
  }

}
