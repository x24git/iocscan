import { Component, OnInit } from '@angular/core';
import { IpinfoService } from '../ipinfo.service';
import { Title } from '@angular/platform-browser';
import { CountryCodeService } from '../country-code.service';
import { NgProgress, NgProgressRef } from '@ngx-progressbar/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faGlobeAmericas, faChartLine, faMapMarkerAlt, faMapSigns, faBuilding, faExclamationTriangle, faBug, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faKeycdn } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    faGlobeAmericas = faGlobeAmericas;
    faChartLine = faChartLine;
    faMapMarkerAlt = faMapMarkerAlt;
    faMapSigns = faMapSigns;
    faBuilding = faBuilding;
    faExclamationTriangle = faExclamationTriangle;
    faBug = faBug;
    faGlobe = faGlobe;
    faKeycdn =faKeycdn;
    thresholdConfig = {
        '0': {color: 'green'},
        '2': {color: 'yellow'},
        '6': {color: 'orange'},
        '8': {color: 'red'}
    }; 
 
  progressBar: NgProgressRef;
  header: NgProgressRef;
  quantity_blacklist: number = 4;
  quantity_malware: number = 4;
  quantity_url: number = 4;
  public ip: string;
  public score: number = 0;
  public isLoaded: boolean = false;
  public confidence: any = {score: '0', issues:0};
  bg: string = "bg-info";
  border: string = "border-info";
  
  result: any = [];
  
  constructor(private ipinfoService: IpinfoService,  private countryCode: CountryCodeService, ngProgress: NgProgress, private route: ActivatedRoute, private router: Router, private titleService: Title ) {
        this.router.routeReuseStrategy.shouldReuseRoute = function() {
            return false;
        };
      this.ip = this.route.snapshot.paramMap.get('ip')
      let checker = new RegExp('^((([1-9]|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.)(([1-9]|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.)(([1-9]|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.)(([1-9]|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])))$')
      if (!checker.test(this.ip))
        this.router.navigate(['/error/418']);
      else
        this.titleService.setTitle( this.ip );
       // Get an instance of NgProgressRef
      this.progressBar = ngProgress.ref();
      this.header = ngProgress.ref("header");
      // // Get progress bar events (optional)
      this.progressBar.started.subscribe(() => this.header.start());
      this.progressBar.completed.subscribe(() => {this.header.complete();});
  }
  ngOnInit() {
     this.isLoaded = false;
     this.ipinfoService.getData(this.ip).subscribe(results => {
       this.result = results;
       console.log(this.result);
       this.score = this.result.score.score;
       this.confidence.score = (((this.result.score.confidence)+5)*20).toString();
       if (this.result.c2 && this.result.c2.feed){
            let c2 = new RegExp('Master Indicator Feed for (\\w*)');
            let c2_name = c2.exec(this.result.c2.feed)
            this.result.c2.name =  c2_name[1].charAt(0).toUpperCase() + c2_name[1].slice(1);
       }
       if(!this.result.blacklist)
            this.result.blacklist = []
       if(!this.result.malware.count)
            this.result.malware.count = 0;
       if(!this.result.url.count)
            this.result.url.count = 0;
       if (this.result.malware && this.result.malware.count < this.quantity_malware)
            this.quantity_malware = this.result.malware.count
       if (this.result.blacklist && this.result.blacklist.count < this.quantity_blacklist)
            this.quantity_blacklist = this.result.blacklist.count
       if (this.result.url && this.result.url.count < this.quantity_url)
            this.quantity_url = this.result.url.count
       if (this.result.asn_country_code )
            this.result.asn_country = this.countryCode.getCountryName(this.result.asn_country_code)
       if (!this.result.category)
            this.result.category = {category:["nothing"]};
       else{
            this.confidence.malware = (this.result.category.category.includes("Malware")) ? true : false;
            this.confidence.adware = (this.result.category.category.includes("Adware")) ? true : false;
            this.confidence.exploit = (this.result.category.category.includes("Browser Exploit")) ? true : false;
            this.confidence.hyjack = (this.result.category.category.includes("System Hyjacking")) ? true : false;
            this.confidence.phishing = (this.result.category.category.includes("Phishing")) ? true : false;
            this.confidence.tor = (this.result.category.category.includes("TOR exit node")) ? true : false;
       }    
       if(this.result.score.old || !this.result.score.trend || this.result.score.limitedData || this.result.category.category.length > 1){
           this.confidence.isReduced = true;
           if (this.result.score.old){
                this.confidence.old = true;
                this.confidence.issues ++;
           }
           if (!this.result.score.trend){
                this.confidence.trend = true;
                this.confidence.issues ++;
           }
           if (this.result.score.limitedData){
                this.confidence.data = true;
                this.confidence.issues ++;
           }
           if (this.result.category.category.length > 1){
                this.confidence.category = true;
                this.confidence.issues ++;
           }
       }
       if(this.confidence.score < 95 && !this.confidence.isReduced){
            this.confidence.isReduced = true;
            this.confidence.country = true;
            this.confidence.issues = 1;
       }
       if(this.confidence.score > 95){
            this.confidence.isReduced = false;
            this.confidence.country = true;
            this.confidence.issues = 0;
       }
       if (this.score > 6){
           this.bg = "bg-warning"
           this.border = "border-warning"
       }
       if (this.score > 8){
           this.bg = "bg-danger"
           this.border = "border-danger"
       }
       this.isLoaded = true;
       
     });
    
  }
  blacklistQuantity(){
      if(this.quantity_blacklist == 4){
          this.quantity_blacklist = Math.min(10, this.result.blacklist.length);
      }
      else if(this.quantity_blacklist > 4){
          this.quantity_blacklist = 4;
      }
  }
  malwareQuantity(){
      if(this.quantity_malware == 4){
          this.quantity_malware = Math.min(10, this.result.malware.count);
      }
      else if(this.quantity_malware > 4){
          this.quantity_malware = 4;
      }
  }
  urlQuantity(){
      if(this.quantity_url == 4){
          this.quantity_url = Math.min(10, this.result.url.count);
      }
      else if(this.quantity_url > 4){
          this.quantity_url = 4;
      }
  }

}
