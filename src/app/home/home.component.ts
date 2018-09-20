import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ioc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  
 IPSearchForm = this.fb.group({
    ip: ['', Validators.pattern('^((([1-9]|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.)(([1-9]|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.)(([1-9]|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.)(([1-9]|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])))$')]
 })

constructor(private fb: FormBuilder, private router: Router, private titleService: Title) { 
  this.titleService.setTitle( "iocscan" );
}

onSubmit() {
  if (this.IPSearchForm.valid) {
    console.log("Form Submitted!");
    this.router.navigate(['/search', this.IPSearchForm.value.ip]);
    
  }
}

}
