import convertNumber from "../utils/convertNumber";


export class User{
    name = ""
    income = 0;
    education = ""

    constructor(params){
        this.name = params ? params.name ? params.name :  ""  : "";
        this.income = params ? params.income ? convertNumber(params.income) : 0:0
        this.education = params ? params.education : ""
    }
}