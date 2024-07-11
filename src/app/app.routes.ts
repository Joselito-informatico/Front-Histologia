import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { NotesComponent } from './notes/notes.component';
import { TejidoComponent } from './tejido/tejido.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Muestras Histológicas UTA' },
    { path: 'settings', component: SettingsComponent },
    { path: 'notes', component: NotesComponent },
    { path: 'tejido', component: TejidoComponent },
    { path: 'tejido/:id', component: TejidoComponent },
];
