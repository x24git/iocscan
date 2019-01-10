import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SearchshareService } from '../searchshare.service'

@Component({
  selector: 'ioc-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  constructor( private titleService: Title, private searchTerm: SearchshareService ) { 
  this.titleService.setTitle( "iocscan" );
  this.searchTerm.changeMessage('')
}

  ngOnInit() {
  }

}
