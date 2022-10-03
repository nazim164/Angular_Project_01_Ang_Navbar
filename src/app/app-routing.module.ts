import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { TaBLEComponent } from './ta-ble/ta-ble.component';



const routes: Routes = [
  { path: 'Login', component: SignupComponent },
  { path: 'Table', component: TaBLEComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
export const routingComponents = [SignupComponent, TaBLEComponent]