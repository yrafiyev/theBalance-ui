import { Component, OnInit, Input, SimpleChanges} from '@angular/core';
import {Chart} from 'chart.js'
import {customUserData} from '../data.model';
import * as _ from 'underscore';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {


  @Input() set userInput(value: customUserData) {
    if(this.chart!=null){
      this.chart.data.labels.push(value.date);
      this.chart.data.datasets[0].data.push(value.price);
      this.chart.update();
    }
  };
  

  @Input() data: customUserData[];

  chart: Chart = null;

  constructor() { }

  ngOnInit() {
    //Load the charts library with a callback
    this.createChart();
  }

  /**
  *   When data changes change dates and prices
  **/

  ngOnChanges(changes: SimpleChanges){
     this.createChart();
  }

  getDatesFromData(){
    return _.map(this.data, function(element){
      return element.date;
    });
  }

  getPricesFromData(){
    return _.map(this.data, function(element){
      return element.price;
    });
  }

  createChart(){
        var ctx = (<HTMLCanvasElement> $("#myChart")[0]).getContext('2d');
        this.chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: this.getDatesFromData(),
            datasets: [{
                label: "Budget Chart",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: this.getPricesFromData(),
            }]
        },

        // Configuration options go here
        options: {
            scales: {
                xAxes: [{
                    type: 'time',
                    distribution: 'series',
                    time: {
                        displayFormats: {
                            quarter: 'MMM D'
                        }
                    }
                }]
            }
        }
      });
  }

}
