import { SelectionModel } from '@angular/cdk/collections';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { AdmFoncTree } from '@app/shared/entites/administration/AdmFoncTree ';
import { TAdmRetour } from '@app/shared/entites/administration/TAdmRetour';

import { TAdmApplication } from '@app/shared/entites/administration/TAdmApplication';
import { VJuridUtilisateur } from '@app/shared/entites/administration/VJuridUtilisateur';

import { ConfigService } from '@app/shared/services/config.service';
import { LayoutService } from '@app/shared/services/layout.service';
import { TranslateService } from '@ngx-translate/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener } from "@angular/material/tree";
import { MatTreeFlatDataSource } from "@angular/material/tree";
import { CriteriaSearch, SearchObject, SearchObjectTreatment, } from '@app/shared';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { tadmfunctionProfil } from '@app/shared/entites/administration/tadmfunctionProfil';
import { first } from 'rxjs/operators';
import { TAdmProfile } from '@app/shared/entites/administration/TAdmProfile';
import { AdmProfileService } from '@app/shared/services/administration/admProfile.service';
import { CommonService } from '@app/shared/services';
import { VAffectationPersonnel } from '@app/shared/entites';
import { ToastrService } from 'ngx-toastr';

export class ExampleFlatNode {

  expandable: boolean;
  nameAr: string;
  nameFr: string;
  codeFonc: string;
  id: number;
  idParent: string;
  level: number;
  readOnly: number;
}

@Component({
  selector: 'app-fiche-profil',
  templateUrl: './fiche-profil.component.html',
  styleUrls: ['./fiche-profil.component.scss']
})
export class FicheProfilComponent implements OnInit {
  profil: TAdmProfile;
  affectationPersonnel: VAffectationPersonnel;

  formAddProfil: FormGroup;
  public foncs: any = undefined;
  public parentFoncs: any;
  public childFoncs: any = undefined;
  public currentProfil: TAdmProfile;
  public checkOnClick: any;
  public fedit: boolean = false;
  selectedApplication: TAdmApplication;
  submitted: boolean = true;
  //checklistSelection = new SelectionModel<ExampleFlatNode>(true);
  checklistSelection = new SelectionModel<ExampleFlatNode>(true /* multiple */);
  addForm: FormGroup;
  dataMap: any;
  flatNodeMap = new Map<ExampleFlatNode, AdmFoncTree>();
  public checklistfoncs: ExampleFlatNode[] = new Array();
  public checklist: any;
  public checklistRoot: any;
  currentLang: any;
  listApplications: TAdmApplication[];
  public config: any = {};
  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap = new Map<AdmFoncTree, ExampleFlatNode>();
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
    flatNode.codeFonc = node.codeFonc

    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;

  }


  private transformer = (node: AdmFoncTree, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      nameAr: node.libelleAr,
      nameFr: node.libelleFr,
      id: node.idAdmFunction,
      idParent: node.idParent,
      codeFonc: node.codeFonc,
      level: level,

    };
  }
  submitForm: boolean = true;
  displayedColumns: string[] = ['test', 'login', 'nom', 'matricule', 'mail', 'status'];
  datasource: any;
  rows: any;
  data: any;
  countPage: Number;
  searchObject: SearchObject;
  selection = new SelectionModel<any>(true, []);
  //this.TREE_DATA =this.onGetTreeData();
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  constructor(
    public profilService: AdmProfileService,
    private toastr: ToastrService,
    private searchObjectTreatment: SearchObjectTreatment,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private layoutService: LayoutService,
    private configService: ConfigService,
    private router: Router,
    private commonService: CommonService
  ) {
    this.profilService.getTree().subscribe(data => {


      this.treeControl.dataNodes = data as ExampleFlatNode[];
      this.dataSource.data = data as AdmFoncTree[];
      console.log("datasource", this.dataSource)
      //this.totalPages = data['page'].totalPages;

    }, err => {
      console.log(err);
    });
    this.translate.onDefaultLangChange.subscribe((language) => {
      console.log(this.translate.getDefaultLang() + ' vs ' + language.lang);
      this.currentLang = language.lang;
    });


  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  getLevel = (node: ExampleFlatNode) => node.level;
  isExpandable = (node: ExampleFlatNode) => node.expandable;
  ngOnInit() {

    this.config = this.configService.templateConf;
    this.currentLang = this.translate.getDefaultLang();
  
    this.searchObject = this.searchObjectTreatment.treatementSearchObject(10, 0, null, null);

    this.initAddForm();
    this.profil = new TAdmProfile();
    this.affectationPersonnel = this.commonService.getAffectPersonnelCurrentUser();
    console.log('event init :: ' + this.affectationPersonnel.idNmJurid);
    this.profil.flgActif === 1;
    this.getListApplications();
    this.onGetParentsAdmFoncs()
    this.getListUtilisateur();

  }
  redirectProfil() {

    this.router.navigateByUrl('/administration/profil');
  }
  onCancel() {
    debugger
    this.router.navigateByUrl('/administration/profil');
  }
  saveProfil(value: TAdmProfile) {
    debugger
    //   value.idAdmProfile = + sessionStorage.getItem('idProfil')
    if (this.formAddProfil.valid) {
      //value.idNmJurid= + sessionStorage.getItem('idNmJurid');
      value.listFunctionRetour = this.getlistIdfunction();
      value.listUtilisateursProfil = this.getlistIdUtilisateursByProfil();


      value.idNmJurid = this.affectationPersonnel.idNmJurid;


      this.profilService.saveProfil(value).subscribe(response => {
        if (response['code'] === '200') {

          this.submitForm = true;
          this.toastr.success('', this.translate.instant('dossiers.successMsg'));



        }
        this.router.navigateByUrl('/administration/profil');

      }, err => {
        console.log(err);
      })
    }
    else {
      this.submitForm = false
    }

  }



  getListApplications() {
    this.profilService.getListeApplications().subscribe(
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

  getListUtilisateur() {
    debugger;
    console.log('zzzzzz' + this.searchObject);
    this.profilService.getListUtilisateurByIdNmJurid(4, this.searchObject).subscribe(
      response => {
        if (response['code'] === '200') {
          this.rows = response['payload']['data'];
          this.data = response['payload'].data;
          console.log('sss ' + response['payload']['data']);
          this.countPage = response['payload']['total'];
          this.datasource = new MatTableDataSource<any>(
            response['payload']['data']
          );
        }
      },

      error => {
        console.log('error :: ' + error);
      }
    )
  }


  initAddForm() {
    this.selectedApplication = new TAdmApplication();
    this.formAddProfil = this.formBuilder.group({
      code: [null, [Validators.required]],
      libelleAr: [null, [Validators.required]],
      idAdmApp: [null, [Validators.required]],
      libelleFr: [null, [Validators.required]],
      idApplication: [this.selectedApplication.id],
      flgActif: ['1', [Validators.required]],

    })
  }


  //Tree functions 
  descendantsAllSelected(node: any): boolean {

    const descendants = this.treeControl.getDescendants(node);

    return descendants.every(child => this.checklistSelection.isSelected(child));
  }

  checkSelectedRoot() {

    for (let i = 0; i < this.parentFoncs.length; i++) {
      const currentParent = this.parentFoncs[i];

      if (!this.checklistfoncs.some(x => x.idParent === currentParent.codeFonc)) {

        this.checklistfoncs.splice(i, 1);
      }
    }

  }
  onGetParentsAdmFoncs() {
    this.profilService.getAdmFunctionsParents()
      .subscribe(data => {

        this.parentFoncs = data;
        //this.totalPages = data['page'].totalPages;

        console.log("listparentfoncs")
      }, err => {
        console.log(err);
      })

  }


  todoLeafItemSelectionToggleReadOnly(ev, node: ExampleFlatNode) {


    if (ev.checked == true) {
      node.readOnly = 1;

    } else {
      node.readOnly = 0;

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
  todoItemSelectionToggle(node: ExampleFlatNode, $event): void {

    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    if (this.checklistSelection.isSelected(node)) {
      this.checklistSelection.select(...descendants);
    }
    else {
      this.checklistSelection.deselect(...descendants);
    }

    descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    this.checkAllParentsSelection(node);
  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  todoLeafItemSelectionToggle(node: ExampleFlatNode): void {


    this.checklistSelection.toggle(node);
    if (this.checklistSelection.isSelected(node)) { this.checklistfoncs.push(node); }

    else if (this.checklistfoncs.some(x => x === node)) {
      node.readOnly = 0;
      this.checklistfoncs.splice(this.checklistfoncs.indexOf(node), 1);
    }




    const parent = this.getParentNode(node);
    if (!this.checklistfoncs.some(x => x === parent)) {
      this.checklistfoncs.push(parent);

    }


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

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: ExampleFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
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
    const numRows = this.datasource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.datasource.data.forEach(row => this.selection.select(row));
  }

  public onPaginateChange(event): void {
    this.searchObject.pagination.offSet = event.pageIndex + 1;
    this.searchObject.pagination.limit = event.pageSize;
    this.getListUtilisateur;
  }
}
