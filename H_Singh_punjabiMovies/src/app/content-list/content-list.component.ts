import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';
import { TypePipe } from '../type.pipe';
import { ContentCardComponent } from '../content-card/content-card.component';
import { HoverAffectDirective } from '../hover-affect.directive';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, TypePipe, FormsModule, HoverAffectDirective],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  displayContentInfo(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  searchTitle: string = '';
  contentExists: boolean = false;
  message: string = '';  
  selectedTitle: string | null = null;

  checkContentExists() {
    const foundItem = this.contentItems.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.contentExists = !!foundItem;
    this.message = foundItem ? 'Content item exists.' : 'Content item does not exist.';
    this.selectedTitle = foundItem ? foundItem.title : null;
  }

  ngOnInit(): void {
    this.contentItems =[
      {
        id: 0,
        title: "Angrej",
        description:"A thoughtful young man struggles to find a woman to marry.",
        creator:"	Simerjit Singh",
        imgURL:"",
        type:"Romantic",
        tags: ["romantic", "comady"]
      },
      {
        id: 1,
        title: "Sardar Mohammad",
        description:"Set during the India-Pakistan partition, the story of Sardar Mohammad revolves around an infant who is saved by an Indian Sikh police officer.",
        creator:"Harry Bhatti",
        imgURL:"https://timesofindia.indiatimes.com/photo/61486918.cms",
        type:"Drama",
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