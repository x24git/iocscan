import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchshareService } from '../searchshare.service'


@Component({
  selector: 'ioc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  old_val: string = '';
  type: string;
  public isNavbarCollapsed = false;
  popover: any;
  public fail: boolean = false;
  SearchNav = this.fb.group({
    search: ['', [Validators.pattern('(^(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)$)|(^(?:([^:/\\s]*)\\.)*((?:[^.:/\\s]+)+(?:\\.[^.:/\\d]+){1})(?:\\/.*)*$)'), Validators.required]]
 })


  constructor(private fb: FormBuilder, private router: Router, private searchTerm: SearchshareService) {

  }

  ngOnInit() {
    this.searchTerm.currentSearch.subscribe(term => this.SearchNav.patchValue({search: term}));
  }
  
  onSubmit(popover) {
    if (this.SearchNav.valid) {
      console.log("Form Submitted!");
      popover.hide();
      this.fail = false;
      this.router.navigate(['/search',this.type, this.SearchNav.value.search]);
    }
    else{
      popover.show();
      this.fail = true;
    }
  }
   whatType(popover) {
    if (this.SearchNav.value.search != this.old_val && this.fail){
      this.old_val = this.SearchNav.value.search;
      if (this.SearchNav.invalid){
        popover.show();
      }
      else if (!this.SearchNav.invalid){
        popover.hide();
      }
    } 
    let ipv4check = new  RegExp('^[\\d\\.]+$');
    let urlcheck = new  RegExp('\\.+');
    if (ipv4check.test(this.SearchNav.value.search)){
      this.type = 'ip';
      return 'IP';
    }
    else if (urlcheck.test(this.SearchNav.value.search)){
      this.type = 'domain';
      return 'Domain';
    }
    else{
      this.type =  '***'
      return '***';
    }
  }
  errorType() {
    if(this.type == 'ip')
      return "This is not a valid IP";
    else if(this.type == 'domain')
      return "This is not a valid Domain";
    else
      return 'This is not valid Data';
  }
}
