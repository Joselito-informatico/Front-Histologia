import { Component,OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ApiService } from '../services/api.service';
import { Muestra } from '../services/tejidos.mock';
import { ActivatedRoute } from '@angular/router';
//rJyCTPO03OikwN4xc9ViIaAJWX7H/d5PTsAZAZJ0N9Om3TIBgO8ijXlrhmodc0MhKtZVPE/MZv8fz0UYVIaBkwTjpDxu8XMHXb/pYta6R+plb1JzV55vYf3RhfWuC375Zd0VUqlg6N+9vInMX+2ym0zQ7ZDim8pzSAqEP+MzNYfLMAnU86Za0DPadTecvKZU
@Component({
  selector: 'app-tejido',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tejido.component.html',
  styleUrl: './tejido.component.css'
})
export class TejidoComponent implements OnInit {
  tejidosArray: Muestra[] = [];
  imagenSeleccionada: { image: string } | undefined;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.getTejido(parseInt(id, 10));
      }
    });
  }

  getTejido(id: number): void {
    this.api.getTejido(id).subscribe({
      next: (tejido: Muestra) => {
        this.tejidosArray.push(tejido);
        // Establecer la primera captura como imagen seleccionada por defecto
        if (tejido.capturas.length > 0 && !this.imagenSeleccionada) {
          this.imagenSeleccionada = tejido.capturas[0];
        }
      },
      error: err => {
        console.error('Error al obtener el tejido:', err);
      }
    });
  }

  seleccionarImagen(captura: { image: string }): void {
    this.imagenSeleccionada = captura;
  }

  selectCategory(arg0: string) {
    // Implementa la lógica para seleccionar categorías (notas, sistemas, etc.)
  }
}