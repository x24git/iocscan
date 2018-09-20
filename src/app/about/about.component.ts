import { Component, OnInit } from '@angular/core';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ioc-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  faShieldAlt = faShieldAlt;
  constructor(private titleService: Title) {
    this.titleService.setTitle( "iocscan" );
  }

  ngOnInit() {
  }

}
