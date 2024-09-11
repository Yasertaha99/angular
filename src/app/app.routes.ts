import { Routes } from '@angular/router';
import { StudentsComponent } from './components/route/students/students.component';
import { StudentsDetailsComponent } from './components/route/students-details/students-details.component';
import { ProfileComponent } from './components/route/profile/profile.component';
import { ErrorComponent } from './components/route/error/error.component';

export const routes: Routes = [
    {path:"",component:StudentsComponent},
    {path:"students",component:StudentsComponent},
    {path:"students/:id",component:StudentsDetailsComponent},
    {path:"profile",component:ProfileComponent},
    {path:"**",component:ErrorComponent}
];
