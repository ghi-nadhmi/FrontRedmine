import { environment } from '@environments/environment';

const url = environment.apiUrl;

export const CONSTANTE_ACCOUNT_URL = {
    AUTHENTICATE: `${url}/authenticate`,

    WHOIAM: `${url}/account/whoiam`,
    FUNCTION: `${url}/account/function`,
    WHOAMI:`${url}/account/whoiam`,
};
