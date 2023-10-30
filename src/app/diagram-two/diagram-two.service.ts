import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiagramTwoService {

  components = [
    { id: 1, type: 'Solar Panel', name: 'Panel 1', parentId: null },
    { id: 2, type: 'Inverter', name: 'Inverter 1', parentId: 1 },
    { id: 3, type: 'Transformer', name: 'Transformer 1', parentId: 2 },
    { id: 4, type: 'Solar Panel', name: 'Panel 2', parentId: null },
    { id: 5, type: 'Inverter', name: 'Inverter 2', parentId: 4 },
    { id: 6, type: 'Transformer', name: 'Transformer 2', parentId: 5 },
  ];

  getComponents() {
    return this.components;
  }
}
