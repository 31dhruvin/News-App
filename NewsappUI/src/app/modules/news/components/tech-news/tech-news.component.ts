import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  techNewsList : Array<any>;

  constructor(private newsService: NewsService, private snackBar : MatSnackBar) {
    this.techNewsList = [];
   }

  ngOnInit() {
    this.newsService.getTechNews().subscribe((data)=>{
      this.techNewsList = data['articles'];

    },
    error =>{
     this.snackBar.open(error['error'], '', {
      duration : 2000
    });
   });
  }

}
