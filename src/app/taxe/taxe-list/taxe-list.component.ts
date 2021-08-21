import { Component, OnInit } from '@angular/core';
import {TaxeService} from "../../controller/service/taxe.service";
import {Taxe} from "../../controller/model/taxe.model";

@Component({
  selector: 'app-taxe-list',
  templateUrl: './taxe-list.component.html',
  styleUrls: ['./taxe-list.component.css']
})
export class TaxeListComponent implements OnInit {
  constructor(private taxeService: TaxeService) { }

  get taxes(): Array<Taxe> {
    return this.taxeService.taxes;
  }

  ngOnInit(): void {
  }

}
