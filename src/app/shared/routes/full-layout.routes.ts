import {Routes, RouterModule} from '@angular/router';

// Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('@app/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  
  {
    path: 'components',
    loadChildren: () => import('@app/components/ui-components.module').then(m => m.UIComponentsModule)
  },

  {
    path: 'test',
    loadChildren: () => import('../../pages/test/test.module').then(m => m.TestModule)
  },

  {
    path: 'nomenclature',
    loadChildren: () => import('../../pages/nomenclature/nomenclature.module').then(m => m.NomenclatureModule)
  },

   
  
  {
    path: 'objetSaisi',
    loadChildren: () => import('../../pages/objetSaisi/objet-saisi.module').then(m => m.ObjetSaisiModule)
},
  {
    path: 'administration',
    loadChildren: () => import('../../pages/administration/profils/profil.module').then(m => m.ProfilModule)
},
{
  path: 'pers',
  loadChildren: () => import('../../pages/administration/Personnelles/personnel.module').then(m => m.PersonnelModule)
},

{
  path: 'utilistaurs',
  loadChildren: () => import('../../pages/administration/Utilisateurs/utilisateur.module').then(m => m.UtilisateurModule)
},

{
  path: 'decision',
  loadChildren: () => import('../../pages/decisionDossiers/decision-dossier.module').then(m => m.DecisionDossierModule)
},





];

