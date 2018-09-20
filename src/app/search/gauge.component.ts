import { Component, Input  } from '@angular/core';
 
@Component({
    selector: 'gauge-component',
    templateUrl: './gauge.component.html',
})


export class GaugeComponent {
    @Input() score: number;
    @Input() confidence: any ;
    
    gaugeType = "arch";
    ts_gaugeLabel = "Threat Score";
    ts_gaugeMax = "10";
    ts_gaugeThick = 20;
    conf_gaugeLabel = "Confidence";
    conf_gaugeMax = "100";
    conf_gaugeThick = 10;
    gaugeAppend = "%";
    gaugeCap = "round";
    ts_gaugeSize = 300;
    conf_gaugeSize = 200;
    gaugeDuration = 2250;

    
    
    

    thresholdConfig = {
        '0': {color: 'green'},
        '2': {color: 'yellow'},
        '6': {color: 'orange'},
        '8': {color: 'red'}
    }; 
    conf_thresholdConfig = {
        '0': {color: 'red'},
        '60': {color: 'darkturquoise'}
    }; 

}
 