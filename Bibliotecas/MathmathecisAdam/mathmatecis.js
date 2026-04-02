const simbolos=["i","v","x","l","c","d"]
const controles=[[]]
const mapaSimbolos=[
    ["m",1000],
    ["xm",990],
    ["d",500],
    ["xd",490],
    ["c",100],
    ["xc",90],
    ["l",50],
    ["xl",40],
    ["x",10],
    ["ix",9],
    ["v",5],
    ["iv",4],
    ["i",1],
]
function roman(parametro){
    let result=""
    for (const [simbolo, valor] of mapaSimbolos)
    {
        while(parametro>=valor){
           result+=simbolo
           parametro-=valor
        }
    }
    return result;
}
function EumMultiplo(parametro1, parametro2)
{
    let n1=parametro1;
    let n2=parametro2;
    let divisao=n1/n2
    let arredondar=Math.floor(divisao)
    if(divisao==arredondar)
    {
        return true;
    }else{
        return false;
    }
}
function par(num){
    n=Number(num)
    if(n/2==Math.floor(n/2)){return true}else{return false;}

}
function inpar(num){
    n=Number(num)
    if(n/2==Math.floor(n/2)){return false}else{return true;}

}
function Roman50(parametro){
    let numeral=Number(parametro)
    let romanoo=""
    if(numeral>50){romanoo=romanoo+simbolos[3];}
    if (numeral<=3)
    {
        for (let qdi=0; qdi<numeral; qdi++)
        {
            romanoo=romanoo+simbolos[0];
            continue;      

        }
        return romanoo;
    }
    if(numeral==4)
    {
       romanoo=romanoo+simbolos[0]+simbolos[1]
    }
    if(numeral>=5 && numeral<9)
    {
        let quantia=numeral-5
        romanoo=romanoo+simbolos[1];
        for (let repetes=0; repetes<quantia;repetes++)
        {
            romanoo=romanoo+simbolos[0];
            continue;
        }
        return romanoo;
    }
    if (numeral==9)
    {
        romanoo=romanoo+simbolos[0]+simbolos[2];
        return romanoo;
    }
    if (numeral/10==Math.floor(numeral/10))
    {
        let repeticoes=Math.floor(numeral/10)
        for(let qdi=0; qdi<repeticoes; qdi++)
        {
            romanoo=romanoo+simbolos[2];
            continue;
        }
        return romanoo;
    }
    if(numeral==50){romanoo=romanoo+simbolos[3]; return romanoo}
}
function Porcento(p1,p2){
    let p2SobreCem=p2/100
    let porcentagem=p2SobreCem*p1
    return porcentagem;
}
function UnPorcento(p1,p2){
   let multi= p2*100
   let p1DeP2=p1*multi
   return p1DeP2/10000;
}
function pegarFloat(num){
    return num-Math.floor(num);
}
function infinito(num){
    if(num>=Number.MAX_SAFE_INTEGER){
        return true;
    }else{
        return false;
    }
}

function NegativoInfinito(num){
    if(num<=Number.MIN_SAFE_INTEGER){
        return true;
    }else{
        return false;
    }
}