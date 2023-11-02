import { Component } from '@angular/core';
interface movies_series {
  name: string;
  urlImg: string;
  point: number;
  description: string;
  category: string;
  }
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  selectedCategory: string = 'Todos';

  arrayInfoCards: movies_series[] = [
    {
      name: 'El Exorcista',
      urlImg: '../../../../assets/El Exorcista.jpg',
      point: 8.4,
      description: '',
      category: 'peliculas'
    },
    {
      name: 'Flash',
      urlImg: './../../../../assets/Flash.jpg',
      point: 5.6,
      description: '',
      category: 'peliculas'
    },
    {
      name: 'La cita de Carl',
      urlImg: '../../../../assets/La cita de Carl.jpg',
      point: 8.6,
      description: '',
      category: 'peliculas'
    },
    {
      name: 'Loki',
      urlImg: '../../../../assets/Loki.jpg',
      point: 9.7,
      description: '',
      category: 'Peliculas'
    },
    {
      name: 'Nowhere',
      urlImg: '../../../../assets/Nowhere.jpg',
      point: 8.3,
      description: '',
      category: 'series'
    },
    {
      name: 'SawVI',
      urlImg: '../../../../assets/SawVI.jpg',
      point: 7.6,
      description: '',
      category: 'series'
    },
    {
      name: 'Shrek2',
      urlImg: '../../../../assets/Shrek2.jpg',
      point: 9.4,
      description: '',
      category: 'Peliculas'
    },
    {
      name: 'Spiderman',
      urlImg: '../../../../assets/Spiderman.jpg',
      point: 9.8,
      description: '',
      category: 'Peliculas'
    }
  ];

  setSelectedCategory(category: string) {
    this.selectedCategory = category;
  }
}

