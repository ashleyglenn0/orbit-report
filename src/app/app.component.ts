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
  
  window.fetch(satellitesUrl).then(function(response){
    response.json().then(function(data){
      let fetchedSatellites = data.satellites;
      //Loop over satellites
      for(let i = 0; i < satellitesUrl.length; i++){
        
      }
      // Create new Satellite object using new Satellite
       let newSatellite = { 

       }


      // add new Satellite object to sourceList using: this.sourceList.push(satellite);
       
    }.bind(this));
  }.bind(this));
  
  
  }
}

