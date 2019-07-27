import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainProgressBarComponent } from './main-progress-bar/main-progress-bar.component';
import { NotesDashboardComponent } from './notes-dashboard/notes-dashboard.component';

import { DerpPipe } from './app-derpipe';
import { NoteEditorComponent } from './note-editor/note-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainProgressBarComponent,
    NotesDashboardComponent,
    DerpPipe,
    NoteEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
