import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../news.service'
@Component({
  selector: 'news-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  newsList: Array<any>;
  constructor(private newsService: NewsService) { 

    
  }

  ngOnInit() {
    
  }

  onEnter(searchKey) {
    
    this.newsService.searchNews(searchKey).subscribe((data) => {
      this.newsList = data['articles'];
    
    });
  }

}
