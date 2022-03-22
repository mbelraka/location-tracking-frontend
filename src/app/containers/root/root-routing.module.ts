import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RootComponent } from 'src/app/containers/root/root/root.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'main',
        loadChildren: () =>
          import('../../modules/main/main.module').then((m) => m.MainModule),
      },
      {
        path: 'map',
        loadChildren: () =>
          import('../../modules/map/map.module').then((m) => m.MapModule),
      },
      {
        path: '',
        redirectTo: 'main',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
