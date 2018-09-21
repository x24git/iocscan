import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'ioc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public isNavbarCollapsed = false;
  popover: any;
  IPSearchNav = this.fb.group({
      ip: ['', Validators.pattern('^((([1-9]|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.)((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.)((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.)((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])))$')]
   })



  constructor(private fb: FormBuilder, private router: Router) {

  }

  onSubmit(popover) {
    if (this.IPSearchNav.valid) {
      console.log("Form Submitted!");
      this.router.navigate(['/search', this.IPSearchNav.value.ip]);
    }
    else{
      popover.show();
    }
  }
}
