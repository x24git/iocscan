import { Component, OnInit } from '@angular/core';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';
import { SearchshareService } from '../searchshare.service';

@Component({
  selector: 'ioc-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  faShieldAlt = faShieldAlt;
  constructor(private titleService: Title, private searchTerm: SearchshareService ) {
    this.titleService.setTitle( 'iocscan' );
    this.searchTerm.changeMessage('');
  }

  ngOnInit() {
  }

}
