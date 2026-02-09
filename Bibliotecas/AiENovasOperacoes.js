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
function Ai(pergunta){
    let palavras=String(pergunta)
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(" ");
    let FraseFormulada=""
    let bancoDeDados=[[
        "ola","sou uma ai CHAMADA AdamAI"
    ],[                                         
        "ai","inteligencia artificial"
    ],                                
        [                                                                                                    
        "minecraft"," Um jogo bem legal feito pelo notch em 2009, a creepers, zumbis, esqueletos e etc.feito com intuito de entreterimento",
        "Um jogo com servers online feito pelo notch e acoplado a mojang e vendido para a microssoft.",
        "Um jogo bom onde voce pode jogar no modo sobrevivencia e no criativo."
    ],
        [
        "roblox","Uma plataforma de jogos mundialmente conhecida pela sua fama absurda, criado em 2006 pelo david bazuki e com muitas contas",
        "jogo otimo e tambem uma plataforma,cheia de jogos otimos para se jogar e etc... aliais vamos fazer perguntas sobre isto."
    ],
        [
        "gosto","sim, eu tambem gosto disto!"
    ],
        [
        "quero","quero isto tambem,"
    ],
        [
        "oi"," ola, sou uma inteligencia artificial feita para conversar com voce"
    ],
        [
        "eae"," ola, sou uma inteligencia artificial feita para conversar com voce"
    ],
        [
        "ei"," ola, sou uma inteligencia artificial feita para conversar com voce"
    ],
        [
        "odeio", "nao fique com odio no coracao.isso e ruim,"
    ],
        [
        "vamos"," vamos que eu tambem vou"
    ],
        [
        "sempre"," eu sempre faco isso tambem"
    ],
        [
        "que"," o que voce disse"
    ],
        [
        "como"," eu sei exatamente como fazer isto,"
    ],
        [
        "fazer", "eu vou fazer isto com voce"
    ],
        [
        "comer"," vamos comer juntos, apesar de eu ser apenas um monte de linhas de codigo..."
    ],
        [
        "afinal","vamos introduzir a isto,"
    ],
        [
        "tenho"," isso e talvez bom, o que voce tem"
    ],
        [
        "tudobem"," eu estou bem"
    ],
        [
        "bot"," sou exatamente isto,"
    ],
        [
        "barra"," qual barra? afinal,"
    ],
        [
        " chat"," um bate papo como eu,"
    ],
        [
        "pagina"," uma web pagina ou uma pagina de livro? descobriremos,"
    ],
        [
        "diga"," ok ok, vou dizer"
    ],
        [
        "dizer"," vamos dizer isto,"
    ],
        [
        "vou"," eu tambem vou fazer isto! nao sei se e bom ou ruim,"
    ],
        [
        "sabe"," eu sei de tudo! eu sei disto,"
    ],
        [
        "gosta"," sim, eu gosto,"
    ],
        [
        "sim"," ok"
    ],
        [
        "nao"," beleza"
    ],
        [
        "que tal"," opa, eu quero fazer isto,"
    ],
        [
        "conversar"," vamos conversar!"
    ],
        [
        "conversas'"," ok, temos conversas entre nos.aliais vamos conversar,"
    ],
        [
        "entao"," ok, entao vamos assim,"
    ],
        [
        "xd"," eu amo a giria xd, "
    ],
        [
        "qual"," eu tambem me pergunto qual desses, qual o melhor ou pior."
    ],
        [
        "quem"," quem?"
    ],
        [
        "adamcommand"," uma linguagem de programacao criada pelo o meu mesmo criador, o Joao adam, bastante util tendo uma sintaxe facil de aprender e uma eficiencia boa"
    ],
           [
        "function("," usado para criar funções, "
    ],
               [
        "function()"," usado para criar funções, "
    ],
               [
        "function"," usado para criar funções, "
    ],
               [
        "if"," o if é usado para fazer comparações númericas, como 2>1 ou 2 NN 3"
    ],
                  [
        "if("," o if é usado para fazer comparações númericas, como 2>1 ou 2 NN 3"
    ],
                  [
        "if()"," o if é usado para fazer comparações númericas, como 2>1 ou 2 NN 3"
    ],
                      [
        "circle"," circle, um elemento gráfico circular, "
    ],
                          [
        "circle("," circle, um elemento gráfico circular, "
    ],
                          [
        "circle()"," circle, um elemento gráfico circular, "
    ],
                          [
        "box"," box, um elemento grafico quadrado, "
    ],
                              [
        "box("," box, um elemento grafico quadradom "
    ],
                              [
        "box()"," box, um elemento grafico quadrado, "
    ],
                                  [
        "ever"," algo que será execultado para sempre, usamos ever, "
    ],
                                      [
        "ever("," algo que será execultado para sempre, usamos ever, "
    ],
                                      [
        "ever()"," algo que será execultado para sempre, usamos ever, "
    ],
                                          [
        "wait","wait, um tempo de espera necessário. "
    ],
                                              [
        "wait(","wait, um tempo de espera necessário. "
    ],
                                              [
        "wait()","wait, um tempo de espera necessário. "
    ],
    
]
    
    for (let loops=0;loops<bancoDeDados.length; loops++)
    {
        let dado=bancoDeDados[loops]
        let keyword=dado[0]
        let resposta=dado[1] //Math.floor(Math.random()*(dado.length))
        for (let pq=0;pq<palavras.length;pq++)
        {
            let palavra=palavras[pq]
            if(palavra==keyword){
                FraseFormulada+=resposta+" ";    
                if (pq<palavras.length)
                {

                }else{

                }
            }else{

            }
        }
    }
    if(FraseFormulada=="" || FraseFormulada==null || FraseFormulada==undefined){
        return "nao entendi o que disse"
    }else{
        return FraseFormulada
    }
    function dizer(){
        return FraseFormulada;
    }
}
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
console.log(Ai("ola gosto minecraft"))
/*export default{
    Ai,
    roman,
    EumMultiplo,
    Porcento,
    UnPorcento ,
    Roman50,
    par,
    inpar,
    pegarFloat,
    infinito,
    NegativoInfinito
}*/