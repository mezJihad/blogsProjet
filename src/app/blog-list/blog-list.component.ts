import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  @Input() blogs;

  constructor() { }

  ngOnInit() {
  }

}
