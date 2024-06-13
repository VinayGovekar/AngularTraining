type employee = {
    name:string
    dept:string
}

type player ={
    team:string;
}


type combinedType=employee & player;

var sachin:combinedType = {
    name:"",
    dept:"",
    team:""
}