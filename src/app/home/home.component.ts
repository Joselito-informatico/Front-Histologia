import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Tejido, Categorias } from '../services/tejidos.mock';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaTejidos_all: Tejido[] = [];
  listaTejidos_show: Tejido[] = [];
  listaCategorias: Categorias[] = [];
  sistemasUnicos: string[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getCategorias().subscribe({
      next: (categorias: Categorias[]) => {
        this.listaCategorias = categorias;
        console.log('Categorías obtenidas:', this.listaCategorias);
      },
      error: err => {
        console.error('Error al obtener categorías:', err);
      }
    });

    this.api.getTejidos('all').subscribe({
      next: (tejidos: Tejido[]) => {
        this.listaTejidos_all = tejidos;
        this.listaTejidos_show = tejidos;
        console.log('Tejidos obtenidos:', this.listaTejidos_all);
        this.obtenerSistemasUnicos();
      },
      error: err => {
        console.error('Error al obtener todos los tejidos:', err);
      }
    });
  }

  selectCategory(category: string) {
    console.log('Categoría seleccionada:', category);
    if (category === 'all') {
      this.listaTejidos_show = this.listaTejidos_all;
    } else {
      this.api.getTejidos(category).subscribe({
        next: (tejidos: Tejido[]) => {
          this.listaTejidos_show = tejidos;
          console.log('Tejidos filtrados:', this.listaTejidos_show);
          this.obtenerSistemasUnicos();
        },
        error: err => {
          console.error('Error al obtener tejidos por categoría:', err);
        }
      });
    }
    this.obtenerSistemasUnicos();
  }

  obtenerSistemasUnicos() {
    const sistemasSet = new Set<string>();
    this.listaTejidos_show.forEach(tejido => {
      if (tejido.sistema) {
        sistemasSet.add(tejido.sistema);
      }
    });
    this.sistemasUnicos = Array.from(sistemasSet);
    console.log('Sistemas únicos:', this.sistemasUnicos);
  }

  drawPoint(event: MouseEvent) {
    console.log(event.offsetX, event.offsetY);
  }

  getMuestrasPorSistema(sistema: string): Tejido[] {
    return this.listaTejidos_show.filter(muestra => muestra.sistema === sistema);
  }

  getMuestrasSinSistema(): Tejido[] {
    return this.listaTejidos_show.filter(muestra => !muestra.sistema);
  }
}
