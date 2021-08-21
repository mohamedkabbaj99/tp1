import { Component, OnInit } from '@angular/core';
import {CommandeService} from '../../controller/service/commande.service';
import {Commande} from '../../controller/model/commande.model';

@Component({
  selector: 'app-commande-create',
  templateUrl: './commande-create.component.html',
  styleUrls: ['./commande-create.component.css']
})
export class CommandeCreateComponent implements OnInit {

  constructor(private commandeService: CommandeService) { }

  // tslint:disable-next-line:typedef
  public save(){
    this.commandeService.save();
  }

  get commande(): Commande {

    return this.commandeService.commande;
  }

  ngOnInit(): void {
  }

}
