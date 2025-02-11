import { Component, OnInit} from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-movies',
  standalone: false,
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private _MoviesService:MoviesService){}
  
  term:string = '';
  trendingMovies:any[] = [];


  ngOnInit(): void {
    this._MoviesService.getTrendine('movie').subscribe({
      next:(data)=> this.trendingMovies = data.results
    })
  }

}
