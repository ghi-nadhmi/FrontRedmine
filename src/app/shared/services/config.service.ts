import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { TemplateConfig } from '@app/shared';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public templateConf: TemplateConfig;

  dir = sessionStorage.getItem('direction');

  options = {
    layout: {
      variant: 'Light', // options:  Dark, Light & Transparent
      dir: this.dir? this.dir: 'rtl' , // Options: ltr, rtl
      customizer: {
        hidden: true // options: true, false
      },
      sidebar: {
        collapsed: false, // options: true, false
        size: 'sidebar-lg', // Options: 'sidebar-lg', 'sidebar-md', 'sidebar-sm'
        backgroundColor: 'grey-grey', // Options: 'black', 'pomegranate', 'king-yna', 'ibiza-sunset', 'flickr', 'purple-bliss', 'man-of-steel', 'purple-love', 'blue-grey-indigo-d4', 'blue-grey-blue-d4', 'blue-grey-blue','indigo-blue'

        /* If you want transparent layout add any of the following mentioned classes to backgroundColor of sidebar option :
          bg-glass-1, bg-glass-2, bg-glass-3, bg-glass-4, bg-hibiscus, bg-purple-pizzaz, bg-blue-lagoon, bg-electric-viloet, bg-protage, bg-tundora
        */
        backgroundImage: false, // Options: true, false | Set true to show background image
        backgroundImageURL: 'assets/img/sidebar-bg/09.png'
      }
    },
    // language: 'ar'
  };

  constructor() {
    this.setConfigValue(this.options);
  }

  setConfigValue(options: any) {
    this.templateConf = options;
  }

  setDirection (direction: string) {
    this.templateConf.layout.dir = direction;
  }


}
