
export interface Products {
  product: productData;
  pointOfsale: any;
  quantity: any;
  productstatus: string;
  category: string;
  taxe: string;
  minlimit:string;
  discount: string;
  saleDeltasvg: any;

}



interface productData{
  name: any ;
  number: any;
  imagesvg?: any;
}
//  interface productstatus_Category {
//   tichetNumberDescription: any;
//   TicketSize: any;
//   type: any;
// }

