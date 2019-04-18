import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'ioc-badsearch',
  templateUrl: './badsearch.component.html',
  styleUrls: ['./badsearch.component.scss']
})
export class BadsearchComponent implements OnInit {

  error: any = {};
  constructor(private titleService: Title, private route: ActivatedRoute, private router: Router, private location: PlatformLocation) {
    this.error.code = this.route.snapshot.paramMap.get('error');
    switch (this.error.code) {
      case '418':
        this.error.heading = 'I\'m a teapot';
        this.error.message = ['This is as much a Coffee Pot as what was searched for was something valid.', 'You don\'t make coffee in a teapot, and you don\'t search for anything but IPs and Domains on this site.'];
        this.error.background = 'url(\'teapot.jpg\')';
        this.error.title = 'Out of Coffee';
        break;
      case '403':
        this.error.heading = 'WHOOOO are you. You don\'t belong here';
        this.error.message = ['We\'ll let this slide for now, but you best watch yourself.', 'Repeated attemts to circumvent security will result in a ban of your IP.'];
        this.error.background = 'url(\'who.jpg\')';
        this.error.title = 'Get Lost';
        break;
      case '503':
        this.error.heading = 'Something Broke';
        this.error.message = ['While we try to fix it, why not take a break and help a beast in need.', 'The only thing worse than an IOC is the neadless poaching of rhinos.'];
        this.error.background = 'url(\'break.jpg\')';
        this.error.title = 'Crash';
        break;
      case '429':
        this.error.heading = 'Slow down there speedster';
        this.error.message = ['You are so fast you exceeded our rate limit.', 'Although we think you are awesome, please try not to tap into the speed force on this site.'];
        this.error.background = 'url(\'flash.jpg\')';
        this.error.title = 'Back in a Flash';
        break;
      case '421':
          this.error.heading = 'This isn\'t your house';
          this.error.message = ['You seem to be trying to search for private address spaces', 'It\'s at this time you should take a good long look at yourself and decide if you yourself are the threat actor.'];
          this.error.background = 'url(\'private.jpg\')';
          this.error.title = 'Respect Privacy';
          break;
      case '404':
        this.error.heading = 'Woah, there this isn\'t right';
        this.error.message = ['You seem to be very lost... lost in space.', 'Be careful out there in space, there is no oxygen.'];
        this.error.background = 'url(\'space.png\')';
        this.error.title = 'Lost in Space';
        break;
      default:
        setTimeout(() => {
          this.router.navigate(['/error/404'], {replaceUrl: true});
        });
        this.error.code = '404';
        this.error.heading = 'Woah, there this isn\'t right';
        this.error.message = ['You seem to be very lost... lost in space.', 'Be careful out there in space, there is no oxygen.'];
        this.error.background = 'url(\'space.png\')';
        this.error.title = 'Lost in Space';
    }
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
    this.setTitle(this.error.title);
  }

}
