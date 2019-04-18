import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SearchshareService } from '../searchshare.service';

@Component({
  selector: 'ioc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

 type: string;
 public fail = false;

 SearchHome = this.fb.group({
    search: ['', [Validators.pattern('(^(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)$)|(^(?:([^:/\\s]*)\\.)*((?:[^.:/\\s]+)+(?:\\.[^.:/\\d]+){1})(?:\\/.*)*$)'), Validators.required]]
 });

  constructor(private fb: FormBuilder, private router: Router, private titleService: Title, private searchTerm: SearchshareService) {
    this.titleService.setTitle( 'iocscan' );
    this.searchTerm.changeMessage('');
  }

  onSubmit() {
    if (this.SearchHome.valid) {
      console.log('Form Submitted!');
      this.router.navigate(['/search', this.type, this.SearchHome.value.search]);
    } else {
      this.fail = true;
    }
  }
  whatType() {
    const ipv4check = new  RegExp('^[\\d\\.]+$');
    const urlcheck = new  RegExp('\\.+');
    if (ipv4check.test(this.SearchHome.value.search)) {
      this.type = 'ip';
      return 'IP';
    } else if (urlcheck.test(this.SearchHome.value.search)) {
      this.type = 'domain';
      return 'Domain';
    } else {
      this.type =  '***';
      return '***';
    }
  }
  errorType() {
    if (this.type == 'ip') {
      return '..... Hmm, this isn\'t a valid IP';
    } else if (this.type == 'domain') {
      return '..... Hmm, this isn\'t a valid Domain';
         } else {
      return '..... Hmm, we are not sure what you are trying to say, but it is not a valid entry';
         }
  }

}
