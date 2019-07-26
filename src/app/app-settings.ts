export class AppSettings {

  private static instance: AppSettings;

  public API_ENDPOINT: string;
  public ENV = 'dev';

  constructor() {

    if (this.ENV === 'dev') {
      this.API_ENDPOINT = 'http://localhost:8000/';
    }

  }

  public getApiEndpoint(): string {
    return this.API_ENDPOINT;
  }

  public static get getInstance() {
    // Do you need arguments? Make it a regular static method instead.

    return this.instance || (this.instance = new this());
  }

}
