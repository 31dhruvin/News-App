import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent implements OnInit {

  sportsNewsList : Array<any>;

  constructor(private newsService: NewsService, private snackBar : MatSnackBar) {
    this.sportsNewsList = [];
   }

  ngOnInit() {
    this.newsService.getSportsNews().subscribe((data)=>{
      this.sportsNewsList = data['articles'];

    },
    error =>{
     this.snackBar.open(error['error'], '', {
      duration : 2000
    });
   });
  }

}
