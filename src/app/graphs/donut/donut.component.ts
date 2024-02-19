import { Component, ElementRef, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})

export class DonutComponent implements OnInit {

  @Input() result!: {
    name: string,
    value:string
      }[]
       values:string[]=[]
       names:string[]=[]
  private svg: any;
  private margin = 50;
  private width = 400;
  private height = 400;
  private radius = Math.min(this.width, this.height) / 2 - this.margin;


  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

    this.createSvg();
    this.createDonutChart();
  }

  private createSvg(): void {
    this.svg = d3.select(this.elementRef.nativeElement)
      .select('svg')
      .append('g')
      .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');


  }

  private createDonutChart(): void {
    let data_ready: any[] = [];
    // const data = ["10", "20", "30","40","50"];
    console.log("list",this.result)
    if(this.result!=undefined){

      this.result.forEach(element => {
        this.values.push(element.value)
      });
      this.result.forEach(element => {
        this.names.push(element.name)
      });
      console.log("values",this.values)
      console.log("names",this.names)
      var color = d3.scaleOrdinal()
      .domain(this.values)
      .range(['#3A0751', '#F2C85B', '#D1193E', '#fb5607', '#3a86ff','#403d39']);
    }

    if(this.result!=undefined){
    const pie = d3.pie<any>()
      .value((d: any) => d)
      .sort(null);

     data_ready = pie(this.values);
    }
    const arc = d3.arc()
      .innerRadius(this.radius * 0.55)
      .outerRadius(this.radius * 0.7);

    // Draw arcs
    this.svg.selectAll('whatever')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d: any) => color(d.data))
      .attr('stroke', '#f0f0f0')
      .style('stroke-width', '0px')
      .style('opacity', 0.7)




   // Legend
const legend = this.svg.selectAll('.legend')
.data(this.result)
.enter().append('g')
.attr('class', 'legend')
.attr('transform', (d: any, i: any) => 'translate(-20,' + i * 20 + ')');

legend.append('rect')
.attr('x', this.width - 215)
.attr('width', 18)
.attr('height', 18)
.style('fill', (d: any) => color(d));

legend.append('text')
.attr('x', this.width - 128)
.attr('y', 9)
.attr('dy', '.35em')
.style('text-anchor', 'end')
.text((d: any) => d.name + ' \n ' + d.value);
}
}
