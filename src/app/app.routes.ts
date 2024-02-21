import { Routes } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    {'path':'message',"title":"message",component:MessageComponent},
    {'path':'',"title":"",component:HeaderComponent}
];
