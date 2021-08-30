import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTE_DOCUMENT_URL } from '@app/shared/constante/constante_document_url';
import { Doc } from '@app/shared/entites/document/Doc';
import { VDoc } from '@app/shared/entites/document/VDoc';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  affModifDoc: boolean = false;

  documentAddedSubject = new Subject<VDoc>();

  constructor(private http: HttpClient) { }

  getListDocumentWithFiltre(idSrc: number, typeSrc: string, docForm: any) {
    debugger
    return this.http.post(`${CONSTANTE_DOCUMENT_URL.URL_DOC_FILTRE}` + '?idSrc=' + idSrc + '&typeSrc=' + typeSrc, docForm);
  }
  getListDocumentWhitoutFilte() {
    return this.http.get(`${CONSTANTE_DOCUMENT_URL.URL_DOC_NOT_FILTRE}`);
  }
  getListDocumentById(id: any) {
    return this.http.get(`${CONSTANTE_DOCUMENT_URL.URL_DOC_LIST}` + id);
  }
  updateDocument(fileToUpload: any, docForm: any) {

    debugger;
    const formData: FormData = new FormData();

    if (fileToUpload) {
      for (let i = 0; i < fileToUpload.length; i++) {
        formData.append('file', fileToUpload[i]);
      }
    }
    formData.append('data', JSON.stringify(docForm));
    return this.http.put(`${CONSTANTE_DOCUMENT_URL.URL_DOC_LIST}`, formData);

  }

  listDocAdded(id) {
    return this.http.get(`${CONSTANTE_DOCUMENT_URL.URL_DOC_ADDED_UPLOAD}` + id);
  }

  addDocument(fileToUpload: any, docForm: any) {
    debugger;
    const formData: FormData = new FormData();
    if (fileToUpload) {
      for (let i = 0; i < fileToUpload.length; i++) {
        formData.append('file', fileToUpload[i]);
      }

    }
    formData.append('data', JSON.stringify(docForm));
    console.log("adrttrst", formData);
    return this.http.post(`${CONSTANTE_DOCUMENT_URL.URL_DOC_LIST}`, formData);
  }


  deleteDocument(id: any) {
    return this.http.delete(`${CONSTANTE_DOCUMENT_URL.URL_DOC_LIST}` + id);
  }

  deleteFileWithNodeRef(nodeRef) {
    debugger;
    return this.http.delete(`${CONSTANTE_DOCUMENT_URL.URL_DOC_LIST}` + "{nodeRefFils}", {
      params: new HttpParams()
        .set('nodeRef', nodeRef)
    });
  }

  getListNatureDoc() {
    return this.http.get(`${CONSTANTE_DOCUMENT_URL.URL_NATURE_DOC_NO_FILTRE_GED}`);
  }

  getListNatureDocWithFilter(NatureDocForm) {
    return this.http.post(`${CONSTANTE_DOCUMENT_URL.URL_NATURE_DOC_FILTRE_GED}`, NatureDocForm);
  }
  getListTypeDoc() {
    return this.http.get(`${CONSTANTE_DOCUMENT_URL.URL_TYPE_DOC_NO_FILTRE_GED}`);
  }
  getListTypeDocFiltre(typeFormDoc) {
    return this.http.post(`${CONSTANTE_DOCUMENT_URL.URL_TYPE_DOC_FILTRE_GED}`, typeFormDoc);
  }

  public selectDoc(document: VDoc) {
    debugger;
    this.documentAddedSubject.next(document);

  }

  DowloadFile(nodeRef) {
    debugger;
    return this.http.get(`${CONSTANTE_DOCUMENT_URL.URL_DOWNLOAD_FILE}`, {
      params: new HttpParams()
        .set('nodeRef', nodeRef)

      , responseType: 'blob'
    });
  }

  getfileToDownloaByParam(CodeEtat: any, doc: any) {
    return this.http.post(`${CONSTANTE_DOCUMENT_URL.URL_DOWNLOAD_FILE}` +
     "/Param" ,doc, {
      params: new HttpParams().set('CodeEtat', CodeEtat),
      responseType: 'blob'
    });
     
   

  }
}
