import {AfterContentInit, AfterViewInit, Component, Host, HostBinding, OnInit, ViewChild} from '@angular/core';
import {AudioPlayerComponent, Track} from 'ngx-audio-player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clemence-audio';
  
  // @HostBinding() class = 'h-100';
  
  // @ViewChild('audioPlayer', { static: true })
  // audioPlayer?: AudioPlayerComponent;
  
  
  singleTrack: Track[] = [
    {
      title: '1400',
      link: `assets/expo.mp3`,
      duration: 212,
      artist: 'Yung Kartz'
    }
  ];
}
