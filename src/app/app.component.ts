import { Component } from '@angular/core';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainProgressBarComponent } from './main-progress-bar/main-progress-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EverGit';
}
