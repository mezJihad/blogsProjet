import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list-item',
  templateUrl: './blog-list-item.component.html',
  styleUrls: ['./blog-list-item.component.scss']
})
export class BlogListItemComponent implements OnInit {

  @Input() titre;
  @Input() contenu;
  @Input() dateCreation;
  @Input() loveIts;

  constructor() { }

  ngOnInit() {
  }

  onLike() {
    this.loveIts += 1;
  }

  onDislike() {
    this.loveIts -= 1;
  }

}
