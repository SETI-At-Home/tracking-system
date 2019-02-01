import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// third-party modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// shared module
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule',
      },
    ],
  },
];

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyC55ImUX-fXHs3TB4PbWKLxBLiFpbyjTFk',
  authDomain: 'tracker-1234d.firebaseapp.com',
  databaseURL: 'https://tracker-1234d.firebaseio.com',
  projectId: 'tracker-1234d',
  storageBucket: 'tracker-1234d.appspot.com',
  messagingSenderId: '725717481938',
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot(),
  ],
})
export class AuthModule {}
