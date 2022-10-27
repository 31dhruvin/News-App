import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterceptorService } from './interceptor.service';
import { SearchComponent } from './components/search/search.component';
import { ContainerComponent } from './components/container/container.component';
import { ThumnailComponent } from './components/thumnail/thumnail.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FavComponent } from './components/fav/fav.component';
import { NewsService} from './news.service'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuardService } from 'src/app/auth-guard.service';
import { TopNewsComponent } from './components/top-news/top-news.component';
import { TechNewsComponent } from './components/tech-news/tech-news.component';
import { BusinessNewsComponent } from './components/business-news/business-news.component';
import { SportsNewsComponent } from './components/sports-news/sports-news.component';


const newsRoutes: Routes = [
  {
      path : 'news',
      children : [

          {
              path : 'search',
              canActivate : [AuthGuardService],
              component : SearchComponent
          },
          {
            path : 'favourites',
            canActivate : [AuthGuardService],
            component : FavComponent
          },
          {
            path : 'top',
            canActivate : [AuthGuardService],
            component : TopNewsComponent
          },
          {
            path : 'techNews',
            canActivate : [AuthGuardService],
            component : TechNewsComponent
          },
          {
            path : 'businessNews',
            canActivate : [AuthGuardService],
            component : BusinessNewsComponent
          },
          {
            path : 'sportsNews',
            canActivate : [AuthGuardService],
            component : SportsNewsComponent
          },
      ]
  }
];
@NgModule({
  declarations: [SearchComponent, ContainerComponent, ThumnailComponent, FavComponent, TopNewsComponent, TechNewsComponent, BusinessNewsComponent, SportsNewsComponent],
  imports: [
    RouterModule.forChild(newsRoutes),
    SharedModule,
    HttpClientModule
  ],
  providers:[
    NewsService, {
      provide : HTTP_INTERCEPTORS,
      useClass :  InterceptorService,
      multi : true
    }
  ],
  exports :[
    SearchComponent, ContainerComponent, ThumnailComponent,TopNewsComponent
  ]
})
export class NewsModule { }
