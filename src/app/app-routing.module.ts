import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './private/form/form.component';
import { UserListComponent } from './private/user-list/user-list.component';
import { HomeComponent } from './public/home/home.component';
import { MainFrameComponent } from './public/main-frame/main-frame.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: MainFrameComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'form', component: FormComponent},
    {path: 'user-list', component: UserListComponent},
  ] },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
