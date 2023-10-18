import { Component, Output, EventEmitter } from '@angular/core';
import { CountryService } from '../../country.service';


@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent {
  countries: any[] = [];

  @Output() paisClickeado: EventEmitter<any> = new EventEmitter<any>();

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
    });
  }

  onPaisClick(pais: any) {
    this.paisClickeado.emit(pais);
  }
}
