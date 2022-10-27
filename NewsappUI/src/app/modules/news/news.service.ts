import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  getsportNews() {
    throw new Error('Method not implemented.');
  }
  api_key = '143c1b09b1e740539fd6fcdca1d9ed1b';
  springEndpoint : string;

  constructor(private http: HttpClient) {
    this.springEndpoint = 'http://localhost:8081/api/news';
  }

  searchNews(query: string) {
    const url ='https://newsapi.org/v2/everything?' +
    'q=' + query +
    '&apiKey='+this.api_key;
    console.log(url);
    return this.http.get(url);
 }

 addToNews(news)
 {
    return this.http.post(this.springEndpoint, news);
 }

 getFavouriteNewsList():Observable<Array<any>>
 {
    return this.http.get<Array<any>>(this.springEndpoint);
 }

 deleteFromFavouriteList(news)
 {
    return this.http.delete(this.springEndpoint + "/" + news.id,{responseType:'text'});
 }

 getTopNews()
 {
   const url ='https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=' +
   this.api_key;
   console.log(url);
   return this.http.get(url);
 }

 getTechNews()
 {
   const url ='https://newsapi.org/v2/top-headlines?category=technology&apiKey=' +
   this.api_key;
   console.log(url);
   return this.http.get(url);
 }

 getBusinessNews()
 {
   const url ='https://newsapi.org/v2/top-headlines?category=business&apiKey=' +
   this.api_key;
   console.log(url);
   return this.http.get(url);
 }

 getSportsNews()
 {
   const url ='https://newsapi.org/v2/top-headlines?category=sports&apiKey=' +
   this.api_key;
   console.log(url);
   return this.http.get(url);
 }

}
