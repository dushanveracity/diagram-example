import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import * as d3 from 'd3';
import { OrgChart } from 'd3-org-chart';

@Component({
  selector: 'app-diagram-three',
  templateUrl: './diagram-three.component.html',
  styleUrls: ['./diagram-three.component.css'],
})
export class DiagramThreeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Define your data (hierarchical structure)
    const data = {
      name: 'John Doe',
      children: [{ name: 'Jane Doe' }, { name: 'Jim Doe' }],
    };

    // Set up the chart configuration
    const config = {
      nodeWidth: 200,
      nodeHeight: 100,
    };

    // Create the organizational chart
    new OrgChart()
      .container('#chart')
      .data(data as any)
      .render();
  }
}
