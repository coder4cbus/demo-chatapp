import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { VgCoreModule, VgControlsModule, VgOverlayPlayModule, VgBufferingModule } from 'ngx-videogular';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { ChatRoutingModule } from "./chat-routing.module";

import { ChatComponent } from "./chat.component";
import {NgbDropdownModule, NgbModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {TagInputModule} from 'ngx-chips';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
    imports: [
        CommonModule,
        ChatRoutingModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule,
        PerfectScrollbarModule,
        NgbDropdownModule,
        FormsModule,
        TagInputModule,
        NgbTabsetModule,
        NgbModule,
        NgSelectModule
    ],
    declarations: [
        ChatComponent
    ]
})
export class ChatModule { }
