export class Foods{
    id!:number;
    price!:number;
    name!:string;
    favorite:boolean=false;
    star:number=0;
    tags?:string[];
    imgurl!:string;
    cooktime!:string;
    origins!:string[];
}