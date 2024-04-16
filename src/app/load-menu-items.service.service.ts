import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class LoadMenuItemsServiceService {

  menuHtmlItems:MenuItem[]=[];
  constructor() { }

  getmenuItems():Array<any>
  {

    this.menuHtmlItems.push({label:"Home",items:[{icon:`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none"><path d="M18.6848 6.675L13.0218 2.30833C11.9151 1.45833 10.1859 1.45 9.08792 2.3L3.4249 6.675C2.61219 7.3 2.11938 8.55 2.2923 9.53333L3.38167 15.8167C3.6324 17.225 4.9898 18.3333 6.46823 18.3333H15.6328C17.094 18.3333 18.4773 17.2 18.728 15.8083L19.8174 9.525C19.973 8.55 19.4802 7.3 18.6848 6.675ZM11.699 15C11.699 15.3417 11.405 15.625 11.0505 15.625C10.696 15.625 10.4021 15.3417 10.4021 15V12.5C10.4021 12.1583 10.696 11.875 11.0505 11.875C11.405 11.875 11.699 12.1583 11.699 12.5V15Z" fill="#FEEE00"/> </svg>`}]})


    return this.menuHtmlItems
  }

}
