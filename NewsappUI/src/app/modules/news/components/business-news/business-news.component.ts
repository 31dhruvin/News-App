import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {

  businessNewsList : Array<any>;

  constructor(private newsService: NewsService, private snackBar : MatSnackBar) {
    this.businessNewsList = [];
   }

  ngOnInit() {
    this.newsService.getBusinessNews().subscribe((data)=>{
      this.businessNewsList = data['articles'];

    },
    error =>{
     this.snackBar.open(error['error'], '', {
      duration : 2000
    });
   });
  }

}
