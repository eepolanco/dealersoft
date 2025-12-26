import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  ventasDiaData = {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    datasets: [
      {
        label: 'Ventas del Día',
        data: [12, 19, 7, 15, 10, 8, 14],
        backgroundColor: '#8b5cf6',
        borderRadius: 8
      }
    ]
  };

  ventasMesData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        label: 'Ventas del Mes',
        data: [120, 150, 180, 90, 200, 170, 210, 160, 140, 180, 190, 220],
        backgroundColor: '#5f28b3',
        borderRadius: 8
      }
    ]
  };

  stockData = {
    labels: ['En Stock', 'Vendido'],
    datasets: [
      {
        data: [35, 15],
        backgroundColor: ['#8b5cf6', '#ede9fe'],
        hoverBackgroundColor: ['#5f28b3', '#c4b5fd']
      }
    ]
  };

  ventasDiaOptions = {
    plugins: {
      legend: { display: false }
    },
    responsive: true,
    maintainAspectRatio: false
  };

  ventasMesOptions = {
    plugins: {
      legend: { display: false }
    },
    responsive: true,
    maintainAspectRatio: false
  };

  stockOptions = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#5f28b3' }
      }
    },
    responsive: true,
    maintainAspectRatio: false
  };
}
