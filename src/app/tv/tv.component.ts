import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-tv',
  standalone: false,
  
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  constructor(private _MoviesService:MoviesService){}

  
  term:string = '';
  trendingTv:any[] = [];
  ngOnInit(): void {
    this._MoviesService.getTrendine('tv').subscribe({
      next:(data)=> this.trendingTv = data.results
    })
  }


}
