import { Component, OnInit } from '@angular/core';
import {CommandeService} from '../../controller/service/commande.service';
import {Commande} from '../../controller/model/commande.model';

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {

  // tslint:disable-next-line:typedef
  public delete(index: number){
    // @ts-ignore
    this.commandes.splice(index, 1);
  }

  // tslint:disable-next-line:typedef
  public update(index: number, commande: Commande){
    this.commandeService.update(index, commande);
  }

  constructor(private commandeService: CommandeService) { }



  get commandes(): Array<Commande> {


    return this.commandeService.commandes;
  }


  ngOnInit(): void {
    this.commandeService.init();
  }

}
