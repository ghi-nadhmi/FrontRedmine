import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LayoutService } from '@app/shared/services/layout.service';
import { TranslateService } from '@ngx-translate/core';
 
import { SelectionModel } from "@angular/cdk/collections";
import { ConfigService } from '@app/shared/services/config.service';
 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener } from "@angular/material/tree";
import { MatTreeFlatDataSource } from "@angular/material/tree";
import { TAdmRetour } from '@app/shared/entites/administration/TAdmRetour';

 
import { MatTableDataSource } from '@angular/material/table';
import { CommonService, SearchObject, SearchObjectTreatment, } from '@app/shared';
import { AdmFoncTree } from '@app/shared/entites/administration/AdmFoncTree ';

import { AdmProfileService } from '@app/shared/services/administration/admProfile.service';
import { TAdmProfile } from '@app/shared/entites/administration/TAdmProfile';
import { TAdmApplication } from '@app/shared/entites/administration/TAdmApplication';

export class ExampleFlatNode {

  expandable: boolean;
  nameAr: string;
  nameFr: string;
  codeFonc: string;
  id: number;
  idParent: string;
  level: number;
  readOnly: number;
  fEdit: number;
}

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.scss']
})
export class EditProfilComponent implements OnInit {
  currentLang: any;
  profil: TAdmProfile;
  formeditProfil: FormGroup;

  public currentProfil: TAdmProfile = new TAdmProfile();

  public foncsByProfil: any;
  public foncsProfilByProfil: any;
  //public applications: any = undefined;
  public parentFoncs: any;
  checklistSelection = new SelectionModel<ExampleFlatNode>(true /* multiple */);
  flatNodeMap = new Map<ExampleFlatNode, AdmFoncTree>();
  public checklistfoncs: ExampleFlatNode[] = new Array();
  nestedNodeMap = new Map<AdmFoncTree, ExampleFlatNode>();
  checklistSelectionReadOnly = new SelectionModel<ExampleFlatNode>(true /* multiple */);
  menu: any;
  readOnlyCheck: any;
  list: any;
  public config: any = {};
  displayedColumns: string[] = ['test', 'login', 'nom', 'matricule', 'mail', 'status'];
  dataSourceUSer: any;
  rows: any;
  data: any;
  countPage: Number;
  searchObject: SearchObject;
  selection = new SelectionModel<any>(true, []);
  listUserProfil : any ;
  listApplications: TAdmApplication[];
  constructor(public admProfilService: AdmProfileService,
    private commonService: CommonService ,
    private searchObjectTreatment: SearchObjectTreatment,
    private translate: TranslateService,
    private formBuilder: FormBuilder,
    private configService: ConfigService,
    private router: Router
  ) {
    this.translate.onDefaultLangChange.subscribe((language) => {
      console.log(this.translate.getDefaultLang() + ' vs' + language.lang);
      this.currentLang = language.lang;
    });
//editListUtilisateurByIdNmJuridAndIdP
    this.admProfilService.editTree(+ sessionStorage.getItem('idProfil')).subscribe(data => {
      debugger

      this.treeControl.dataNodes = data as ExampleFlatNode[];
      this.dataSource.data = data as AdmFoncTree[];
      console.log("datasource", this.dataSource)
      //this.totalPages = data['page'].totalPages;

    }, err => {
      console.log(err);
    });
  }


  _transformer = (node: AdmFoncTree, level: number) => {

    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.id === node.idAdmFunction




      ? existingNode

      : new ExampleFlatNode();
    flatNode.nameAr = node.libelleAr;
    flatNode.nameFr = node.libelleFr;
    flatNode.id = node.idAdmFunction;
    flatNode.idParent = node.idParent;
    flatNode.level = level;
    flatNode.expandable = !!node.children;
    flatNode.fEdit = node.fEdit;
    flatNode.codeFonc = node.codeFonc

    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);

    if (flatNode.fEdit === 1)
      this.checklistSelection.select(flatNode);

    flatNode.readOnly = node.readOnly;
    if (flatNode.readOnly === 1)
      this.checklistSelectionReadOnly.select(flatNode);
    return flatNode;
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  public isHide: boolean = false;
  ngOnInit() {
    this.config = this.configService.templateConf.layout.dir;
    this.currentLang = this.translate.getDefaultLang();
  
    this.profil = new TAdmProfile();
    
    this.searchObject = this.searchObjectTreatment.treatementSearchObject(10, 0, null, null);
    this.getListUtilisateur();
    this.getListApplications();
    this.admProfilService.getProfil(+ sessionStorage.getItem('idProfil')).subscribe(
      response => {

        if (response['code'] === '200') {
          this.profil = response['payload'];
          console.log("profim", this.profil)
        }
        this.initAddForm();
      },
      error => {
        console.log('error :: ' + error);
      }
    );


  }

  initAddForm() {

    this.formeditProfil = this.formBuilder.group({
      code: [this.profil.code, [Validators.required]],
      libelleAr: [this.profil.libelleAr, [Validators.required]],

      libelleFr: [this.profil.libelleFr, [Validators.required]],
      idAdmApp: [this.profil.idAdmApp],
      flgActif: [this.profil.flgActif, [Validators.required]],

    })
    console.log("flgActif", this.formeditProfil.get('flgActif').value)
  }



  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  getLevel = (node: ExampleFlatNode) => node.level;


  descendantsAllSelected(node: any): boolean {

    const descendants = this.treeControl.getDescendants(node);

    return descendants.every(child => this.checklistSelection.isSelected(child));
  }


  descendantsPartiallySelected(node: ExampleFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }



  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: any, $event): void {

    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    if (this.checklistSelection.isSelected(node)) {
      this.checklistSelection.select(...descendants);

    }
    else {

      this.checklistSelection.deselect(...descendants);


    }



    this.checkAllParentsSelection(node);
  }


  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  todoLeafItemSelectionToggle(node: ExampleFlatNode): void {


    this.checklistSelection.toggle(node);

    this.checkAllParentsSelection(node);
  }

  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: any): void {
    let parent: any | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  /** Check root node checked state and change it accordingly */
  checkRootNodeSelection(node: ExampleFlatNode): void {

    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }


  /* Get the parent node of a node */
  getParentNode(node: ExampleFlatNode): any | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  checkSelectedRoot() {




  }



  onGetParentsAdmFoncs() {
    this.admProfilService.editTree(+ sessionStorage.getItem('idProfil'))
      .subscribe(data => {

        this.parentFoncs = data;
        //this.totalPages = data['page'].totalPages;

        console.log("listparentfoncs")
      }, err => {
        console.log(err);
      })

  }


  initcheckFoncList() {


    for (let i = 0; i < this.treeControl.dataNodes.length; i++) {
      const flatNode = this.treeControl.dataNodes[i];

      if (flatNode.fEdit === 1) {  //  this.checklistfoncs.push(flatNode);
        this.checklistSelection.select(flatNode);
      }
    }

  }

  onCancelUpdate() {
    debugger
    this.router.navigateByUrl('/administration/profil');
  }

  todoLeafItemSelectionToggleReadOnly(ev, node: ExampleFlatNode) {


    if (ev.checked == true) {
      node.readOnly = 1;
      console.log(node);
      // this.checklistSelection.toggle(node);
      // this.checkAllParentsSelection(node);
    } else {
      node.readOnly = 0;
      console.log(node);
      // this.checklistSelection.toggle(node);
      // this.checkAllParentsSelection(node);
    }


  }

  getlistIdfunction() {
    debugger;
    let listidfunctions: TAdmRetour[] = [];


    this.checkSelectedRoot();
    const value = this.checklistSelection.selected
    debugger
    for (let i = 0; i < value.length; i++) {
      debugger

      let ret: TAdmRetour = new TAdmRetour();
      ret.ids = value[i].id;
      if (value[i].readOnly != null && value[i].readOnly != undefined)
        ret.fReadOnly = value[i].readOnly
      else ret.fReadOnly = 0;
      listidfunctions.push(ret);
    }

    console.log(listidfunctions)

    return listidfunctions;
  }

  updateProfil(value: TAdmProfile) {
    value.id = + sessionStorage.getItem('idProfil')
    debugger
      //value.idNmJurid= + sessionStorage.getItem('idNmJurid');
    value.listFunctionRetour = this.getlistIdfunction();
    value.listUtilisateursProfil=this.getlistIdUtilisateursByProfil();


    this.admProfilService.updateProfil(value).subscribe(response => {

      this.router.navigateByUrl('/administration/profil');
      //  sessionStorage.removeItem('idProfil')

    }, err => {
      console.log(err);
    })

  }

  getlistIdUtilisateursByProfil() {
    debugger;
    let listUtilisateursProfil: any[] = [];

    const value = this.selection.selected
    debugger
    for (let i = 0; i < value.length; i++) {
      debugger
      listUtilisateursProfil.push(value[i].id);
    }

    console.log(listUtilisateursProfil)

    return listUtilisateursProfil;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourceUSer.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSourceUSer.data.forEach(row => this.selection.select(row));
  }

  public onPaginateChange(event): void {
    this.searchObject.pagination.offSet = event.pageIndex + 1;
    this.searchObject.pagination.limit = event.pageSize;
    this.getListUtilisateur;
  }

  getListUtilisateur() {
    debugger;
    console.log('zzzzzz' + this.searchObject);
    this.admProfilService.editListUtilisateurByIdNmJuridAndIdProfil(+ sessionStorage.getItem('idProfil'), this.commonService.getAffectPersonnelCurrentUser().idNmJurid, this.searchObject).subscribe(
      response => {
        if (response['code'] === '200') {
     debugger
          this.listUserProfil =  response['payload']['data'];
          



          this.rows = response['payload']['data'];
          this.data = response['payload'].data;
          console.log('sss '+response['payload']['data']);
          this.countPage = response['payload']['total'];
          this.dataSourceUSer = new MatTableDataSource<any>(
            response['payload']['data'] )


            this.dataSourceUSer.data.filter( row => row.flgSelected ==1).forEach(row =>  this.selection.select(row));
/*
for(var i =0 ; this.dataSourceUSer.data.length < 0; i++)
{
  if(this.dataSourceUSer.data[i].flgSelected ==1)
  {
    this.selection.select(this.dataSourceUSer.data[i])
  }
}*/
        }
      },

      error => {
        console.log('error :: ' + error);
      }
    )
  }

  getListApplications() {
    this.admProfilService.getListeApplications().subscribe(
      response => {
        debugger;
        if (response['code'] === '200') {


          this.listApplications =
            response['payload']

        }
      },
      error => {
        console.log('error :: ' + error);
      }
    )
  }

}


