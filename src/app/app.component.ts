import { Satellite } from './satellite';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satellitesUrl).then(function (response) {
      response.json().then(function (data) {
        let fetchedSatellites: Satellite[] = data.satellites;

        //Loop over satellites
        for (let i = 0; i < fetchedSatellites.length; i++) {
          // Create new Satellite object using new Satellite
          const satellite = new Satellite(fetchedSatellites[i].name,
            fetchedSatellites[i].type,
            fetchedSatellites[i].launchDate,
            fetchedSatellites[i].orbitType,
            fetchedSatellites[i].operational);
          // add new Satellite object to sourceList using: this.sourceList.push(satellite);
          this.sourceList.push(satellite);
          let newSatellite = (satellite.name,
            satellite.type,
            satellite.launchDate,
            satellite.orbitType,
            satellite.operational);  
         }
       

      }.bind(this));
    }.bind(this));


  }
}

