import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-mediaitem',
  standalone: false,
  templateUrl: './mediaitem.component.html',
  styleUrls: ['./mediaitem.component.css']
})
export class MediaitemComponent implements OnInit {
  @Input() item: any;
  ngOnInit(): void {
 
  }
}