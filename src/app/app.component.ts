import { Component } from '@angular/core';
import {Track} from 'ngx-audio-player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clemence-audio';
  
  singleTrack: Track[] = [
    {
      title: 'In Love',
      link:
          'assets/expo.mp3',
      duration: 227,
      artist: 'A Himitsu feat. Nori'
    }
  ];
}
