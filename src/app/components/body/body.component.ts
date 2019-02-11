import { Component } from "@angular/core";

@Component({
    selector : 'app-body',
    templateUrl : './body.component.html'
})
export class BodyComponent{
    show_hide_var:boolean;
    x_men:any[];
    frase:any;

    constructor(){
        this.frase = {
            message : 'Un gran poder requiere una gran responsabilidad',
            author : 'Ben Parker'
        }
        this.show_hide_var = true;
        this.x_men = [
            'Wolverine',
            'Magneto',
            'Gambito',
            'Ciclope',
            'Charles Xavier'
        ]
    }
    show_hide(){
        this.show_hide_var = !this.show_hide_var;
    }
}