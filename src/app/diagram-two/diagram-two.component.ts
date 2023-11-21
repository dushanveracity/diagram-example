import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre'

cytoscape.use(dagre)

@Component({
  selector: 'app-diagram-two',
  template: '<div #diagramContainer style="height: 1000px; border: 1px solid #ccc;"></div>',
  styleUrls: ['./diagram-two.component.css'],
})
export class DiagramTwoComponent implements AfterViewInit {
  @ViewChild('diagramContainer') private diagramContainer!: ElementRef;

  ngAfterViewInit(): void {
    const cy = cytoscape({
      container: this.diagramContainer.nativeElement,
      elements: [
        { data: { id: 'solarPanel1', label: 'Solar Panel 1', type: 'Solar Panel', image: 'assets/images/solarpanel.png', tooltip: 'sample tooltip' }, grabbable: false },
        { data: { id: 'solarPanel2', label: 'Solar Panel 2', type: 'Solar Panel', image: 'assets/images/solarpanel.png' } },
        { data: { id: 'solarPanel3', label: 'Solar Panel 3', type: 'Solar Panel', image: 'assets/images/solarpanel.png' } },
        { data: { id: 'inverter1', label: 'Inverter 1', type: 'Inverter', image: 'assets/images/inverter.png' } },
        { data: { id: 'transformer1', label: 'Transformer 1', type: 'Transformer', image: 'assets/images/transformer.png' } },
        { data: { id: 'connection2', source: 'solarPanel2', target: 'inverter1' } },
        { data: { id: 'connection3', source: 'solarPanel3', target: 'inverter1' } },
        { data: { id: 'connection4', source: 'inverter1', target: 'transformer1' } },

        { data: { id: 'solarPanel4', label: 'Solar Panel 4', type: 'Solar Panel', image: 'assets/images/solarpanel.png' } },
        { data: { id: 'solarPanel5', label: 'Solar Panel 5', type: 'Solar Panel', image: 'assets/images/solarpanel.png' } },
        { data: { id: 'solarPanel6', label: 'Solar Panel 6', type: 'Solar Panel', image: 'assets/images/solarpanel.png' } },
        { data: { id: 'inverter2', label: 'Inverter 2', type: 'Inverter', image: 'assets/images/inverter.png' } },
        { data: { id: 'connection5', source: 'solarPanel4', target: 'inverter2' } },
        { data: { id: 'connection6', source: 'solarPanel5', target: 'inverter2' } },
        { data: { id: 'connection7', source: 'solarPanel6', target: 'inverter2' } },
        { data: { id: 'connection8', source: 'inverter2', target: 'transformer1' } }
      ],
      layout: { name: 'dagre' }, // Use the 'dagre' layout
      style: [
        {
          selector: 'node',
          style: {
            'background-color': 'lightblue',
            'label': 'data(label)',
            'font-size': '3px',
            'width': '10px',
            'height': '10px',
            'background-image': 'data(image)',
            'background-fit': 'cover'
          }
        },
        {
          selector: 'edge',
          style: {
            'line-color': 'black',
            'width': '0.5px',
            'target-arrow-color': '#555',
            'target-arrow-shape': 'none',
            'curve-style': 'taxi'
          }
        }
      ]
    });

    cy.on('mouseover', 'node, edge', (event) => {
      const element = event.target;
      if (element.isNode() || element.isEdge()) {
        const tooltip = element.data('tooltip');
        console.log(tooltip)
        // Show tooltip content
        // You can use a tooltip library or create a custom tooltip element to display the tooltip content
      }
    });
    
  }
  
  
}
