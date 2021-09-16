import {AfterContentInit, AfterViewInit, Component, Host, HostBinding, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

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
  // expoMp3$!: Observable<any>;
  // loading$ = new BehaviorSubject(true);
  // singleTrack$!: Observable<Array<Track>>;
  //
  // constructor(private readonly http: HttpClient) {
  //   this.singleTrack$ = this.http.get('assets/expo.mp3').pipe(
  //       tap(() => {
  //         this.loading$.next(false);
  //         console.log("false");
  //       }),
  //       map((mp3: any) => {
  //         return [
  //           {
  //             title: '',
  //             link: mp3
  //           }
  //         ];
  //       })
  //   );
  // }
  
  playlist = [
    {
      title: '',
      link: 'assets/expo.mp3'
    }
  ];
}
