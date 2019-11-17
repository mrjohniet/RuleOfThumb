import { Component, OnInit } from '@angular/core';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'featured-character',
  templateUrl: './featured-character.component.html',
  styleUrls: ['./featured-character.component.scss']
})
export class FeaturedCharacterComponent implements OnInit {

  dataCharacter:any={
    name:"Pope Francis",
    description:"He's talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)",
    link:"https://en.wikipedia.org/wiki/Pope_Francis",closureDate:""

  }
  faWikipediaW=faWikipediaW
  
  constructor() { }

  ngOnInit() {
  }

}
