import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-progress-bar',
  templateUrl: './main-progress-bar.component.html',
  styleUrls: ['./main-progress-bar.component.css']
})
export class MainProgressBarComponent implements OnInit {

  protected isToggled: boolean;

  constructor() {
    this.isToggled = false;
  }

  ngOnInit() {
  }

  toggle() {
    this.isToggled = !this.isToggled;
  }

}
