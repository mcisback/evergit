import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesDashboardComponent } from './notes-dashboard/notes-dashboard.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';

const routes: Routes = [
  { path: '', component: NotesDashboardComponent },
  { path: 'edit/:id', component: NoteEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
