import { Component, ElementRef, OnInit } from '@angular/core';
import { TejidosService } from '../services/tejidos.service';
import { ITejido } from '../services/tejidos.mock';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {
  listaTejidos_all: ITejido[] = [];
  listaTejidos_show: ITejido[] = [];
//rJyCTPO03OikwN4xc9ViIaAJWX7H/d5PTsAZAZJ0N9Om3TIBgO8ijXlrhmodc0MhKtZVPE/MZv8fz0UYVIaBkwTjpDxu8XMHXb/pYta6R+plb1JzV55vYf3RhfWuC375Zd0VUqlg6N+9vInMX+2ym0zQ7ZDim8pzSAqEP+MzNYfLMAnU86Za0DPadTecvKZU
constructor(private tejidoService: TejidosService) {}

  ngOnInit(): void {
    this.listaTejidos_all = this.tejidoService.getTejidos();
    this.selectCategory('')
  }

  selectCategory(category: string) {
    this.listaTejidos_show = this.listaTejidos_all.filter(tejido => tejido.category.includes(category))
  }

  drawPoint(event: MouseEvent){
    console.log(event.offsetX, event.offsetY)
  }

}
