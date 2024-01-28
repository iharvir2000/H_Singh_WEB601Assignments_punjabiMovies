import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';


@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor(){
    this.contentList.addContent({
      id: 0,
      title: "Angrej",
      description:"A thoughtful young man struggles to find a woman to marry.",
      creator:"	Simerjit Singh",
      imgURL:"https://upload.wikimedia.org/wikipedia/en/2/2a/Angrej_poster.jpg",
      type:"Romantic"
    });
    this.contentList.addContent({
      id: 1,
      title: "Sardar Mohammad",
      description:"Set during the India-Pakistan partition, the story of Sardar Mohammad revolves around an infant who is saved by an Indian Sikh police officer.",
      creator:"Harry Bhatti",
      imgURL:"https://www.lavanguardia.com/peliculas-series/images/movie/poster/2017/11/w1280/znif778ztwOmKssPrXL0m42gU2Y.jpg",
      type:"Biography"
    });
    this.contentList.addContent({
      id: 2,
      title: "Shareek",
      description:"The word 'Shareek' may refer to 'sharing' in dictionary but in Punjab it had always been opposite to it. As time flies, one doesn't even notice that how and when the brothers become the enemies of each other.",
      creator:"Navaniat Singh",
      imgURL:"https://upload.wikimedia.org/wikipedia/en/2/2f/Shareek_movie_poster.jpg",
      type:"Drama"
    });
  }
}
