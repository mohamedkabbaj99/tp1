import { Injectable } from '@angular/core';
import {Taxe} from '../model/taxe.model';
import {Commande} from '../model/commande.model';


@Injectable({
  providedIn: 'root'
})
export class TaxeService {
  // tslint:disable-next-line:variable-name
  private _taxe: Taxe;
  // tslint:disable-next-line:variable-name
  private _taxes: Array<Taxe>;


  constructor() { }

  // tslint:disable-next-line:typedef
  public save(){
    this.taxes.push(this.clone(this.taxe));
    this.taxe = null;
  }

  // tslint:disable-next-line:typedef
  private clone(taxe: Taxe) {
    const myclone = new Taxe();
    myclone.rib = taxe.rib;
    myclone.solde = taxe.solde;
    return myclone;
  }

  get taxe(): Taxe {
    if (this._taxe == null){
      this._taxe = new Taxe();
    }
    return this._taxe;
  }

  set taxe(value: Taxe) {
    this._taxe = value;
  }

  get taxes(): Array<Taxe> {
    if (this._taxes == null){
      this._taxes = new Array<Taxe>();
    }
    return this._taxes;
  }

  set taxes(value: Array<Taxe>) {
    this._taxes = value;
  }
}
