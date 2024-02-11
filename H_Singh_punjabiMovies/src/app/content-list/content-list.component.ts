import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  displayContentInfo(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  ngOnInit(): void {
    this.contentItems =[
      {
        id: 0,
        title: "Angrej",
        description:"A thoughtful young man struggles to find a woman to marry.",
        creator:"	Simerjit Singh",
        imgURL:"https://upload.wikimedia.org/wikipedia/en/2/2a/Angrej_poster.jpg",
        type:"Romantic",
        tags: ["romantic", "comady"]
      },
      {
        id: 1,
        title: "Sardar Mohammad",
        description:"Set during the India-Pakistan partition, the story of Sardar Mohammad revolves around an infant who is saved by an Indian Sikh police officer.",
        creator:"Harry Bhatti",
        imgURL:"https://timesofindia.indiatimes.com/photo/61486918.cms",
        type:"Biography",
        tags: ["Biography", "Drama"]
      },
      {
        id: 2,
        title: "Shareek",
        description:"The word 'Shareek' may refer to 'sharing' in dictionary but in Punjab it had always been opposite to it. As time flies, one doesn't even notice that how and when the brothers become the enemies of each other.",
        creator:"Navaniat Singh",
        imgURL:"https://upload.wikimedia.org/wikipedia/en/2/2f/Shareek_movie_poster.jpg",
        type:"Drama",
        tags: ["Drama", "Comady"]
      },
      {
        id: 3,
        title: "Angrej",
        description:"A thoughtful young man struggles to find a woman to marry.",
        creator:"	Simerjit Singh",
        imgURL:"https://upload.wikimedia.org/wikipedia/en/2/2a/Angrej_poster.jpg",
        type:"Romantic",
        tags: ["romantic", "comady"]
      },
      {
        id: 4,
        title: "Sardar Mohammad",
        description:"Set during the India-Pakistan partition, the story of Sardar Mohammad revolves around an infant who is saved by an Indian Sikh police officer.",
        creator:"Harry Bhatti",
        imgURL:"https://timesofindia.indiatimes.com/photo/61486918.cms",
        type:"Biography",
        tags: ["Biography", "Drama"]
      },
      {
        id: 5,
        title: "Shareek",
        description:"The word 'Shareek' may refer to 'sharing' in dictionary but in Punjab it had always been opposite to it. As time flies, one doesn't even notice that how and when the brothers become the enemies of each other.",
        creator:"Navaniat Singh",
        imgURL:"https://upload.wikimedia.org/wikipedia/en/2/2f/Shareek_movie_poster.jpg",
        type:"Drama",
        tags: ["Drama", "Comady"]
      },
      {
        id: 6,
        title: "Angrej",
        description:"A thoughtful young man struggles to find a woman to marry.",
        creator:"	Simerjit Singh",
        imgURL:"https://upload.wikimedia.org/wikipedia/en/2/2a/Angrej_poster.jpg",
        type:"Romantic",
        tags: ["romantic", "comady"]
      }
      
    ];
  }
 
}