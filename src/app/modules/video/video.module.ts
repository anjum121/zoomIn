import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule,  } from '@angular/common';
import { VideoComponent } from './video.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [VideoComponent],
  exports:[VideoComponent]
})
export class VideoModule { }
