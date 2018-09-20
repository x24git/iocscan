import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';

@Component({
  selector: 'ioc-badsearch',
  templateUrl: './badsearch.component.html',
  styleUrls: ['./badsearch.component.scss']
})
export class BadsearchComponent implements OnInit {

  
  constructor(private titleService: Title) { }
  
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
  
  ngOnInit() {
    this.setTitle("Out of Coffee")
  }

}
