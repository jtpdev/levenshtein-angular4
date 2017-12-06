import { Component } from '@angular/core';


import { LevenshteinService } from './levenshtein/levenshtein.service';
import { MusicService } from './music/music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Levenshtein';
  value: string = new MusicService().getMusic();
  toCompare: string;
  distance: number;
  message: string = "Let's go!?";

  compare(){
    var l = new LevenshteinService();
    this.distance = l.distance(this.value.toLowerCase(), this.toCompare.toLowerCase());
    if(this.distance == 0){
      this.message = "Congratulation!";
    }else if(this.distance == -1){
      this.message = "Came on!? Try again!";
    }else if(this.distance < 2){
      this.message = "A little more!";
    }else if(this.distance < 4){
      this.message = "It's almost there!";
    }else if(this.distance < 6){
      this.message = "Maybe!";
    }else if(this.distance < 15){
      this.message = "I believe you're mistaken!";
    }else if(this.distance >= 15){
      this.message = "Of course, this is not it!";
    }
  }

}
