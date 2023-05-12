import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
constructor(private route: ActivatedRoute){}

ngOnInit(){
  this.route.params.subscribe(params =>{
    console.log(params['termino']);
  })
}
}