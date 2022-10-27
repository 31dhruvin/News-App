import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'news-thumnail',
  templateUrl: './thumnail.component.html',
  styleUrls: ['./thumnail.component.css']
})
export class ThumnailComponent implements OnInit {
  @Input()
  news : any;
  @Output()
  addNews = new EventEmitter();
  @Output()
  deleteNews=new EventEmitter();
  @Input()
  favCheck :boolean;

  constructor() { }

  ngOnInit() {

  }

  addToFavouriteList()
  {
    this.addNews.emit(this.news);
  }
  deleteNewsFav(){
    console.log(this.news);
    this.deleteNews.emit(this.news);

    }


}
