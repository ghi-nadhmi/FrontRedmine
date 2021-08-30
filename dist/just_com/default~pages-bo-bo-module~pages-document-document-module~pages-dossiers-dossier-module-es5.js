(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-bo-bo-module~pages-document-document-module~pages-dossiers-dossier-module"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/document/add-edit-document/add-edit-document.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/document/add-edit-document/add-edit-document.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"dialog-header mx-0 modal-header pt-0 px-0\">\n        <div [ngClass]=\"{'col-auto': currentLang=='ar', 'col': currentLang=='fr'}\">\n            <div mat-dialog-title cdkDrag cdkDragRootElement=\".cdk-overlay-pane\" cdkDragHandle>\n                <h5 class=\"text-arial\"\n                    [ngClass]=\"{'label-dialog-header-ar': currentLang=='ar', 'label-dialog-header-fr': currentLang=='fr'}\"\n                    >\n\n                    <span *ngIf=\"documentService.affModifDoc\" >{{ 'document.modifeDoc' | translate }}</span>\n                    <span *ngIf=\"!documentService.affModifDoc\"> {{ 'document.addDoc' | translate }}</span>\n\n                </h5>\n            </div>\n        </div>\n        <div [ngClass]=\"{'col': currentLang=='ar', 'col-auto': currentLang=='fr'}\">\n            <div class=\"col p-0 mb-0 mt-1\" style=\"margin-top: 0.2rem\">\n                <i class=\"fa fa-times\" style=\"font-size: 1.2rem; cursor: pointer\" mat-dialog-close>\n                </i>\n            </div>\n        </div>\n    </div>\n    <div mat-dialog-content class=\"mt-4 mx-0\" >\n        <form #f1=\"ngForm\" class=\"form-horizontal\" [formGroup]=\"formDocument\" id=\"formDocument\">\n            <div class=\"row\">\n                <div class=\"col-3\">\n                    <mat-form-field appearance=\"outline\" class=\"example-full-width\">\n                        <mat-label>{{'document.typeDoc' | translate}}</mat-label>\n                        <mat-select id=\"idNmTypeDoc\" formControlName=\"idNmTypeDoc\"  [value]=\"selectedValueTypeDoc.id\"\n                            required>\n                            <mat-option [ngStyle]=\"{'text-align': currentLang==='ar'? 'right':'left' }\">{{'document.comboOption' | translate}}</mat-option>\n                            <mat-option [ngStyle]=\"{'text-align': currentLang==='ar'? 'right':'left' }\" *ngFor=\"let typeDoc of listeTypeDoc\" [value]=\"typeDoc.id\">\n                                <span *ngIf=\"currentLang === 'ar'\">{{typeDoc.libelleAr}}</span>\n                                <span *ngIf=\"currentLang === 'fr'\">{{typeDoc.libelleFr}}</span>\n                            </mat-option>\n                        </mat-select>\n                        <mat-error>\n                            <strong>{{ 'document.controlTypeDoc' | translate }}</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-3\">\n                    <mat-form-field appearance=\"outline\" class=\"example-full-width\">\n                        <mat-label>{{'document.natureDoc' | translate}}</mat-label>\n                        <mat-select id=\"idNmNatureDoc\" formControlName=\"idNmNatureDoc\"\n                            [value]=\"selectedValueNatureDoc.id\"  required>\n                            <mat-option [ngStyle]=\"{'text-align': currentLang==='ar'? 'right':'left' }\">{{'document.comboOption' | translate}}</mat-option>\n                            <mat-option [ngStyle]=\"{'text-align': currentLang==='ar'? 'right':'left' }\" *ngFor=\"let natureDoc of listeNatureDoc \" [value]=\"natureDoc.id\">\n                                <span *ngIf=\"currentLang === 'ar'\">{{natureDoc.libelleAr}}</span>\n                                <span *ngIf=\"currentLang === 'fr'\">{{natureDoc.libelleFr}}</span>\n                            </mat-option>\n                        </mat-select>\n                        <mat-error>\n                            <strong>{{'document.controlNatureDoc' | translate }}</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n                \n\n                \n                <div class=\"col-3\">\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>{{ 'document.nbreCopie' | translate }}</mat-label>\n                        <input type=\"number\" id=\"nbrCopie\" formControlName=\"nbrCopie\" min=\"0\"  matInput required>\n                        <mat-error>\n                            <strong>{{'document.contorlNbrCopie' | translate }}</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-3\">\n                    <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                        <mat-label>{{ 'document.nomdoc' | translate }}</mat-label>\n                        <input type=\"text\" id=\"nomFichier\" formControlName=\"nomFichier\"  matInput\n                            [readonly]=\"documentService.affModifDoc\" required>\n                        <mat-error>\n                            <strong>{{'document.controlNomDoc' | translate}}</strong>\n                        </mat-error>\n\n                      \n\n                    </mat-form-field>\n\n                    <mat-error>\n                        <strong  *ngIf=\"afficheControlName\" style=\"display:flex;\n                        transform: translate(0, -100%);font-size:10px\">{{'document.controlNomFichierExistance'| translate}}</strong>\n                    </mat-error>\n\n\n                   <!--  <mat-error>\n                       \n                        <strong *ngIf=\"isNameDocExist(this.formDocument.get('nomFichier').value) && !documentService.affModifDoc\" style=\"display:flex;\n                         transform: translate(0, -100%);font-size:10px\">\n                        {{'document.controlNomFichierExistance'| translate}}\n                        </strong>\n                      \n                      </mat-error> -->\n                    </div>\n\n                  <!--   <mat-error >\n                        <strong *ngIf=\"isNameDocExist('nomFichier') && !documentService.affModifDoc\"> {{'document.controlNomFichierExistance' | translate }}</strong>\n                    </mat-error>  -->\n\n                    <!-- <mat-error >\n                        <strong *ngIf=\"isNameDocExist(this.formDocument.get('nomFichier').value) && !documentService.affModifDoc\"> \n                            {{'document.controlNomFichierExistance' | translate }} </strong>\n                       \n                    </mat-error> -->\n                    <!-- <mat-error\n                        >\n                        \n                    </mat-error> -->\n\n                    <!--                     <mat-error>\n\n\n                    </mat-error> -->\n\n\n\n\n                    <!--  <mat-error class=\"text-danger\" *ngIf=\"!submit && this.formDocument.get('nomFichier').hasError('required')\"  >\n                    Nom Fichier obligatoire\n                </mat-error> \n            <mat-error class=\"text-danger\"\n            *ngIf=\"isNameDocExist(this.formDocument.get('nomFichier').value)  \">\n           \n              </mat-error>  -->\n               \n\n                <!-- <div class=\"col-3\">\n                    <mat-form-field appearance=\"outline\" class=\"example-full-width\">\n                        <mat-label>{{ 'document.refPiece' | translate }}</mat-label>\n                        <input type=\"number\" id=\"refPiece\" formControlName=\"refPiece\"    matInput required>\n                        <mat-error>\n                            <strong>{{'document.controlRefPiece' | translate }}</strong>\n                        </mat-error>\n\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-3\">\n\n                    <app-select-date [max]=\"maxDate\" \n                        msgError=\" {{'document.controldtPiece' |translate}}\"\n                        [isError]=\"formDocument.controls.dtPiece.invalid \"\n                        [control]=\"formDocument.get('dtPiece')\" label=\"{{ 'document.dtPiece' | translate }}\"\n                        [isrequied]='true'>\n                    </app-select-date>\n                </div>\n\n                <div class=\"col-3\">\n                    <mat-form-field appearance=\"outline\" class=\"example-full-width\">\n                        <mat-label>{{ 'document.organismePiece' | translate }}</mat-label>\n                        <input type=\"text\" id=\"organismePiece\" formControlName=\"organismePiece\"   matInput required>\n                        <mat-error>\n                            <strong>{{'document.controlOrganismePiece' | translate }}</strong>\n                        </mat-error>\n\n                    \n                    </mat-form-field> -->\n\n                    <!-- <mat-error class=\"text-danger\" *ngIf=\"!submit && this.formDocument.get('organismePiece').hasError('required')\">\n                Nbre copie obligatoire   \n                </mat-error>  -->\n                <!-- </div> -->\n\n                <!-- <div class=\"col-3\">\n                    <mat-form-field appearance=\"outline\" class=\"example-full-width\">\n                        <mat-label>{{ 'document.mntPiece' | translate }}</mat-label>\n                        <input type=\"number\" id=\"mntPiece\" formControlName=\"mntPiece\"  matInput>\n                    </mat-form-field>\n\n                </div>\n\n                <div class=\"col-3\">\n              \n                    <app-select-date [min]=\"maxDate\" \n                     [control]=\"formDocument.get('dtEcheancePiece')\"\n                     [isrequied]='true'\n                    label=\"{{ 'document.dtEcheancePiece' | translate }}\"></app-select-date>\n                </div> -->\n\n                <div (click)=\"handerFileUpload()\">\n                    <button  mat-stroked-button class=\"primary-outline-btn pt-0 pb-0\" style=\"border-radius: 2rem;\">{{ 'document.import' | translate }}</button>\n                    <input #inputFile type='file' id=\"file\"\n                        style=\"display:none;\"\n                        (change)=\"handleFileInput($event.target.files)\" multiple />\n                </div>\n\n\n            </div>\n        </form>\n\n\n        <mat-table #table [dataSource]=\"dataSource\" MatPaginator>\n            <ng-container matColumnDef=\"fileName\">\n                <mat-header-cell *matHeaderCellDef\n                    [ngClass]=\"{'label-table-header-ar': currentLang=='ar', 'label-table-header-fr': currentLang=='fr'}\"\n                    style =\"font-size: 18px;font-weight: 600 ;\">\n                    {{ 'document.fileName' | translate }}</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"\n                    [ngClass]=\"{'cell-table-ar': currentLang=='ar', 'cell-table-fr': currentLang=='fr'}\">\n                    {{element.fileName | translate}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"removeFile\" >\n                <mat-header-cell *matHeaderCellDef\n                    [ngClass]=\"{'label-table-header-ar': currentLang=='ar', 'label-table-header-fr': currentLang=='fr'}\"\n                    style =\"font-size: 18px;font-weight: 600 ;\">\n                    {{ 'document.deleteFile' | translate }}</mat-header-cell>\n                <mat-cell *matCellDef=\"let element; let i = index\" class=\"justify-content-center\">\n                    <div class=\"col-1 mx-1\">\n                        <i class=\"ft-trash\" style=\"font-size: 1.5rem; cursor: pointer;color: #FF586B \"\n                            (click)=\"removeFile(i)\">\n                        </i>\n                    </div>\n                </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"uploadFile\">\n                <mat-header-cell *matHeaderCellDef\n                    [ngClass]=\"{'label-table-header-ar': currentLang=='ar', 'label-table-header-fr': currentLang=='fr'}\"\n                    style =\"font-size: 18px;font-weight: 600 ;\">\n                    {{ 'document.uploadFile' | translate }}</mat-header-cell>\n                <mat-cell *matCellDef=\"let element; let i=index\" class=\"justify-content-center\">\n                    <div class=\"col-1 mx-1\">\n                        <i class=\"ft-upload\" style=\"font-size: 1.5rem; cursor: pointer;color: #FFC107 \"\n                            (click)=\"DownloadFile(i)\">\n                        </i>\n                    </div>\n                </mat-cell>\n            </ng-container>\n            <mat-header-row *matHeaderRowDef=\"displayedColumns;sticky: true;\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n        <mat-paginator #MatPaginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons\n            class=\"dino-grid-paging\">\n        </mat-paginator>\n    </div>\n\n\n\n    <div mat-dialog-actions class=\"row float-right pb-3 mx-0\">\n        <div class=\"col\">\n            <button mat-stroked-button class=\"success-outline-btn pt-0 pb-0\" style=\"border-radius: 2rem;\"\n                *ngIf=\"!documentService.affModifDoc\" (click)=\"addDoc()\">\n                <i class=\"fa fa-check mr-2\" aria-hidden=\"true\"></i>\n                <span [ngClass]=\"{'label-search-ar': currentLang=='ar', 'label-search-fr': currentLang=='fr'}\"\n                    class=\"text-arial bold text-capitalize\">{{'label.save' | translate}}</span>\n            </button>\n        </div>\n        <div class=\"col\">\n            <button mat-stroked-button class=\"success-outline-btn pt-0 pb-0\" style=\"border-radius: 2rem;\"\n                *ngIf=\"documentService.affModifDoc\" (click)=\"editDoc()\">\n                <i class=\"fa fa-check mr-2\" aria-hidden=\"true\"></i>\n                <span [ngClass]=\"{'label-search-ar': currentLang=='ar', 'label-search-fr': currentLang=='fr'}\"\n                    class=\"text-arial bold text-capitalize\">{{'label.save' | translate}}</span>\n            </button>\n        </div>\n         <div class=\"col\">\n            <button mat-stroked-button class=\"danger-outline-btn pt-0 pb-0\" style=\"border-radius: 2rem;\"\n                (click)=\"onCancel()\">\n                <i class=\"fa fa-times mr-2\" aria-hidden=\"true\"></i>\n                <span class=\"text-arial\"\n                    [ngClass]=\"{'label-search-ar': currentLang=='ar', 'label-search-fr': currentLang=='fr'}\">{{'label.cancel'\n                    | translate}}</span>\n            </button>\n        </div> \n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/document/delete-file-confirmation/delete-file-confirmation.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/document/delete-file-confirmation/delete-file-confirmation.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"dialog-header mx-0 modal-header pt-0 px-0\" >\n      <div [ngClass]=\"{'col-auto': currentLang=='ar', 'col': currentLang=='fr'}\">\n          <div mat-dialog-title>\n              <h5 class=\"text-arial\"\n                  [ngClass]=\"{'label-dialog-header-ar': currentLang=='ar', 'label-dialog-header-fr': currentLang=='fr'}\"\n              >{{ 'bo.delete' | translate }}</h5>\n          </div>\n      </div>\n      <div   (click)=\"onCancel()\"\n              [ngClass]=\"{'col': currentLang=='ar', 'col-auto': currentLang=='fr'}\"\n      >\n          <div class=\"col p-0 mb-0 mt-1\" style=\"margin-top: 0.2rem\">\n              <i class=\"fa fa-times\"\n                 style=\"font-size: 1.2rem; cursor: pointer\"\n                 mat-dialog-close>\n              </i>\n          </div>\n      </div>\n  </div>\n\n  <div mat-dialog-content class=\"mt-3 mx-0\">\n      <form>\n          <div class=\"row col-md-12\">\n         \n            <h4 class=\"mx-2 text-arial \"\n            [ngClass]=\"{'label-card-header-ar': currentLang=='ar', 'label-card-header-fr': currentLang=='fr'}\">{{'COMMUN.MSG.CONFIRM_DELETE' | translate}} </h4>\n       <div *ngIf=\"errorMsg\" class=\"alert alert-danger alert-dismissible\">\n        <i class=\"icon fa fa-ban\"></i> {{'COMMUN.MSG.ERROR.DELETE_DOCUMENT' | translate}} \n      </div>\n          </div>\n      </form>\n  </div>\n\n  <div mat-dialog-actions class=\"row float-right pb-3 mx-0\">\n      <div class=\"col\">\n          <button mat-stroked-button class=\"success-outline-btn pt-0 pb-0\" (click)=\"delete()\" \n                  style=\"border-radius: 2rem;\">\n              <i class=\"fa fa-check mr-2\" aria-hidden=\"true\"></i>\n              <span [ngClass]=\"{'label-search-ar': currentLang=='ar', 'label-search-fr': currentLang=='fr'}\"\n                    class=\"text-arial bold text-capitalize\">{{'COMMUN.SUPPRESSION' | translate}}</span>\n          </button>\n      </div>\n      <div class=\"col\">\n          <button mat-stroked-button class=\"danger-outline-btn pt-0 pb-0\"\n                  style=\"border-radius: 2rem;\"\n                  (click)=\"onCancel()\"\n          >\n              <i class=\"fa fa-times mr-2\" aria-hidden=\"true\"></i>\n              <span class=\"text-arial\"\n                    [ngClass]=\"{'label-search-ar': currentLang=='ar', 'label-search-fr': currentLang=='fr'}\"\n              >{{'label.cancel' | translate}}</span>\n          </button>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/document/delete/delete.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/document/delete/delete.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  delete works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/document/document.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/document/document.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-4\">\n  <div class=\"card-header card-header-2 py-1 px-0\">\n      <div class=\"row\">\n          <div class=\"col\">\n              <i class=\"fa fa-list mx-2\" aria-hidden=\"true\"></i>\n              <span class=\"mx-2 text-arial \"\n                  [ngClass]=\"{'label-card-header-ar': currentLang=='ar', 'label-card-header-fr': currentLang=='fr'}\">{{'document.titleDoc' | translate}}</span>\n          </div>\n          <div class=\"col-auto float-right px-4\">\n              <div class=\"row m-0\">\n                  <div class=\"col p-0 mb-0\" style=\"margin-top: 0.2rem\">\n                      <i class=\"fa fa-plus\"\n                         style=\"font-size: 1.5rem; cursor: pointer\"\n                         (click)=\"onAddDocument();documentService.affModifDoc=false\">\n                      </i>\n                  </div>\n                  <div class=\"col-11 py-0 m-0\">\n                      <input matInput placeholder=\"{{'label.search' | translate}}\"\n                          class=\"form-control px-3 rounded-t float-right bg-white\" (keyup)=\"applyFilter($event)\" >\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <div class=\"card-body p-0\">\n      <mat-table #table [dataSource]=\"dataSource\">\n         \n        <ng-container matColumnDef=\"libelleTypeDoc\">\n          <mat-header-cell *matHeaderCellDef\n                           [ngClass]=\"{'label-table-header-ar': currentLang=='ar', 'label-table-header-fr': currentLang=='fr'}\"\n          > {{ 'document.typeDoc' | translate }} </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"\n                    [ngClass]=\"{'cell-table-ar': currentLang=='ar', 'cell-table-fr': currentLang=='fr'}\"\n          >\n              <span *ngIf=\"currentLang === 'ar'\">{{element.libelleTypeAr }}</span>\n              <span *ngIf=\"currentLang === 'fr'\">{{element.libelleTypeFr }}</span>\n          </mat-cell>\n      </ng-container>\n\n          <ng-container matColumnDef=\"libelleNatureDoc\">\n            <mat-header-cell *matHeaderCellDef\n                             [ngClass]=\"{'label-table-header-ar': currentLang=='ar', 'label-table-header-fr': currentLang=='fr'}\"\n            > {{ 'document.natureDoc' | translate }} </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"\n                      [ngClass]=\"{'cell-table-ar': currentLang=='ar', 'cell-table-fr': currentLang=='fr'}\"\n            >\n                <span *ngIf=\"currentLang === 'ar'\">{{element.libelleNatureAr }}</span>\n                <span *ngIf=\"currentLang === 'fr'\">{{element.libelleNatureFr }}</span>\n            </mat-cell>\n        </ng-container>\n\n       \n          <ng-container matColumnDef=\"nomFichier\">\n              <mat-header-cell *matHeaderCellDef\n                  [ngClass]=\"{'label-table-header-ar': currentLang=='ar', 'label-table-header-fr': currentLang=='fr'}\">\n                  {{ 'document.nomdoc' | translate }} </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"\n                  [ngClass]=\"{'cell-table-ar': currentLang=='ar', 'cell-table-fr': currentLang=='fr'}\">\n                  {{element.nomFichier | translate}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"nbreCopie\">\n            <mat-header-cell *matHeaderCellDef\n                [ngClass]=\"{'label-table-header-ar': currentLang=='ar', 'label-table-header-fr': currentLang=='fr'}\">\n                {{ 'document.nbreCopie' | translate }} </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"  [ngClass]=\"{'cell-table-ar': currentLang=='ar', 'cell-table-fr': currentLang=='fr'}\"> {{element.nbrCopie }} </mat-cell>\n\n        </ng-container>\n\n\n          <!-- Action Column -->\n          <ng-container matColumnDef=\"action\">\n              <mat-header-cell *matHeaderCellDef class=\"justify-content-center\">\n                  <i class=\"fa fa-wrench\" style=\"font-size: 1.5rem; cursor: pointer; color: black\">\n                  </i>\n              </mat-header-cell>\n\n              <mat-cell mat-cell *matCellDef=\"let element\" class=\"justify-content-center\">\n                  <div class=\"row\">\n                      <div class=\"col-1 mx-1\">\n                          <i class=\"ft-edit-2\" style=\"font-size: 1.5rem; cursor: pointer; color: #FFC107\"\n                              (click)=\"getRow(element);onEditDocument();documentService.affModifDoc=true\">\n                          </i>\n                      </div>\n                    <!--   <div class=\"col-1 mx-1\">\n                          <i class=\"ft-trash-2\" style=\"font-size: 1.5rem; cursor: pointer;color: #FF586B\"\n                              (click)=\"onEdit()\">\n                          </i>\n                      </div> -->\n                    <!--   <div class=\"col-1 mx-1\">\n                          <i class=\"fa fa-ellipsis-v\" style=\"font-size: 1.5rem; cursor: pointer; color: grey\"\n                              (click)=\"onEdit()\">\n                          </i>\n                      </div> -->\n                  </div>\n              </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns;sticky: true;\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"getRow(row)\"></mat-row>\n      </mat-table>\n      <mat-paginator [length]=\"countPage\"  [pageSizeOptions]=\"[5, 10, 20]\"\n      (page)=\"onPaginateChange($event)\" showFirstLastButtons>\n    </mat-paginator>\n\n  </div>\n</div> \n<!--        /datatable start-->\n"

/***/ }),

/***/ "./src/app/pages/document/add-edit-document/add-edit-document.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/document/add-edit-document/add-edit-document.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-label.ng-star-inserted {\n  text-transform: none;\n  letter-spacing: 0px; }\n\n.dialog-header {\n  background-color: #205723;\n  color: white;\n  min-height: 2.188rem;\n  height: 2.5rem; }\n\n.label-dialog-header-ar {\n  font-size: 1.4rem !important;\n  font-weight: bold !important; }\n\n.label-dialog-header-fr {\n  font-size: 1.1rem !important;\n  font-weight: bold !important;\n  margin-top: .5rem !important; }\n\n.mat-card-subtitle {\n  color: #6b1a20;\n  padding: 3% 3% 0; }\n\nmat-form-field {\n  width: 100%;\n  max-width: 100%; }\n\n.form-element {\n  padding: 3%; }\n\n.notification {\n  background: #ffd0db;\n  color: #7c152e;\n  border-radius: 16px;\n  padding: 10px;\n  display: flex;\n  align-items: center; }\n\nfieldset {\n  border-width: 1px;\n  border-color: white; }\n\n.mat-drawer-container {\n  height: 100%;\n  padding: 2% 3% 2%; }\n\n.mat-drawer-container .mat-drawer.mat-drawer-end {\n  width: 800px;\n  padding: 15px;\n  box-shadow: 15px 4px 28px 2px rgba(213, 213, 213, 0.02), 5px 9px 10px rgba(186, 186, 186, 0.54); }\n\n.mat-drawer-container .mat-drawer.mat-drawer-end .mat-card {\n  box-shadow: none; }\n\n.mat-drawer-content {\n  padding-left: 2%; }\n\napp-container .mat-sidenav {\n  border-left: none !important; }\n\n.mat-card-subtitle {\n  font-weight: bold; }\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.4em 0 !important; }\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.5em; }\n\n::ng-deep\n.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.1em) scale(0.75);\n          transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%; }\n\n.cdk-program-focused, .cdk-program-focused {\n  outline: none !important; }\n\nbutton.mat-icon-button.mat-button-base {\n  outline: none !important; }\n\nbutton:focus {\n  outline: none !important; }\n\nmat-label.ng-star-inserted {\n  text-transform: none;\n  letter-spacing: 0px; }\n\nmat-form-field > div.mat-form-field-wrapper {\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n  padding-bottom: 0px !important; }\n\n.mat-form-field-wrapper {\n  padding-bottom: 0px !important; }\n\n.mat-column-fileName {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 60% !important;\n  width: 80% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdW1lbnQvYWRkLWVkaXQtZG9jdW1lbnQvQzpcXFVzZXJzXFxTYWlkaVxcRGVza3RvcFxcd29ya3NwYWNlX3R1bmVwc1xcZnJvbnRcXGp1c3Rjb21fdmYtZGV2XFxqdXN0Q29tLXdlYmFwcC9zcmNcXGFwcFxccGFnZXNcXGRvY3VtZW50XFxhZGQtZWRpdC1kb2N1bWVudFxcYWRkLWVkaXQtZG9jdW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxvQkFBb0I7RUFDcEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLDRCQUE0QjtFQUM1Qiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQU9yQjtFQUNFLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLCtGQUNzQyxFQUFBOztBQUd4QztFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLFdBQVcsRUFBQTs7QUFHYjs7O0VBR0UsaURBQXlDO1VBQXpDLHlDQUF5QztFQUN6QyxpQkFBaUIsRUFBQTs7QUFLbkI7RUFDRSx3QkFBd0IsRUFBQTs7QUFJMUI7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsNkJBQTRCO0VBQzlCLDBCQUF5QjtFQUN6Qiw4QkFBNkIsRUFBQTs7QUFFN0I7RUFDRSw4QkFBNkIsRUFBQTs7QUFHL0I7RUFFRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3VtZW50L2FkZC1lZGl0LWRvY3VtZW50L2FkZC1lZGl0LWRvY3VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5tYXQtbGFiZWwubmctc3Rhci1pbnNlcnRlZCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgfVxuICBcbiAgLmRpYWxvZy1oZWFkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwNTcyMztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWluLWhlaWdodDogMi4xODhyZW07XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gIH1cbiAgXG4gIC5sYWJlbC1kaWFsb2ctaGVhZGVyLWFye1xuICAgIGZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmxhYmVsLWRpYWxvZy1oZWFkZXItZnJ7XG4gICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWF0LWNhcmQtc3VidGl0bGUge1xuICAgIGNvbG9yOiAjNmIxYTIwO1xuICAgIHBhZGRpbmc6IDMlIDMlIDA7XG4gIH1cbiAgXG4gIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5mb3JtLWVsZW1lbnQge1xuICAgIHBhZGRpbmc6IDMlO1xuICB9XG4gIFxuICAubm90aWZpY2F0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZkMGRiO1xuICAgIGNvbG9yOiAjN2MxNTJlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIGZpZWxkc2V0IHtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICBcbiAgXG4gIFxuICBcbiAgLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMiUgMyUgMiU7XG4gIH1cbiAgXG4gIC5tYXQtZHJhd2VyLWNvbnRhaW5lciAubWF0LWRyYXdlci5tYXQtZHJhd2VyLWVuZCB7XG4gICAgd2lkdGg6IDgwMHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogMTVweCA0cHggMjhweCAycHggcmdiYSgyMTMsIDIxMywgMjEzLCAwLjAyKSxcbiAgICA1cHggOXB4IDEwcHggcmdiYSgxODYsIDE4NiwgMTg2LCAwLjU0KTtcbiAgfVxuICBcbiAgLm1hdC1kcmF3ZXItY29udGFpbmVyIC5tYXQtZHJhd2VyLm1hdC1kcmF3ZXItZW5kIC5tYXQtY2FyZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICBcbiAgLm1hdC1kcmF3ZXItY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgfVxuICBcbiAgYXBwLWNvbnRhaW5lciAubWF0LXNpZGVuYXYge1xuICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgcGFkZGluZzogMC40ZW0gMCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICAgIHRvcDogLTEuNWVtO1xuICB9XG4gIFxuICA6Om5nLWRlZXBcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0XG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjFlbSkgc2NhbGUoMC43NSk7XG4gICAgd2lkdGg6IDEzMy4zMzMzMyU7XG4gIH1cbiAgXG4gIFxuICBcbiAgLmNkay1wcm9ncmFtLWZvY3VzZWQsIC5jZGstcHJvZ3JhbS1mb2N1c2VkIHtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIFxuICBidXR0b24ubWF0LWljb24tYnV0dG9uLm1hdC1idXR0b24tYmFzZSB7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICBidXR0b246Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICBtYXQtbGFiZWwubmctc3Rhci1pbnNlcnRlZCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgfVxuICBtYXQtZm9ybS1maWVsZCA+ZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4IWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4IWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHghaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdC1jb2x1bW4tZmlsZU5hbWV7XG5cbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgICBmbGV4OiAwIDAgNjAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/document/add-edit-document/add-edit-document.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/document/add-edit-document/add-edit-document.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddEditDocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditDocumentComponent", function() { return AddEditDocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _app_shared_entites_document_NatureDoc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/entites/document/NatureDoc */ "./src/app/shared/entites/document/NatureDoc.ts");
/* harmony import */ var _app_shared_entites_document_TypeDoc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/entites/document/TypeDoc */ "./src/app/shared/entites/document/TypeDoc.ts");
/* harmony import */ var _app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _app_shared_services_document_document_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/services/document/document.service */ "./src/app/shared/services/document/document.service.ts");
/* harmony import */ var _app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/shared/services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _delete_file_confirmation_delete_file_confirmation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../delete-file-confirmation/delete-file-confirmation.component */ "./src/app/pages/document/delete-file-confirmation/delete-file-confirmation.component.ts");















var AddEditDocumentComponent = /** @class */ (function () {
    function AddEditDocumentComponent(dialogRef, data, translate, documentService, layoutService, formBuilder, configService, dialog) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.translate = translate;
        this.documentService = documentService;
        this.layoutService = layoutService;
        this.formBuilder = formBuilder;
        this.configService = configService;
        this.dialog = dialog;
        this.config = {};
        this.fileToUpload = null;
        this.filesUploaded = [];
        this.submit = true;
        this.displayedColumns = ['fileName', 'removeFile', 'uploadFile'];
        // displayedColumns: any[] = [
        //   {title:"fileName", width: "80%"},
        //   {title:"removeFile", width: "10%"},
        //   {title:"uploadFile", width: "10%"},
        // ]
        this.formData = new FormData();
        this.codeExist = false;
        this.maxDate = new Date();
        this.afficheControlName = false;
        this.file = null;
        this.nameVerif = false;
        this.translate.onDefaultLangChange.subscribe(function (language) {
            _this.currentLang = language.lang;
        });
    }
    Object.defineProperty(AddEditDocumentComponent.prototype, "paginator", {
        //listFiles: File[] ; 
        set: function (value) {
            if (this.dataSource) {
                this.dataSource.paginator = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    AddEditDocumentComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.config = this.configService.templateConf;
        this.currentLang = this.translate.getDefaultLang();
        this.getListNatureDoc();
        this.getListTypeDoc();
        this.getListFileAdded();
        this.getListDocument();
        this.selectedValueNatureDoc = new _app_shared_entites_document_NatureDoc__WEBPACK_IMPORTED_MODULE_7__["NatureDoc"](this.data.id, this.data.codeNature, this.data.libelleNatureAr, this.data.libelleNatureFr, this.data.ordre);
        this.selectedValueTypeDoc = new _app_shared_entites_document_TypeDoc__WEBPACK_IMPORTED_MODULE_8__["TypeDoc"](this.data.id, this.data.codeType, this.data.libelleTypeAr, this.data.libelleTypeFr, this.data.ordre);
        console.log('dataniza', this.data);
        this.formDocument = this.formBuilder.group({
            idNmTypeDoc: [this.documentService.affModifDoc ? this.data.docModif.idNmTypeDoc : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            idNmNatureDoc: [this.documentService.affModifDoc ? this.data.docModif.idNmNatureDoc : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nomFichier: [this.documentService.affModifDoc ? this.data.docModif.nomFichier : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nbrCopie: [this.documentService.affModifDoc ? this.data.docModif.nbrCopie : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        //this.formDocument.get('dtEcheancePiece').setValue(new Date(this.data.dtEcheancePiece));
        console.log("datatatouuto", this.data.docModif.dtPiece);
        console.log("date echeance", this.data.docModif.dtEcheancePiece);
        console.log("idtypeDoc", this.data.docModif.idNmTypeDoc);
        console.log("aaaa", this.data.docModif.idNmNatureDoc);
        console.log("aazeerrr", this.data.docModif.nomFichier);
    };
    AddEditDocumentComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    AddEditDocumentComponent.prototype.getListNatureDoc = function () {
        var _this = this;
        this.documentService.getListNatureDoc().subscribe(function (response) {
            if (response['code'] === '200') {
                _this.listeNatureDoc = response['payload'];
            }
        }, function (error) {
            console.log('error :: ' + error);
        });
    };
    AddEditDocumentComponent.prototype.getListTypeDoc = function () {
        var _this = this;
        this.documentService.getListTypeDoc().subscribe(function (response) {
            if (response['code'] === '200') {
                _this.listeTypeDoc = response['payload'];
            }
        }, function (error) {
            console.log('error :: ' + error);
        });
    };
    AddEditDocumentComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        this.listeFileAdded = this.listeFileAdded || [];
        for (var i = 0; i < files.length; i++) {
            this.fileToUpload = files.item(i);
            this.filesUploaded.push(this.fileToUpload);
            this.listeFileAdded.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.fileToUpload, { fileName: this.fileToUpload.name, nodeRef: null }));
        }
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.listeFileAdded);
    };
    AddEditDocumentComponent.prototype.removeFile = function (index) {
        var _this = this;
        debugger;
        var selectedFile = this.listeFileAdded[index];
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        dialogConfig.direction = this.currentLang === 'ar' ? 'rtl' : 'ltr';
        dialogConfig.closeOnNavigation = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.data = {};
        var dialogRef = this.dialog.open(_delete_file_confirmation_delete_file_confirmation_component__WEBPACK_IMPORTED_MODULE_14__["DeleteFileConfirmationComponent"], dialogConfig);
        if (selectedFile.nodeRef) {
            dialogRef.afterClosed().subscribe(function (result) {
                if (result && result.status === 'OK') {
                    _this.documentService.deleteFileWithNodeRef(selectedFile.nodeRef).subscribe(function (response) {
                        if (response['code'] === '200') {
                            _this.getListFileAdded();
                            _this.listeFileAdded = null;
                        }
                    });
                }
            });
        }
        else {
            dialogRef.afterClosed().subscribe(function (result) {
                if (result && result.status === 'OK') {
                    _this.listeFileAdded.splice(index, 1);
                    _this.filesUploaded.splice(index, 1);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.listeFileAdded);
                }
            });
        }
    };
    AddEditDocumentComponent.prototype.DownloadFile = function (index) {
        var selectedFile = this.listeFileAdded[index];
        this.documentService.DowloadFile(selectedFile.nodeRef).subscribe(function (response) {
            var blob = new Blob([response], {
                type: 'application/octet-stream'
            });
            Object(file_saver__WEBPACK_IMPORTED_MODULE_13__["saveAs"])(blob, selectedFile.fileName);
        });
    };
    AddEditDocumentComponent.prototype.getListFileAdded = function () {
        var _this = this;
        this.documentService.listDocAdded(this.documentService.affModifDoc ? this.data.docModif.id : null).subscribe(function (response) {
            if (response['code'] === '200') {
                _this.listeFileAdded = response['payload'];
                console.log("eeeeeeeeeeeeeeetest", _this.listeFileAdded);
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.listeFileAdded);
                _this.dataSource.paginator = _this.paginator;
            }
        });
    };
    AddEditDocumentComponent.prototype.getListDocument = function () {
        var _this = this;
        this.documentService.getListDocumentWhitoutFilte().subscribe(function (response) {
            if (response['code'] === '200') {
                _this.listeDoc = response['payload'];
            }
        }, function (error) {
            console.log('error :: ' + error);
        });
    };
    AddEditDocumentComponent.prototype.Validatort = function (form) {
        var condition = this.formDocument.get('nomFichier').value.toString() == 'test';
        return condition ? { passwordsDoNotMatch: true } : null;
    };
    AddEditDocumentComponent.prototype.isNameDocExist = function (value) {
        // debugger;
        this.codeExist = false;
        if (value !== undefined && value != null) {
            this.codeExist = this.listeDoc.find(function (ident) { return ident.nomFichier == value; });
            this.codeExist = this.codeExist != undefined && this.codeExist != null ? true : false;
        }
        return this.codeExist;
    };
    AddEditDocumentComponent.prototype.onPaginateChange = function (event) {
        this.searchObject.pagination.offSet = event['pageIndex'];
        this.searchObject.pagination.limit = event['pageSize'];
        this.getListFileAdded();
    };
    AddEditDocumentComponent.prototype.addDoc = function () {
        var _this = this;
        debugger;
        this.afficheControlName = false;
        if (this.formDocument.valid) {
            // this.submit = true;
            // this.isNameDocExist(this.formDocument.get('nomFichier').value);
            //if (this.codeExist === false) {
            var dataTosend_1;
            var idCourrArr = this.data.idSrc;
            var idDossier = this.data.idSrc;
            console.log('eeee ::: ' + this.data.typSrc);
            if (this.data.typSrc == _app_shared__WEBPACK_IMPORTED_MODULE_6__["CONSTANTE"].CA) {
                idDossier = null;
            }
            else {
                idCourrArr = null;
            }
            console.log('show add :: ' + idDossier + ' :: ' + idCourrArr + ' **** ' + this.data.idSrc + ' *** ' + ' dddd' + idDossier);
            var objectToSend = {
                idNmTypeDoc: parseInt(this.formDocument.get('idNmTypeDoc').value),
                idNmNatureDoc: parseInt(this.formDocument.get('idNmNatureDoc').value),
                nomFichier: this.formDocument.get('nomFichier').value,
                nbrCopie: parseInt(this.formDocument.get('nbrCopie').value),
                // refPiece: this.formDocument.get('refPiece').value,
                //dtPiece: new Date(this.formDocument.get('dtPiece').value),
                // organismePiece: this.formDocument.get('organismePiece').value,
                // mntPiece: this.formDocument.get('mntPiece').value,
                // dtEcheancePiece: new Date(this.formDocument.get('dtEcheancePiece').value),
                idAdmUser: 1,
                idCourArr: parseInt(idCourrArr),
                idDossier: parseInt(idDossier),
                description: null
            };
            // this.submit= true;
            var filesToUpload = this.listeFileAdded ? this.listeFileAdded.filter(function (element) { return !element.nodeRef; }) : [];
            if (filesToUpload && filesToUpload.length) {
                var listFiles = filesToUpload.map(function (element) {
                    return _this.filesUploaded.find(function (file) { return file.name === element.fileName; });
                });
                this.documentService.addDocument(listFiles, objectToSend).subscribe(function (response) {
                    if (response['code'] === '200') {
                        dataTosend_1 = _this.data;
                        _this.documentService.affModifDoc === false;
                        //this.submit=true ;
                        _this.documentService.selectDoc(dataTosend_1);
                        _this.close({ status: 'OK' });
                        //this.dialogRef.close();
                        _this.documentService.selectDoc(dataTosend_1);
                    }
                    else if (response['code'] === '300') {
                        debugger;
                        _this.afficheControlName = true;
                    }
                });
            }
            else {
                this.documentService.addDocument(null, objectToSend).subscribe(function (response) {
                    if (response['code'] === '200') {
                        dataTosend_1 = _this.data;
                        _this.documentService.affModifDoc === false;
                        //this.submit=true ;
                        _this.documentService.selectDoc(dataTosend_1);
                        _this.close({ status: 'OK' });
                        //this.dialogRef.close();
                        _this.documentService.affModifDoc === false;
                        _this.documentService.selectDoc(dataTosend_1);
                    }
                    else if (response['code'] === '300') {
                        _this.afficheControlName = true;
                    }
                });
            }
        }
        //}
        /*
         else
          this.submit=false ;  */
    };
    AddEditDocumentComponent.prototype.controlName = function (name) {
        if (this.formDocument.get('nomFichier').value == name) {
            this.nameVerif = true;
        }
        else {
            this.nameVerif = this.listeDoc.find(function (ident) { return ident.nomFichier == name; });
        }
        return this.nameVerif;
    };
    AddEditDocumentComponent.prototype.editDoc = function () {
        var _this = this;
        debugger;
        if (this.formDocument.valid) {
            var dataTosend_2;
            var idCourrArr = this.data.idSrc;
            var idDossier = this.data.idSrc;
            console.log('eeee ::: ' + this.data.typSrc);
            if (this.data.typSrc == _app_shared__WEBPACK_IMPORTED_MODULE_6__["CONSTANTE"].CA) {
                idDossier = null;
            }
            else {
                idCourrArr = null;
            }
            var objectToSend = {
                id: this.data.docModif.id,
                idNmTypeDoc: parseInt(this.formDocument.get('idNmTypeDoc').value),
                idNmNatureDoc: parseInt(this.formDocument.get('idNmNatureDoc').value),
                nomFichier: this.data.docModif.nomFichier,
                nbrCopie: parseInt(this.formDocument.get('nbrCopie').value),
                // refPiece: this.formDocument.get('refPiece').value,
                // nodeRef: this.data.docModif.nodeRef,
                // dtPiece: new Date(this.formDocument.get('dtPiece').value),
                // organismePiece: this.formDocument.get('organismePiece').value,
                // mntPiece: parseInt(this.formDocument.get('mntPiece').value),
                // dtEcheancePiece: new Date(this.formDocument.get('dtEcheancePiece').value),
                idAdmUser: 1,
                idCourArr: parseInt(idCourrArr),
                idDossier: parseInt(idDossier),
                description: null
            };
            var filesToUpload = this.listeFileAdded ? this.listeFileAdded.filter(function (element) { return !element.nodeRef; }) : [];
            if (filesToUpload && filesToUpload.length) {
                var listFiles = filesToUpload.map(function (element) {
                    return _this.filesUploaded.find(function (file) { return file.name === element.fileName; });
                });
                console.log("testList", listFiles);
                this.documentService.updateDocument(listFiles, objectToSend).subscribe(function (response) {
                    dataTosend_2 = _this.data;
                    _this.documentService.affModifDoc === false;
                    _this.submit = true;
                    _this.close({ status: 'OK' });
                    //this.dialogRef.close();
                    _this.documentService.selectDoc(dataTosend_2);
                });
            }
            else {
                this.documentService.updateDocument(null, objectToSend).subscribe(function (response) {
                    if (response['code'] === '200') {
                        dataTosend_2 = _this.data;
                        _this.documentService.affModifDoc === false;
                        //this.submit=true ;
                        _this.documentService.selectDoc(dataTosend_2);
                        _this.close({ status: 'OK' });
                        //this.dialogRef.close();
                        _this.documentService.affModifDoc === false;
                        _this.documentService.selectDoc(dataTosend_2);
                    }
                });
            }
        }
    };
    AddEditDocumentComponent.prototype.handerFileUpload = function () {
        document.getElementById("file").click();
    };
    AddEditDocumentComponent.prototype.close = function (feedback) {
        if (feedback === void 0) { feedback = null; }
        this.dialogRef.close(feedback);
    };
    AddEditDocumentComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] },
        { type: _app_shared_services_document_document_service__WEBPACK_IMPORTED_MODULE_10__["DocumentService"] },
        { type: _app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_11__["LayoutService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]])
    ], AddEditDocumentComponent.prototype, "paginator", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputFile', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AddEditDocumentComponent.prototype, "inputFile", void 0);
    AddEditDocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-edit-document',
            template: __webpack_require__(/*! raw-loader!./add-edit-document.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/document/add-edit-document/add-edit-document.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-document.component.scss */ "./src/app/pages/document/add-edit-document/add-edit-document.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"], _app_shared_services_document_document_service__WEBPACK_IMPORTED_MODULE_10__["DocumentService"],
            _app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_11__["LayoutService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], AddEditDocumentComponent);
    return AddEditDocumentComponent;
}());



/***/ }),

/***/ "./src/app/pages/document/delete-file-confirmation/delete-file-confirmation.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/document/delete-file-confirmation/delete-file-confirmation.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-label.ng-star-inserted {\n  text-transform: none;\n  letter-spacing: 0px; }\n\n.dialog-header {\n  background-color: #205723;\n  color: white;\n  min-height: 2.188rem;\n  height: 2.5rem; }\n\n.label-dialog-header-ar {\n  font-size: 1.4rem !important;\n  font-weight: bold !important; }\n\n.label-dialog-header-fr {\n  font-size: 1.1rem !important;\n  font-weight: bold !important;\n  margin-top: .5rem !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdW1lbnQvZGVsZXRlLWZpbGUtY29uZmlybWF0aW9uL0M6XFxVc2Vyc1xcU2FpZGlcXERlc2t0b3BcXHdvcmtzcGFjZV90dW5lcHNcXGZyb250XFxqdXN0Y29tX3ZmLWRldlxcanVzdENvbS13ZWJhcHAvc3JjXFxhcHBcXHBhZ2VzXFxkb2N1bWVudFxcZGVsZXRlLWZpbGUtY29uZmlybWF0aW9uXFxkZWxldGUtZmlsZS1jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBb0I7RUFDcEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLDRCQUE0QjtFQUM1Qiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLDRCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZG9jdW1lbnQvZGVsZXRlLWZpbGUtY29uZmlybWF0aW9uL2RlbGV0ZS1maWxlLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1sYWJlbC5uZy1zdGFyLWluc2VydGVkIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICB9XG4gIFxuICAuZGlhbG9nLWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA1NzIzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtaW4taGVpZ2h0OiAyLjE4OHJlbTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgfVxuICBcbiAgLmxhYmVsLWRpYWxvZy1oZWFkZXItYXJ7XG4gICAgZm9udC1zaXplOiAxLjRyZW0gIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAubGFiZWwtZGlhbG9nLWhlYWRlci1mcntcbiAgICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/pages/document/delete-file-confirmation/delete-file-confirmation.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/document/delete-file-confirmation/delete-file-confirmation.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DeleteFileConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFileConfirmationComponent", function() { return DeleteFileConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");




var DeleteFileConfirmationComponent = /** @class */ (function () {
    function DeleteFileConfirmationComponent(dialogRef, data, translate) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.translate = translate;
        this.translate.onDefaultLangChange.subscribe(function (language) {
            console.log(_this.translate.getDefaultLang() + ' vs ' + language.lang);
            _this.currentLang = language.lang;
        });
    }
    DeleteFileConfirmationComponent.prototype.ngOnInit = function () {
        this.currentLang = this.translate.getDefaultLang();
    };
    DeleteFileConfirmationComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    DeleteFileConfirmationComponent.prototype.close = function (feedback) {
        if (feedback === void 0) { feedback = null; }
        this.dialogRef.close(feedback);
    };
    DeleteFileConfirmationComponent.prototype.delete = function () {
        this.close({ status: 'OK' });
    };
    DeleteFileConfirmationComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
    ]; };
    DeleteFileConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-file-confirmation',
            template: __webpack_require__(/*! raw-loader!./delete-file-confirmation.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/document/delete-file-confirmation/delete-file-confirmation.component.html"),
            styles: [__webpack_require__(/*! ./delete-file-confirmation.component.scss */ "./src/app/pages/document/delete-file-confirmation/delete-file-confirmation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], DeleteFileConfirmationComponent);
    return DeleteFileConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/pages/document/delete/delete.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/document/delete/delete.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3VtZW50L2RlbGV0ZS9kZWxldGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/document/delete/delete.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/document/delete/delete.component.ts ***!
  \***********************************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeleteComponent = /** @class */ (function () {
    function DeleteComponent() {
    }
    DeleteComponent.prototype.ngOnInit = function () {
    };
    DeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete',
            template: __webpack_require__(/*! raw-loader!./delete.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/document/delete/delete.component.html"),
            styles: [__webpack_require__(/*! ./delete.component.scss */ "./src/app/pages/document/delete/delete.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeleteComponent);
    return DeleteComponent;
}());



/***/ }),

/***/ "./src/app/pages/document/document-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/document/document-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DocumentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentRoutingModule", function() { return DocumentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_edit_document_add_edit_document_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-document/add-edit-document.component */ "./src/app/pages/document/add-edit-document/add-edit-document.component.ts");
/* harmony import */ var _document_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./document.component */ "./src/app/pages/document/document.component.ts");





var routes = [
    {
        path: '',
        children: [
            {
                path: 'documentSave/addEdit',
                component: _add_edit_document_add_edit_document_component__WEBPACK_IMPORTED_MODULE_3__["AddEditDocumentComponent"],
                data: {
                    title: 'Access Data Page'
                }
            },
            {
                path: 'documentSave',
                component: _document_component__WEBPACK_IMPORTED_MODULE_4__["DocumentComponent"],
                data: {
                    title: 'Log Data Page'
                }
            },
        ]
    }
];
var DocumentRoutingModule = /** @class */ (function () {
    function DocumentRoutingModule() {
    }
    DocumentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DocumentRoutingModule);
    return DocumentRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/document/document.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/document/document.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-header-1 {\n  background-color: #205723;\n  color: white; }\n\n.card-header-2 {\n  background-color: #2e7d32;\n  color: white; }\n\n.card-header-3 {\n  background-color: #57975b;\n  color: white; }\n\nmat-header-cell {\n  background-color: #E0E0E0 !important;\n  color: black !important;\n  height: 1px !important; }\n\nmat-header-row {\n  min-height: 2.188rem;\n  font-weight: bold !important; }\n\n.mat-row:nth-child(even) {\n  background-color: white; }\n\n.mat-row:nth-child(odd) {\n  background-color: #FAFAFA; }\n\n.label-search-fr {\n  font-size: 0.813rem !important; }\n\n.label-search-ar {\n  font-size: 1.125rem !important; }\n\n.label-card-header-ar {\n  font-size: 1.4rem !important;\n  font-weight: bold !important; }\n\n.label-card-header-fr {\n  font-size: 1.1rem !important;\n  font-weight: bold !important; }\n\n.label-table-header-ar {\n  font-size: 1.25rem !important;\n  font-weight: bold !important; }\n\n.label-table-header-fr {\n  font-size: 1rem !important;\n  font-weight: bold !important; }\n\n.cell-table-fr {\n  font-size: 1rem !important; }\n\n.cell-table-ar {\n  font-size: 1.25rem !important; }\n\nlabel {\n  text-transform: none;\n  letter-spacing: 0px; }\n\nmat-label.ng-star-inserted {\n  text-transform: none;\n  letter-spacing: 0px; }\n\n.example-full-width {\n  width: 100%; }\n\n.search-card-btn-ar {\n  font-size: 1.2rem; }\n\n.search-card-btn-fr {\n  font-size: 1rem; }\n\n.rounded-t {\n  border-radius: 30px !important;\n  height: 1.75rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdW1lbnQvQzpcXFVzZXJzXFxTYWlkaVxcRGVza3RvcFxcd29ya3NwYWNlX3R1bmVwc1xcZnJvbnRcXGp1c3Rjb21fdmYtZGV2XFxqdXN0Q29tLXdlYmFwcC9zcmNcXGFwcFxccGFnZXNcXGRvY3VtZW50XFxkb2N1bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBRWQ7RUFDRSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUVkO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTs7QUFHZDtFQUNFLG9DQUFvQztFQUNwQyx1QkFBdUI7RUFDdkIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0Usb0JBQW9CO0VBQ3BCLDRCQUE0QixFQUFBOztBQU85QjtFQUNFLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLDRCQUE0QjtFQUM1Qiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSw0QkFBNEI7RUFDNUIsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsNkJBQTZCO0VBQzdCLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLDBCQUEwQjtFQUMxQiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSw2QkFBNkIsRUFBQTs7QUFjL0I7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLFdBQVcsRUFBQTs7QUFJYjtFQUNFLGlCQUNGLEVBQUE7O0FBRUE7RUFDRSxlQUNGLEVBQUE7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oZWFkZXItMXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA1NzIzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuY2FyZC1oZWFkZXItMntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU3ZDMyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuY2FyZC1oZWFkZXItM3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc5NzViO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgbWF0LWhlYWRlci1jZWxse1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDFweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICBtYXQtaGVhZGVyLXJvdyB7XG4gICAgbWluLWhlaWdodDogMi4xODhyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgXG4gIFxuICBcbiAgXG4gIC5tYXQtcm93Om50aC1jaGlsZChldmVuKXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgfVxuICBcbiAgLmxhYmVsLXNlYXJjaC1mcntcbiAgICBmb250LXNpemU6IDAuODEzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5sYWJlbC1zZWFyY2gtYXJ7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAubGFiZWwtY2FyZC1oZWFkZXItYXJ7XG4gICAgZm9udC1zaXplOiAxLjRyZW0gIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAubGFiZWwtY2FyZC1oZWFkZXItZnJ7XG4gICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAubGFiZWwtdGFibGUtaGVhZGVyLWFye1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5sYWJlbC10YWJsZS1oZWFkZXItZnJ7XG4gICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmNlbGwtdGFibGUtZnJ7XG4gICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5jZWxsLXRhYmxlLWFye1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAvL21hdC1jZWxsW2Rpcj1cInJ0bFwiXXtcbiAgLy8gIGZvbnQtc2l6ZTogMS4yNXJlbSAhaW1wb3J0YW50O1xuICAvL31cbiAgLy9cbiAgLy9tYXQtY2VsbFtkaXI9XCJsdHJcIl17XG4gIC8vICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgLy99XG4gIFxuICBcbiAgXG4gIFxuICBsYWJlbHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICB9XG4gIFxuICBtYXQtbGFiZWwubmctc3Rhci1pbnNlcnRlZCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgXG4gIC5zZWFyY2gtY2FyZC1idG4tYXJ7XG4gICAgZm9udC1zaXplOiAxLjJyZW1cbiAgfVxuICBcbiAgLnNlYXJjaC1jYXJkLWJ0bi1mcntcbiAgICBmb250LXNpemU6IDFyZW1cbiAgfVxuICBcbiAgLnJvdW5kZWQtdCB7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMS43NXJlbTtcbiAgfVxuICBcbiAgLy8ubWF0LWZvcm0tZmllbGQge1xuICAvLyAgaW5wdXQge1xuICAvLyAgICAmLmFtb3VudC1pbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIC8vICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgLy8gICAgICBkaXJlY3Rpb246IGx0ciAhaW1wb3J0YW50O1xuICAvLyAgICB9XG4gIC8vICB9XG4gIC8vfVxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/pages/document/document.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/document/document.component.ts ***!
  \******************************************************/
/*! exports provided: DocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _app_shared_services_document_document_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/services/document/document.service */ "./src/app/shared/services/document/document.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _add_edit_document_add_edit_document_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-edit-document/add-edit-document.component */ "./src/app/pages/document/add-edit-document/add-edit-document.component.ts");
/* harmony import */ var _app_shared_constante__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/constante */ "./src/app/shared/constante/index.ts");











var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(documentService, searchObjectTreatment, configService, translate, dialog) {
        var _this = this;
        this.documentService = documentService;
        this.searchObjectTreatment = searchObjectTreatment;
        this.configService = configService;
        this.translate = translate;
        this.dialog = dialog;
        this.typSrc = " ";
        this.rows = [];
        this.temp = [];
        this.displayedColumns = ['libelleTypeDoc', 'libelleNatureDoc', 'nomFichier', 'nbreCopie', 'action'];
        this.config = {};
        this.translate.onDefaultLangChange.subscribe(function (language) {
            _this.currentLang = language.lang;
        });
    }
    DocumentComponent.prototype.ngOnInit = function () {
        this.config = this.configService.templateConf;
        this.currentLang = this.translate.getDefaultLang();
        this.searchObject = this.searchObjectTreatment.treatementSearchObject(5, 0, "dtMaj", "desc nulls last");
        this.initDataListDocument();
        /*
             this.documentService.documentAddedSubject.subscribe((data) => {
              this.dataSource = null;
              this. getListDocument();
            }) */
    };
    DocumentComponent.prototype.initDataListDocument = function () {
        var _this = this;
        debugger;
        this.documentService.getListDocumentWithFiltre(this.idSrc, this.typSrc, this.searchObject).subscribe(function (response) {
            if (response['code'] === _app_shared_constante__WEBPACK_IMPORTED_MODULE_10__["CONSTANTE_WS"].SUCCESS) {
                _this.countPage = response['payload']['total'];
                _this.rows = response['payload']['data'];
                _this.countPage = response['payload']['total'];
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](response['payload']['data']);
                console.log(_this.dataSource);
                _this.temp = _this.rows;
            }
        }, function (error) {
            console.log('error :: ' + error);
        });
    };
    DocumentComponent.prototype.getListDocument = function () {
        var _this = this;
        this.documentService.getListDocumentWhitoutFilte().subscribe(function (response) {
            if (response['code'] === '200') {
                _this.listeDoc = response['payload'];
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.listeDoc);
                console.log("listeeeentite", _this.listeDoc);
            }
        }, function (error) {
            console.log('error :: ' + error);
        });
    };
    DocumentComponent.prototype.getDocById = function (id) {
        var _this = this;
        this.documentService.getListDocumentById(id).subscribe(function (response) {
            if (response['code'] === '200') {
                _this.documentById = response['payload'];
            }
        }, function (err) {
            console.log(err);
        });
    };
    DocumentComponent.prototype.getRow = function (doc) {
        this.selectedDocument = doc;
        if (this.selectedDocument.id != null) {
            this.getDocById(this.selectedDocument.id);
        }
    };
    DocumentComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue;
    };
    DocumentComponent.prototype.onPaginateChange = function (event) {
        this.searchObject.pagination.offSet = event['pageIndex'];
        this.searchObject.pagination.limit = event['pageSize'];
        this.initDataListDocument();
    };
    DocumentComponent.prototype.onAddDocument = function () {
        var _this = this;
        debugger;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '65%';
        dialogConfig.direction = this.currentLang === 'ar' ? 'rtl' : 'ltr';
        dialogConfig.closeOnNavigation = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.data = {
            idSrc: this.idSrc,
            typSrc: this.typSrc,
            fedit: true,
            fadd: false
        };
        console.log("ffffffffffffffff", dialogConfig.data);
        var dialogRef = this.dialog.open(_add_edit_document_add_edit_document_component__WEBPACK_IMPORTED_MODULE_9__["AddEditDocumentComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result && result.status === 'OK') {
                _this.searchObject = _this.searchObjectTreatment.treatementSearchObject(5, 0, "dtMaj", "desc nulls last");
                _this.initDataListDocument();
            }
        });
    };
    DocumentComponent.prototype.onEditDocument = function () {
        var _this = this;
        debugger;
        var docModif;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '65%';
        dialogConfig.direction = this.currentLang === 'ar' ? 'rtl' : 'ltr';
        dialogConfig.closeOnNavigation = true;
        dialogConfig.hasBackdrop = true;
        //docModif = {};
        this.currentlistDoc = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.selectedDocument);
        docModif = this.currentlistDoc;
        dialogConfig.data = {
            docModif: docModif,
            idSrc: this.idSrc,
            typSrc: this.typSrc,
            fedit: false,
            fadd: true
        };
        var dialogRef = this.dialog.open(_add_edit_document_add_edit_document_component__WEBPACK_IMPORTED_MODULE_9__["AddEditDocumentComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result && result.status === 'OK') {
                _this.searchObject = _this.searchObjectTreatment.treatementSearchObject(5, 0, "dtMaj", "desc nulls last");
                _this.initDataListDocument();
            }
        });
    };
    DocumentComponent.ctorParameters = function () { return [
        { type: _app_shared_services_document_document_service__WEBPACK_IMPORTED_MODULE_7__["DocumentService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_5__["SearchObjectTreatment"] },
        { type: _app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DocumentComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('matSort', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], DocumentComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DocumentComponent.prototype, "idSrc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DocumentComponent.prototype, "typSrc", void 0);
    DocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-document',
            template: __webpack_require__(/*! raw-loader!./document.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/document/document.component.html"),
            styles: [__webpack_require__(/*! ./document.component.scss */ "./src/app/pages/document/document.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_shared_services_document_document_service__WEBPACK_IMPORTED_MODULE_7__["DocumentService"], _app_shared__WEBPACK_IMPORTED_MODULE_5__["SearchObjectTreatment"],
            _app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], DocumentComponent);
    return DocumentComponent;
}());



/***/ }),

/***/ "./src/app/pages/document/document.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/document/document.module.ts ***!
  \***************************************************/
/*! exports provided: DocumentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentModule", function() { return DocumentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _app_shared_services_PaginatorService_pagintor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/PaginatorService/pagintor.service */ "./src/app/shared/services/PaginatorService/pagintor.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/fesm2015/material-moment-adapter.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _add_edit_document_add_edit_document_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-edit-document/add-edit-document.component */ "./src/app/pages/document/add-edit-document/add-edit-document.component.ts");
/* harmony import */ var _document_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./document-routing.module */ "./src/app/pages/document/document-routing.module.ts");
/* harmony import */ var _document_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./document.component */ "./src/app/pages/document/document.component.ts");
/* harmony import */ var _app_components_ui_components_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/components/ui-components.module */ "./src/app/components/ui-components.module.ts");
/* harmony import */ var _delete_file_confirmation_delete_file_confirmation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./delete-file-confirmation/delete-file-confirmation.component */ "./src/app/pages/document/delete-file-confirmation/delete-file-confirmation.component.ts");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./delete/delete.component */ "./src/app/pages/document/delete/delete.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
























var DocumentModule = /** @class */ (function () {
    function DocumentModule() {
    }
    DocumentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _add_edit_document_add_edit_document_component__WEBPACK_IMPORTED_MODULE_15__["AddEditDocumentComponent"],
                _document_component__WEBPACK_IMPORTED_MODULE_17__["DocumentComponent"],
                _delete_file_confirmation_delete_file_confirmation_component__WEBPACK_IMPORTED_MODULE_19__["DeleteFileConfirmationComponent"],
                _delete_delete_component__WEBPACK_IMPORTED_MODULE_20__["DeleteComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _document_routing_module__WEBPACK_IMPORTED_MODULE_16__["DocumentRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                // DataTablesModule,
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__["NgxDatatableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDatepickerModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_21__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__["MatMomentDateModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _app_components_ui_components_module__WEBPACK_IMPORTED_MODULE_18__["UIComponentsModule"]
            ],
            exports: [
                _add_edit_document_add_edit_document_component__WEBPACK_IMPORTED_MODULE_15__["AddEditDocumentComponent"], _document_component__WEBPACK_IMPORTED_MODULE_17__["DocumentComponent"]
            ],
            providers: [
                {
                    provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorIntl"],
                    useFactory: function (translate) {
                        var service = new _app_shared_services_PaginatorService_pagintor_service__WEBPACK_IMPORTED_MODULE_5__["PagintorService"]();
                        service.injectTranslateService(translate);
                        return service;
                    },
                    deps: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]],
                },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"], useValue: {} },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"], useValue: [] }
                //   { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
                // { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
                // { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
            ],
            entryComponents: [_add_edit_document_add_edit_document_component__WEBPACK_IMPORTED_MODULE_15__["AddEditDocumentComponent"], _document_component__WEBPACK_IMPORTED_MODULE_17__["DocumentComponent"], _delete_file_confirmation_delete_file_confirmation_component__WEBPACK_IMPORTED_MODULE_19__["DeleteFileConfirmationComponent"]]
        })
    ], DocumentModule);
    return DocumentModule;
}());



/***/ }),

/***/ "./src/app/shared/constante/constante_document_url.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/constante/constante_document_url.ts ***!
  \************************************************************/
/*! exports provided: CONSTANTE_DOCUMENT_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTANTE_DOCUMENT_URL", function() { return CONSTANTE_DOCUMENT_URL; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");

var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
var CONSTANTE_DOCUMENT_URL = {
    URL_NATURE_DOC: url + "/app/nomenclature/natureDoc",
    URL_DOC_ADDED_UPLOAD: url + "/ged/document/data/file/",
    URL_NATURE_DOC_DATA: url + "/app/nomenclature/natureDoc/data",
    URL_DOC_FILTRE: url + "/ged/document/data",
    URL_DOC_LIST: url + "/ged/document/",
    URL_DOC_NOT_FILTRE: url + "/ged/document/documents",
    URL_TYPE_DOC_GED_NOT_FILTRE: url + "/ged/nomenclature/type/document",
    URL_TYPE_DOC_GED_FILTRE: url + "/ged/nomenclature/type/data",
    URL_TYPE_DOC_FILTRE_GED: url + "/ged/nomenclature/type/data",
    URL_TYPE_DOC_NO_FILTRE_GED: url + "/ged/nomenclature/type/document",
    URL_NATURE_DOC_FILTRE_GED: url + "/ged/nomenclature/nature/data",
    URL_NATURE_DOC_NO_FILTRE_GED: url + "/ged/nomenclature/nature/document",
    URL_DOWNLOAD_FILE: url + "/ged/document/download",
};


/***/ }),

/***/ "./src/app/shared/entites/document/NatureDoc.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/entites/document/NatureDoc.ts ***!
  \******************************************************/
/*! exports provided: NatureDoc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NatureDoc", function() { return NatureDoc; });
var NatureDoc = /** @class */ (function () {
    function NatureDoc(id, code, libelleAr, libelleFr, ordre) {
        this.id = id;
        this.code = code;
        this.libelleAr = libelleAr;
        this.libelleFr = libelleFr;
        this.ordre = ordre;
    }
    NatureDoc.ctorParameters = function () { return [
        null,
        null,
        null,
        null,
        null
    ]; };
    return NatureDoc;
}());



/***/ }),

/***/ "./src/app/shared/entites/document/TypeDoc.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/entites/document/TypeDoc.ts ***!
  \****************************************************/
/*! exports provided: TypeDoc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeDoc", function() { return TypeDoc; });
var TypeDoc = /** @class */ (function () {
    function TypeDoc(id, code, libelleAr, libelleFr, ordre) {
        this.id = id;
        this.code = code;
        this.libelleAr = libelleAr;
        this.libelleFr = libelleFr;
        this.ordre = ordre;
    }
    TypeDoc.ctorParameters = function () { return [
        null,
        null,
        null,
        null,
        null
    ]; };
    return TypeDoc;
}());



/***/ }),

/***/ "./src/app/shared/services/document/document.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/document/document.service.ts ***!
  \**************************************************************/
/*! exports provided: DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return DocumentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared_constante_constante_document_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/constante/constante_document_url */ "./src/app/shared/constante/constante_document_url.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var DocumentService = /** @class */ (function () {
    function DocumentService(http) {
        this.http = http;
        this.affModifDoc = false;
        this.documentAddedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    DocumentService.prototype.getListDocumentWithFiltre = function (idSrc, typeSrc, docForm) {
        debugger;
        return this.http.post("" + _app_shared_constante_constante_document_url__WEBPACK_IMPORTED_MODULE_3__["CONSTANTE_DOCUMENT_URL"].URL_DOC_FILTRE + '?idSrc=' + idSrc + '&typeSrc=' + typeSrc, docForm);
    };
    DocumentService.prototype.getListDocumentWhitoutFilte = function () {
        return this.http.get("" + _app_shared_constante_constante_document_url__WEBPACK_IMPORTED_MODULE_3__["CONSTANTE_DOCUMENT_URL"].URL_DOC_NOT_FILTRE);
    };
    DocumentService.prototype.getListDocumentById = function (id) {
        return this.http.get("" + _app_shared_constante_constante_document_url__WEBPACK_IMPORTED_MODULE_3__["CONSTANTE_DOCUMENT_URL"].URL_DOC_LIST + id);
    };
    DocumentService.prototype.updateDocument = function (fileToUpload, docForm) {
        debugger;
        var formData = new FormData();
        if (fileToUpload) {
            for (var i = 0; i < fileToUpload.length; i++) {
                formData.append('file', fileToUpload[i]);
            }
        }
        formData.append('data', JSON.stringify(docForm));
        return this.http.put("" + _app_shared_constante_constante_document_url__WEBPACK_IMPORTED_MODULE_3__["CONSTANTE_DOCUMENT_URL"].URL_DOC_LIST, formData);
    };
    DocumentService.prototype.listDocAdded = function (id) {
        return this.http.get("" + _app_shared_constante_constante_document_url__WEBPACK_IMPORTED_MODULE_3__["CONSTANTE_DOCUMENT_URL"].URL_DOC_ADDED_UPLOAD + id);
    };
    DocumentService.prototype.addDocument = function (fileToUpload, docForm) {
        debugger;
        var formData = new FormData();
        if (fileToUpload) {
            for (var i = 0; i < fileToUpload.length; i++) {
                formData.append('file', fileToUpload[i]);
            }
        }
        formData.append('data', JSON.stringify(docForm));
        console.log("adrttrst", formData);
        return this.http.post("" + _app_shared_constante_constante_document_url__WEBPACK_IMPORTED_MODULE_3__["CONSTANTE_DOCUMENT_URL"].URL_DOC_LIST, formData);
    };
    DocumentService.prototype.deleteDocument = function (id) {
        return this.http.delete("" + _app_shared_constante_constante_document_url__WEBPACK_IMPORTED_MODULE_3__["CONSTANTE_DOCUMENT_URL"].URL_DOC_LIST + id);
    };
    DocumentService.prototype.deleteFileWithNodeRef = function (nodeRef) {
        debugger;
        return this.http.delete("" + _app_shared_constante_constante_document_url__WEBPACK_IMPORTED_MODULE_3__["CONSTANTE_DOCUMENT_URL"].URL_DOC_LIST + "{nodeRefFils}", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('nodeRef', nodeRef)
        });
    };
    DocumentService.prototype.getListNatureDoc = function () {
        return this.http.get("" + _app_shared_constante_constante_document_url__WEBPACK_IMPORTED_MODULE_3__["CONSTANTE_DOCUMENT_URL"].URL_NATURE_DOC_NO_FILTRE_GED);
    };
    DocumentService.prototype.getListNatureDocWithFilter = function (NatureDocForm) {
        return this.http.post("" + _app_shared_constante_constante_document_url__WEBPACK_IMPORTED_MODULE_3__["CONSTANTE_DOCUMENT_URL"].URL_NATURE_DOC_FILTRE_GED, NatureDocForm);
    };
    DocumentService.prototype.getListTypeDoc = function () {
        return this.http.get("" + _app_shared_constante_constante_document_url__WEBPACK_IMPORTED_MODULE_3__["CONSTANTE_DOCUMENT_URL"].URL_TYPE_DOC_NO_FILTRE_GED);
    };
    DocumentService.prototype.getListTypeDocFiltre = function (typeFormDoc) {
        return this.http.post("" + _app_shared_constante_constante_document_url__WEBPACK_IMPORTED_MODULE_3__["CONSTANTE_DOCUMENT_URL"].URL_TYPE_DOC_FILTRE_GED, typeFormDoc);
    };
    DocumentService.prototype.selectDoc = function (document) {
        debugger;
        this.documentAddedSubject.next(document);
    };
    DocumentService.prototype.DowloadFile = function (nodeRef) {
        debugger;
        return this.http.get("" + _app_shared_constante_constante_document_url__WEBPACK_IMPORTED_MODULE_3__["CONSTANTE_DOCUMENT_URL"].URL_DOWNLOAD_FILE, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('nodeRef', nodeRef),
            responseType: 'blob'
        });
    };
    DocumentService.prototype.getfileToDownloaByParam = function (CodeEtat, doc) {
        return this.http.post("" + _app_shared_constante_constante_document_url__WEBPACK_IMPORTED_MODULE_3__["CONSTANTE_DOCUMENT_URL"].URL_DOWNLOAD_FILE +
            "/Param", doc, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('CodeEtat', CodeEtat),
            responseType: 'blob'
        });
    };
    DocumentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    DocumentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DocumentService);
    return DocumentService;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-bo-bo-module~pages-document-document-module~pages-dossiers-dossier-module-es5.js.map