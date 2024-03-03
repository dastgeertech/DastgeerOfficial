import { Route } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '', component: MaintenanceComponent
            }
        ]
    }
];
