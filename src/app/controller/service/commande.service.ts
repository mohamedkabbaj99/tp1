import { Injectable } from '@angular/core';
import {Commande} from '../model/commande.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  // tslint:disable-next-line:variable-name
  private _commande: Commande;
  // tslint:disable-next-line:variable-name
  private _commandes: Array<Commande>;

  // tslint:disable-next-line:variable-name
  private _index: number;

  // tslint:disable-next-line:typedef
  public init(){
    // tslint:disable-next-line:variable-name
    for (let _i = 1; _i <= 4; _i++){
      const myCommande = new Commande();
      myCommande.id = _i;
      myCommande.ref = 'c_' + _i;
      myCommande.total = 100 * _i;
      myCommande.totalPaye = 20 * _i;
      this.commandes.push(myCommande);
    }
  }

  // tslint:disable-next-line:typedef
  public save(){
    if (this.commande.id == null){
      this.commande.id = this.commandes.length + 1;
      this.commandes.push(this.clone(this.commande));
    }else{
    this.commandes[this._index] = this.clone(this.commande);
    }

    this.commande = null;
  }

  constructor() { }


  get commande(): Commande {
    if (this._commande == null){
      this._commande = new Commande();
    }
    return this._commande;
  }

  set commande(value: Commande) {
    this._commande = value;
  }

  get commandes(): Array<Commande> {
    if (this._commandes == null){
      this._commandes = new Array<Commande>();
    }
    return this._commandes;
  }

  set commandes(value: Array<Commande>) {
    this._commandes = value;
  }

  // tslint:disable-next-line:typedef
  private clone(commande: Commande) {
    const myclone = new Commande();
    myclone.id = commande.id;
    myclone.ref = commande.ref;
    myclone.total = commande.total;
    myclone.totalPaye = commande.totalPaye;
    return myclone;
  }

  // tslint:disable-next-line:typedef
  public update(index: number, commande: Commande) {
    this.commande = this.clone(commande);
    this._index = index;
  }



}
