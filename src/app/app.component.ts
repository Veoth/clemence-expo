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
          'https://dl.dropboxusercontent.com/s/9v0psowra7ekhxo/A%20Himitsu%20-%20In%20Love%20%28feat.%20Nori%29.flac?dl=0',
      artist: 'A Himitsu feat. Nori'
    }
  ];
}
