import {AfterContentInit, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AudioPlayerComponent, Track} from 'ngx-audio-player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clemence-audio';
  
  @ViewChild('audioPlayer', { static: true })
  audioPlayer?: AudioPlayerComponent;
  
  
  singleTrack: Track[] = [
    {
      title: 'In Love',
      link:
          'assets/expo.mp3',
      artist: 'A Himitsu feat. Nori'
    }
  ];
}
