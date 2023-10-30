import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-circuit-diagram',
  templateUrl: './circuit-diagram.component.html',
  styleUrls: ['./circuit-diagram.component.css']
})
export class CircuitDiagramComponent implements OnInit {
  @ViewChild('circuitContainer', { static: true }) circuitContainer!: ElementRef;

  private svg: any;

  constructor() { }

  ngOnInit() {
    this.svg = d3.select(this.circuitContainer.nativeElement)
      .append('svg')
      .attr('width', 500)
      .attr('height', 300);

    const rect1 = this.drawRectangle(50, 50, 100, 50);
    const rect2 = this.drawRectangle(200, 50, 100, 50);
    this.connectRectangles(rect1, rect2);
  }

  drawRectangle(x: number, y: number, width: number, height: number) {
    return this.svg.append('rect')
      .attr('x', x)
      .attr('y', y)
      .attr('width', width)
      .attr('height', height)
      .attr('fill', 'lightgray');
  }

  connectRectangles(rect1: any, rect2: any) {
    const rect1Coords = {
      x: parseFloat(rect1.attr('x')),
      y: parseFloat(rect1.attr('y')),
      width: parseFloat(rect1.attr('width')),
      height: parseFloat(rect1.attr('height'))
    };

    const rect2Coords = {
      x: parseFloat(rect2.attr('x')),
      y: parseFloat(rect2.attr('y')),
      width: parseFloat(rect2.attr('width')),
      height: parseFloat(rect2.attr('height'))
    };

    const startPoint = {
      x: rect1Coords.x + rect1Coords.width / 2,
      y: rect1Coords.y + rect1Coords.height / 2
    };

    const endPoint = {
      x: rect2Coords.x + rect2Coords.width / 2,
      y: rect2Coords.y + rect2Coords.height / 2
    };

    this.svg.append('line')
      .attr('x1', startPoint.x)
      .attr('y1', startPoint.y)
      .attr('x2', endPoint.x)
      .attr('y2', endPoint.y)
      .attr('stroke', 'black')
      .attr('stroke-width', 2);
  }
}
