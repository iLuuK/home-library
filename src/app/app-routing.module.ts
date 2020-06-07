import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DetailBookComponent } from './components/detail-book/detail-book.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthCanDetailBookGuard } from './auth/auth-can-detail-book.guard';


const routes: Routes = [{ path: '', component: MainComponent },
                        { path: 'detailBook', component: DetailBookComponent, canActivate: [AuthCanDetailBookGuard],},
                        { path: '**', component: PageNotFoundComponent } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
