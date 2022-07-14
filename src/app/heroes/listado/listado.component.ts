import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman','Ironman', 'Hulk','Thor'];
  heroeborrado : string = "";

  BorrarHeroe(): void{
    console.log('borrando....');
    
    this.heroeborrado = this.heroes.pop() || "";
  }

}
// export class ListadoComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

// }
