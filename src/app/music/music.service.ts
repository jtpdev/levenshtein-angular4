import { Injectable } from '@angular/core';

@Injectable()
export class MusicService {

  musics: string[] = [
    "Satisfaction",
    "Back in Black",
    "Stairway to heaven",
    "Garota de Ipanema",
    "Carinhoso",
    "Oceano"
  ];

  constructor() { 
  }

  getMusic(){
    return this.musics[Math.floor(Math.random() * this.musics.length)];
  }

}
