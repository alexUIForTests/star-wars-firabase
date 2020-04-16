import {Component, OnInit, ViewChild} from '@angular/core';
import {FirebaseApiService} from '../../services/firebase-api.service';
import {CharacterModel} from '../../crud/model/character.model';
import {MatTableDataSource} from '@angular/material';
import {element} from 'protractor';
import {CellClickedEvent, ColumnResizedEvent, GridApi, GridOptions, Module} from 'ag-grid-community';
import {HttpClient} from '@angular/common/http';
import {AgGridAngular} from 'ag-grid-angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  columnDefs = [
    {headerName: 'Movies', field: 'movies', sortable: true, filter: true},
    {headerName: 'Name', field: 'name', sortable: true, filter: true},
    {headerName: 'spaceships', field: 'spaceships', sortable: true, filter: true},
    {headerName: 'species', field: 'species', sortable: true, filter: true},
  ];

  character: any;
  gridOptions: GridOptions = {
    enableColResize: true,
    pagination: false,
    rowHeight: 36,
    headerHeight: 30,
    minColWidth: 100,
    animateRows: true,
    rowData: [],
    suppressRowClickSelection: true,
    suppressDragLeaveHidesColumns: true,
    suppressRowDrag: true,
    suppressMovableColumns: true,
    suppressPropertyNamesCheck: true,
    suppressContextMenu: true,
    onCellClicked: (event: CellClickedEvent) => this.getPersonalInfo(event),

  };
  isInfo = false;
  characterInput: CharacterModel;
  constructor(private  firebaseApiService: FirebaseApiService) {

  }

  ngOnInit() {
    this.firebaseApiService.get().subscribe(res => {
      this.character = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as CharacterModel;
      });
      this.gridOptions.api.setRowData(this.character);

    });
  }

  getPersonalInfo(params) {
    this.isInfo = true;
    this.characterInput = params.data;
  }


}
