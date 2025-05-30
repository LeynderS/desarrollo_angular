import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  titulo: string = 'Champions League 2025 - Estadísticas';

  equipos = [
    { equipo: 'Liverpool', ganados: 7, perdidos: 1 },
    { equipo: 'FC Barcelona', ganados: 6, perdidos: 1 },
    { equipo: 'Arsenal', ganados: 6, perdidos: 1 },
    { equipo: 'Inter de Milán', ganados: 6, perdidos: 1 }
  ];
}
