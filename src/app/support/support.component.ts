import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ioc-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  constructor( private titleService: Title) { 
  this.titleService.setTitle( "iocscan" );
}

  ngOnInit() {
  }

}
