import { environment } from '../../../environments/environment';
const url = environment.apiUrl;

export const CONSTANTE_NOTIFICATION_URL = {

  SERVER_URL_SOCKET: `http://localhost:8096/socket`,

  // NOTIF
  URL_COUNT_NOTIF: `${url}/notification/notif/count`,

  // NOTIF
  URL_DATA_NOTIF: `${url}/notification/notif/data`,

};
