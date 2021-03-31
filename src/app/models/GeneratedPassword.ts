export interface GeneratedPassword{
    success:boolean;
    length:number;
    settings:{
        numbers:boolean;
        symbols:boolean;
        uppercase:boolean;
    }
    passwords:string[];
}