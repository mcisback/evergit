import { HttpClient } from '@angular/common/http';

import { AppSettings } from './app-settings';

export class AppBackendApi {

  protected apiUrl: string;

  constructor(private  httpClient: HttpClient) {
    this.apiUrl = AppSettings.getInstance.getApiEndpoint();
  }

  getNotes() {

    this.httpClient.get(this.apiUrl + 'notes')
      .subscribe(data => {
        console.log('Notes: ', data);

        return data;
      });
  }

}
