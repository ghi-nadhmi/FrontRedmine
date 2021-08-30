import { environment } from '@environments/environment';
const url = environment.apiUrl;

export const CONSTANTE_DEVISE_URL = {

    URL_DEVISE: `${url}/app/nomenclature/devise/`,
    URL_DEVISE_DATA : `${url}/app/nomenclature/devise/data`,
    URL_DEVISE_BY_CODE : `${url}/app/nomenclature/devise/findDevByCode?code=`
}