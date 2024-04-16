import { LoadMenuItemsServiceService } from './../../load-menu-items.service.service';
import { Component,  OnInit, ViewEncapsulation } from '@angular/core';
import { TicketsService } from '../tickets.service';
import { Products } from '../ticketsInterface';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css','./responsive.css'],
  encapsulation : ViewEncapsulation.None
})
export class TicketsComponent implements OnInit{
   productArr:Products[]=[];
   menueitems:any[] =[];
   searchValue:string ="";
  constructor(private ticketdataService:TicketsService ,private loadmenu:LoadMenuItemsServiceService)
  {

  }

  ngOnInit():void {
    this.menueitems.push(...this.loadmenu.getmenuItems())
    this.productArr.push(...this.ticketdataService.getTickets());
    console.log(this.productArr);

  }






  // onSort(event:any){
  //     console.log(event)
  //     let newarr:Products[] =[];
  //      newarr =this.productArr.reverse()
  //     console.log(newarr);
  //     this.productArr = [];
  //     this.productArr.push(...newarr)

  //     console.log(this.productArr)

  // }

  // onsearch()
  // {
  //   console.log(this.searchValue);
  //   let searchRes:Tickets[] = [];
  //   for(let i=0 ; i<this.productArr.length;i++)
  //   {
  //     console.log(this.productArr[i]._user.name)
  //     if(this.searchValue === this.productArr[i]._user.name)
  //     {

  //       searchRes[0]= this.productArr[i];
  //       this.productArr =[];
  //       this.productArr.push(...searchRes)
  //       setTimeout(() =>{
  //         this.ngOnInit();
  //                },4000)
  //                break;
  //               }


  //   }
  // }


}
