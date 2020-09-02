import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navigation', //Nombre con el que se llamará al componente como etiqueta: <app-navigation></app-navigation>
    templateUrl: './navigation.component.html', //Vista HTML que renderiza
    styleUrls: ['./navigation.component.css']   //Hoja(s) de estilo
})

export class NavigationComponent implements OnInit
{
    /* 
        Es buena práctica colocar siempre el OnInit para trabajar tareas más robustas, como solicitar datos de nuestra API,
        y dejar el constructor para tareas mas ligeras como inicializar los datos, ya que ngOnInit pertenece propiamente
        al Ciclo de Vida de Angular
    */

    constructor() {

    }

    ngOnInit(): void {

    }
}