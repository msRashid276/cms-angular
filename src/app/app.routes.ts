import { Routes } from '@angular/router';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'contact/admin',pathMatch:'full'
    },
    {
        path:'contact/admin',component:ContactManagerComponent
    }
];
