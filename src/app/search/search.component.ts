import { Component, OnInit } from '@angular/core';
import { IpinfoService } from '../ipinfo.service';
import { Location } from '@angular/common';
import { SearchshareService } from '../searchshare.service'
import { Title } from '@angular/platform-browser';
import { CountryCodeService } from '../country-code.service';
import { NgProgress, NgProgressRef } from '@ngx-progressbar/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faGlobeAmericas, faChartLine, faMapMarkerAlt, faMapSigns, faBuilding, faExclamationTriangle, faBug, faGlobe, faCalendarAlt, faNetworkWired, faFileInvoice, faExclamation, faGhost } from '@fortawesome/free-solid-svg-icons';
import { faKeycdn } from '@fortawesome/free-brands-svg-icons';
import {timer} from 'rxjs';
import {take} from 'rxjs/operators';  



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
    faCalendarAlt = faCalendarAlt;
    faNetworkWired = faNetworkWired;
    faFileInvoice = faFileInvoice;
    faExclamation = faExclamation;
    faGhost = faGhost;
    thresholdConfig = {
        '0': {color: 'green'},
        '3': {color: 'yellow'},
        '5': {color: 'orange'},
        '8': {color: 'red'}
    };
  type: string;
  loading: string;
  search_term: string;
  progressBar: NgProgressRef;
  header: NgProgressRef;
  quantity_blacklist: number = 4;
  quantity_malware: number = 4;
  quantity_url: number = 4;
  quantity_ip: number = 4;
  public ip: string;
  public domain: string;
  public score: number = 0;
  public isLoaded: boolean = false;
  public confidence: any = {score: '0', issues:0};
  bg: string = "bg-info";
  border: string = "border-info";

  result: any = [];

  constructor(private ipinfoService: IpinfoService,  private countryCode: CountryCodeService, ngProgress: NgProgress, private route: ActivatedRoute, private router: Router, private titleService: Title, private searchTerm: SearchshareService, private location: Location ) {
        this.router.routeReuseStrategy.shouldReuseRoute = function() {
            return false;
        };
      this.ip = this.route.snapshot.paramMap.get('ip')
      this.domain = this.route.snapshot.paramMap.get('domain')
      if (this.ip){
          let checker = new RegExp('^((([1-9]|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.)((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.)((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.)((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])))$')
          if (!checker.test(this.ip)){
            this.router.navigate(['/error/418'], {replaceUrl:true});
          }
          else{
            this.titleService.setTitle( "scanning..." );
            this.type = 'ip'
            this.search_term = this.ip;
          }
      }
      else if (this.domain){
          let checker = new RegExp('(^(?:([^:/\\s]*)\\.)*((?:[^.:/\\s]+)+(?:\\.[^.:/\\d]+){1})(?:\\/.*)*$)')
          if (!checker.test(this.domain))
            this.router.navigate(['/error/418'], {replaceUrl:true});
          else{
            this.titleService.setTitle( "scanning..." );
            this.type = 'domain'
            this.search_term = this.domain;
          }
      }
      // Get an instance of NgProgressRef
      this.progressBar = ngProgress.ref();
      this.header = ngProgress.ref("header");
      // // Get progress bar events (optional)
      this.progressBar.started.subscribe(() => this.header.start());
      this.progressBar.completed.subscribe(() => {this.header.complete();});
  }
  ngOnInit() {
     this.isLoaded = false;
     timer(500,2000).pipe(
        take(7)).subscribe(x=>{
        if (x == 0)
            this.loading = "......Searching WHOIS Database......";
        if (x == 1)
            this.loading = "......Scanning Blacklists......";
        if (x == 2)
            this.loading = "......Scanning Blacklists......";
        if (x == 3)
            this.loading = "......Looking up GeoLocation......";
        if (x == 4)
            this.loading = "......Identifying Potential Botnets......";
        if (x == 5)
            this.loading = "......Looking for Adware......";
        if (x == 6)
            this.loading = "......Calculating Threat Level......";
    })
     this.ipinfoService.getData(this.search_term, this.type).subscribe(results => {
       this.result = results;
       this.titleService.setTitle( this.result[this.type] );
       this.searchTerm.changeMessage(this.result[this.type])
       let url = 'search/'+this.type+'/'+this.result[this.type];
       this.location.replaceState(url)
       console.log(this.result);
       this.score = this.result.score.score;
       this.confidence.score = (((this.result.score.confidence)+5)*20).toString();
       if (this.result.c2 && this.result.c2.feed){
            let c2 = new RegExp('Master Indicator Feed for (\\w*)');
            let c2_name = c2.exec(this.result.c2.feed)
            this.result.c2.name =  c2_name[1].charAt(0).toUpperCase() + c2_name[1].slice(1);
       }
       if(this.result.whois)
           this.result.whois.length = Object.keys(this.result.whois).length
       if(!this.result.location || !this.result.location.lon || !this.result.location.lat)
           this.result.location = {lat:false,lon:false}
       if(!this.result.blacklist)
            this.result.blacklist = []
       if(!this.result.malware.count && this.result.malware != 'FA')
            this.result.malware.count = 0;
       if(!this.result.url.count  && this.result.url != 'FA')
            this.result.url.count = 0;
       if(!this.result.ip.count  && this.result.ip != 'FA' && typeof this.result.ip === 'object')
            this.result.ip.count = 0;
       if (this.result.malware && this.result.malware.count < this.quantity_malware)
            this.quantity_malware = this.result.malware.count
       if (this.result.blacklist && this.result.blacklist.count < this.quantity_blacklist)
            this.quantity_blacklist = this.result.blacklist.count
       if (this.result.url && this.result.url.count < this.quantity_url)
            this.quantity_url = this.result.url.count
       if (this.result.ip && this.result.ip.count < this.quantity_ip)
            this.quantity_ip = this.result.ip.count
       if (this.result.asn_country_code )
            this.result.asn_country = this.countryCode.getCountryName(this.result.asn_country_code)
       if (this.result.whois && this.result.whois.country )
            this.result.whois.country_full = this.countryCode.getCountryName(this.result.whois.country)
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

     },
     error => {
         console.log('oops', error);
         console.log(error.status)
         if (error.status == 429)
            setTimeout(()=>{
                this.router.navigate(['/error/429'], {replaceUrl:true});
            });
         else if (error.status == 404)
            setTimeout(()=>{
                this.router.navigate(['/error/404'], {replaceUrl:true});
            });
         else if (error.status == 421)
            setTimeout(()=>{
                this.router.navigate(['/error/421'], {replaceUrl:true});
            });
         else if (error.status == 403)
            setTimeout(()=>{
                this.router.navigate(['/error/403'], {replaceUrl:true});
            });
         else
            setTimeout(()=>{
                this.router.navigate(['/error/503'], {replaceUrl:true});
            });

     }
    );

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
  ipQuantity(){
      if(this.quantity_ip == 4){
          this.quantity_ip = Math.min(10, this.result.ip.count);
      }
      else if(this.quantity_ip > 4){
          this.quantity_ip = 4;
      }
  }

}
