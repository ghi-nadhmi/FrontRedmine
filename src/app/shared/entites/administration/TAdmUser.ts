import { TAdmPersonnel } from '@app/shared';
import { TAdmProfile } from './TAdmProfile';

export class TAdmUser {
    idAdmUser: String;
    login: String;
    password: String;
    dateCreation: Date;
    dateUpdate: Date;
    dateExpired: Date;
    flgActif: Number;
    idAdmProfile: String;
    idAdmPersonnel: String;
    ipAddress: String;
    flgDelete: Boolean;
    confirmPassword: String;
    admProfile: TAdmProfile;
    admPersonnel: TAdmPersonnel;
}
