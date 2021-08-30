 import { environment } from '@environments/environment';

const url = environment.apiUrl;

export const CONSTANTE_DOCUMENT_URL ={

    URL_NATURE_DOC : `${url}/app/nomenclature/natureDoc`,
    URL_DOC_ADDED_UPLOAD : `${url}/ged/document/data/file/`,
    URL_NATURE_DOC_DATA : `${url}/app/nomenclature/natureDoc/data`,
    URL_DOC_FILTRE: `${url}/ged/document/data`,
    URL_DOC_LIST:`${url}/ged/document/`,
    URL_DOC_NOT_FILTRE: `${url}/ged/document/documents`,
    URL_TYPE_DOC_GED_NOT_FILTRE : `${url}/ged/nomenclature/type/document`,
    URL_TYPE_DOC_GED_FILTRE : `${url}/ged/nomenclature/type/data`,
    URL_TYPE_DOC_FILTRE_GED: `${url}/ged/nomenclature/type/data`,
    URL_TYPE_DOC_NO_FILTRE_GED:`${url}/ged/nomenclature/type/document`,
    URL_NATURE_DOC_FILTRE_GED:`${url}/ged/nomenclature/nature/data`,
    URL_NATURE_DOC_NO_FILTRE_GED:`${url}/ged/nomenclature/nature/document`,
    URL_DOWNLOAD_FILE:`${url}/ged/document/download`,




}
