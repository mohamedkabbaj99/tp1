import { Component, OnInit } from '@angular/core';
import {TaxeService} from "../../controller/service/taxe.service";
import {Taxe} from "../../controller/model/taxe.model";

@Component({
  selector: 'app-taxe-create',
  templateUrl: './taxe-create.component.html',
  styleUrls: ['./taxe-create.component.css']
})
export class TaxeCreateComponent implements OnInit {

  constructor(private taxeService: TaxeService) { }
  get taxe(): Taxe {
    return this.taxeService.taxe;
  }


  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  save() {
    this.taxeService.save();
  }

}
