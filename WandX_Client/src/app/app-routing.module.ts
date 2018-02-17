import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatetokenComponent } from './createtoken/createtoken.component'; 
import { TokentradeComponent } from './tokentrade/tokentrade.component';
import { ExistingtokensComponent } from './existingtokens/existingtokens.component'; 
import { HomepageComponent } from './homepage/homepage.component';
import { SinginComponent } from './singin/singin.component';
import { SignupComponent } from './signup/signup.component'; 


const routes: Routes = [
{
	path:'',
	component: HomepageComponent
},

{
	path:'singin',
	component: SinginComponent
},

{
	path:'signup',
	component: SignupComponent
},

{
	path:'createtoken',
	component: CreatetokenComponent
},

{
	path:'existingtokens',
	component: ExistingtokensComponent
},

{
	path:'tokentrade',
	component: TokentradeComponent
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
