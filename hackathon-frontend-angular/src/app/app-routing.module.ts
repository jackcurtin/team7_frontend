import { NgModule } from '@angular/core';
import { FormComponent} from './form/form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'form',
      component: FormComponent
    }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
