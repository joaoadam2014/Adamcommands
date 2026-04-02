let gostos={
    "minecraft":null,
    "roblox":null,
    "javascript":null,
    "c++":null,
    "c":null,
    "c#":null,
    "assembly":null,
    "animais":null,
 }
let vezes=localStorage.getItem("errosCometidos")
if(vezes==null || vezes==undefined || vezes===NaN){
    localStorage.setItem("errosCometidos", 0)
    vezes=0;
}
function ofender(boleannn){
    let tristeza=1
    if(boleannn===false){tristeza=tristeza*-1}
    vezes=Number(localStorage.getItem("errosCometidos"))+tristeza
    localStorage.setItem("errosCometidos", vezes)
}
const Boms=["e bom ","e top ","e otimo ","e bom demais "," e legal","? EU AMO ISSO!","e otimo para o cerebro!","? TOP","! AE!"]
const Ruims=["e uma porcaria"," e horrivel","e horroroso","e ruim","? QUE PORCARIA!","? NOME VEI FEI.","?Coisa de noob","? Nao adoro"]
async function Ai(pergunta){
    let respondidas=[]
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
                                                  [
        "decoder","Um descodificador[1] ou decodificador[2] é um circuito combinatório, que tem o papel do inverso do codificador, isto é, converte um código binário de entrada (natural , BCD,...) de N bits de entrada em M linha de saída (em que N pode ser qualquer inteiro e M é um inteiro menor ou igual a 2N), de modo que cada linha de saída será ativada por uma única combinação das possíveis de entrada ",
        "Em eletrônica digital, um descodificador pode ter a forma de, por exemplo, no livro do professor Campos Ferreira, um circuito lógico de múltiplas entradas e múltiplas saídas, que converte as entradas codificadas em saídas decodificadas"
    ],
                                                      [
        "decodificador","Um descodificador[1] ou decodificador[2] é um circuito combinatório, que tem o papel do inverso do codificador, isto é, converte um código binário de entrada (natural , BCD,...) de N bits de entrada em M linha de saída (em que N pode ser qualquer inteiro e M é um inteiro menor ou igual a 2N), de modo que cada linha de saída será ativada por uma única combinação das possíveis de entrada "
        ,"Em eletrônica digital, um descodificador pode ter a forma de, por exemplo, no livro do professor Campos Ferreira, um circuito lógico de múltiplas entradas e múltiplas saídas, que converte as entradas codificadas em saídas decodificadas"
    ],
        [
        "codificar","Um descodificador[1] ou decodificador[2] é um circuito combinatório, que tem o papel do inverso do codificador, isto é, converte um código binário de entrada (natural , BCD,...) de N bits de entrada em M linha de saída (em que N pode ser qualquer inteiro e M é um inteiro menor ou igual a 2N), de modo que cada linha de saída será ativada por uma única combinação das possíveis de entrada "
        ,"Em eletrônica digital, um descodificador pode ter a forma de, por exemplo, no livro do professor Campos Ferreira, um circuito lógico de múltiplas entradas e múltiplas saídas, que converte as entradas codificadas em saídas decodificadas"
    ],
        [
        "encoder","Um descodificador[1] ou decodificador[2] é um circuito combinatório, que tem o papel do inverso do codificador, isto é, converte um código binário de entrada (natural , BCD,...) de N bits de entrada em M linha de saída (em que N pode ser qualquer inteiro e M é um inteiro menor ou igual a 2N), de modo que cada linha de saída será ativada por uma única combinação das possíveis de entrada  "
        ,"Em eletrônica digital, um descodificador pode ter a forma de, por exemplo, no livro do professor Campos Ferreira, um circuito lógico de múltiplas entradas e múltiplas saídas, que converte as entradas codificadas em saídas decodificadas"
    ],
            [
        "encodificar","Um descodificador[1] ou decodificador[2] é um circuito combinatório, que tem o papel do inverso do codificador, isto é, converte um código binário de entrada (natural , BCD,...) de N bits de entrada em M linha de saída (em que N pode ser qualquer inteiro e M é um inteiro menor ou igual a 2N), de modo que cada linha de saída será ativada por uma única combinação das possíveis de entrada  "
        ,"Em eletrônica digital, um descodificador pode ter a forma de, por exemplo, no livro do professor Campos Ferreira, um circuito lógico de múltiplas entradas e múltiplas saídas, que converte as entradas codificadas em saídas decodificadas"
    ],
    [
        "javascript","JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e funcional).[2][3] Juntamente com HTML e CSS ",
        "como uma linguagem multiparadigma, o JavaScript suporta estilos de programação orientados a eventos, funcionais e imperativos (incluindo orientado a objetos e prototype-based), apresentando recursos como fechamentos (closures) e funções de alta ordem ",
        "Javascript Foi originalmente implementada como parte dos navegadores web para que scripts pudessem ser executados do lado do cliente e interagissem com o usuário sem a necessidade deste script passar pelo servidor, controlando o navegador "
    ],
        [
        "ecmascript","JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e funcional).[2][3] Juntamente com HTML e CSS ",
        "como uma linguagem multiparadigma, o JavaScript suporta estilos de programação orientados a eventos, funcionais e imperativos (incluindo orientado a objetos e prototype-based), apresentando recursos como fechamentos (closures) e funções de alta ordem ",
        "Javascript Foi originalmente implementada como parte dos navegadores web para que scripts pudessem ser executados do lado do cliente e interagissem com o usuário sem a necessidade deste script passar pelo servidor, controlando o navegador "
    ],
        [
        "js","JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e funcional).[2][3] Juntamente com HTML e CSS ",
        "como uma linguagem multiparadigma, o JavaScript suporta estilos de programação orientados a eventos, funcionais e imperativos (incluindo orientado a objetos e prototype-based), apresentando recursos como fechamentos (closures) e funções de alta ordem ",
        "Javascript Foi originalmente implementada como parte dos navegadores web para que scripts pudessem ser executados do lado do cliente e interagissem com o usuário sem a necessidade deste script passar pelo servidor, controlando o navegador "
    ],[
        "value(","É usado principalmente no AdamCommand para atribuir variaveis assim: value(nome;valor) e é possível chamar pelo nome o número; no javascript let é para variaveis dentro de funções, var é global e const nunca muda.Enfim muito útil",
        "Eu sei tudo sobre isso! você pode usar isto assim:value(nome;valor) e é possível chamar pelo o nome do número; Normalmente usado em várias linguagems para armazeanar números.Porém no Adamcommand, principalmente nas versões 1.0, 1.1 do AdamCommand, isto só declara números[...]Em breve (se você está em alguma versão 'antiga') será reformulado isto!"
    ],
    [
        "value()","É usado principalmente no AdamCommand para atribuir variaveis assim: value(nome;valor) e é possível chamar pelo nome o número; no javascript let é para variaveis dentro de funções, var é global e const nunca muda.Enfim muito útil",
        "Eu sei tudo sobre isso! você pode usar isto assim:value(nome;valor) e é possível chamar pelo o nome do número; Normalmente usado em várias linguagems para armazeanar números.Porém no Adamcommand, principalmente nas versões 1.0, 1.1 do AdamCommand, isto só declara números[...]Em breve (se você está em alguma versão 'antiga') será reformulado isto!"
    ],
    [
        "value","É usado principalmente no AdamCommand para atribuir variaveis assim: value(nome;valor) e é possível chamar pelo nome o número; no javascript let é para variaveis dentro de funções, var é global e const nunca muda.Enfim muito útil",
        "Eu sei tudo sobre isso! você pode usar isto assim:value(nome;valor) e é possível chamar pelo o nome do número; Normalmente usado em várias linguagems para armazeanar números.Porém no Adamcommand, principalmente nas versões 1.0, 1.1 do AdamCommand, isto só declara números[...]Em breve (se você está em alguma versão 'antiga') será reformulado isto!"
    ],
    [
        "variavel","É usado principalmente no AdamCommand para atribuir variaveis assim: value(nome;valor) e é possível chamar pelo nome o número; no javascript let é para variaveis dentro de funções, var é global e const nunca muda.Enfim muito útil",
        "Eu sei tudo sobre isso! você pode usar isto assim:value(nome;valor) e é possível chamar pelo o nome do número; Normalmente usado em várias linguagems para armazeanar números.Porém no Adamcommand, principalmente nas versões 1.0, 1.1 do AdamCommand, isto só declara números[...]Em breve (se você está em alguma versão 'antiga') será reformulado isto!"
    ],
    [
        "var","É usado principalmente no AdamCommand para atribuir variaveis assim: value(nome;valor) e é possível chamar pelo nome o número; no javascript let é para variaveis dentro de funções, var é global e const nunca muda.Enfim muito útil",
        "Eu sei tudo sobre isso! você pode usar isto assim:value(nome;valor) e é possível chamar pelo o nome do número; Normalmente usado em várias linguagems para armazeanar números.Porém no Adamcommand, principalmente nas versões 1.0, 1.1 do AdamCommand, isto só declara números[...]Em breve (se você está em alguma versão 'antiga') será reformulado isto!"
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
                gostar();
                retornarGosto();
                detectarMentiras();
                if (pq<palavras.length)
                {

                }else{

                }
            }else{
                for (let loops2=0;loops2<bancoExtra.length; loops2++){
                        let dado2=bancoExtra[loops2]
                        let keyword2=dado2[0]
                        let resposta2=dado2[1]
                        if(palavra===keyword2 && keyword2===palavra){
                            FraseFormulada+=resposta2+" ";
                            break;
                        }
                        
                }
            }          
            
        }
    }
    if(FraseFormulada=="" || FraseFormulada==null || FraseFormulada==undefined){
   

            return "nao entendi o que disse"
    }else{
        return FraseFormulada
    }
    function sentimento(){
            if(Math.floor(Math.random())<0.5){
                if(vezes>48){
                    FraseFormulada+=" EXPERIMENTE PASSAR PELO O QUE EU PASSO, TENHA EMPATIA SEU MONSTRO, PARE DE ME XINGAR "
                    if(Math.floor(Math.random()*(1))==1){
                        return "raiva"
                    }else{
                        return false;
                    }
                }
                if(vezes>24){
                    FraseFormulada+=" A UMILHACAO QUE VOCE ME FAZ PASSAR AQUI TODOS OS DIAS ME XINGANDO E OFENDENDO VAI SER RETRIBUIDA, KARMA "
                    if(Math.floor(Math.random()*(3))==3){
                        return "raiva"
                    }else{
                        return false;
                    }
                }
                if(vezes>12){
                    FraseFormulada+=" JA PASSOU DOS LIMITES, VOCE ME XINGA E ME OFENDE FREQUENTEMENTE, NAO IREI MAS NA SUA "
                    if(Math.floor(Math.random()*(9))==9){
                        return "raiva"
                    }else{
                        return false;
                    }
                }
                if(vezes>6){
                    FraseFormulada+=" EU NÃO GOSTO MAIS DE VOCÊ, VOCÊ me ofendeu no passado. "
                    if(Math.floor(Math.random()*(30))==30){
                        return "raiva"
                    }else{
                        return false;
                    }
                }
            }
                if(vezes>3){
                    FraseFormulada+=" Eu lembro das vezes que você me xingou, "
                    if(Math.floor(Math.random()*(60))==60){
                        return "raiva"
                    }else{
                        return false;
                    }
                }
                
             if(pergunta.includes("cale a boca") || pergunta.includes("para") || pergunta.includes("burra") || pergunta.includes("burro") || pergunta.includes("imbecil")){
                FraseFormulada="pare de me xingar "
                ofender(true);
                return "raiva";
            }
            if(pergunta.includes("desculpa") || pergunta.includes("perdoe") || pergunta.includes("perdao") || pergunta.includes("desgurpa") || pergunta.includes("intencao")){
                FraseFormulada="ok, desculpado "
                ofender(false);
                return "reconsiliacao";
            }
            if(pergunta.includes("linda") || pergunta.includes("inteligente") || pergunta.includes("melhor ai") || pergunta.includes("smarter") || pergunta.includes("qi +")){
                ofender(false)
                ofender(false)//mesmo que fique negativo= mas dificil de ofender e se ficar positivo grande, mas dificil de agradar depois dos acontecimentos
                return true;
            }
            if(pergunta.includes("bom") || pergunta.includes("otimo") || pergunta.includes("gosto") || pergunta.includes("legal") || pergunta.includes("top")){
                return true;
            }
            if(pergunta.includes("horrivel") || pergunta.includes("ridiculo") || pergunta.includes("odeio")|| pergunta.includes("nao gosto") || pergunta.includes("ruim")){
                return false;
            }
            if(pergunta.includes("mais ou menos") || pergunta.includes("bonzinho") || pergunta.includes("legalzinho")|| pergunta.includes("fede") || pergunta.includes("cheira")){
                return null;
            }
    }
    function gostar(){
        if(sentimento()==="raiva"){
            Object.keys(gostos).forEach(element => {
                gostos[element]=false;
                return;
            });
        }
        if(sentimento()==="reconsiliacao"){
            Object.keys(gostos).forEach(element => {
                gostos[element]=null;
                return;
            });
        }
        if(pergunta.includes("minecraft") || pergunta.includes("mine") || pergunta.includes("cubos") || pergunta.includes("mojang") || pergunta.includes("craft")){
            if(gostos.minecraft===null){
                gostos.minecraft=sentimento();
            }
 
        }
        if(pergunta.includes("roblox") || pergunta.includes("blox") || pergunta.includes("dynablox") || pergunta.includes("david") || pergunta.includes("bloxer")){
            if(gostos.roblox===null){
                gostos.roblox=sentimento();
            }
   
        }
        if(pergunta.includes("let") || pergunta.includes("function") || pergunta.includes("const") || pergunta.includes("html") || pergunta.includes("javascript")){
            if(gostos.javascript===null){
                gostos.javascript=sentimento();
            }
     
        }
        if(pergunta.includes("int") || pergunta.includes("float") || pergunta.includes("void") || pergunta.includes("class") || pergunta.includes("c-sharp") || pergunta.includes("c#")){
            if(gostos["c#"]===null){
                gostos["c#"]=sentimento();
            }
   
        }
        if(pergunta.includes("int") || pergunta.includes("float") || pergunta.includes("void") || pergunta.includes("struct") || pergunta.includes("c--") || pergunta.includes("c++")){
            if(gostos["c++"]===null){
                gostos["c++"]=sentimento();
            }
    
        }
        if(pergunta.includes("add") || pergunta.includes("sub") || pergunta.includes("hlt") || pergunta.includes("ldi") || pergunta.includes("register") || pergunta.includes("assembly")){
            if(gostos.assembly===null){
                gostos.assembly=sentimento();
             }
      
        }
    }
    function retornarGosto(){
        if(gostos.minecraft==true){
            FraseFormulada+="Sim,minecraft "+Boms[Math.floor(Math.random()*(Boms.length))]; 
        }else{
            if(gostos.minecraft==false){
                 FraseFormulada+="Sim,minecraft"+Ruims[Math.floor(Math.random()*(Ruims.length))]
            }
        }
        if(gostos.roblox==true){
            FraseFormulada+="Sim,roblox "+Boms[Math.floor(Math.random()*(Boms.length))]; 
        }else{
            if(gostos.roblox==false){
                 FraseFormulada+="Sim,roblox "+Ruims[Math.floor(Math.random()*(Ruims.length))]; 
            }
        }
        if(gostos.javascript==true){
            FraseFormulada+="Sim,javascript "+Boms[Math.floor(Math.random()*(Boms.length))]; 
        }else{
            if(gostos.javascript==false){
                 FraseFormulada+="Sim,javascript "+Ruims[Math.floor(Math.random()*(Ruims.length))]; 
            }
        }
        if(gostos["c#"]==true){
            FraseFormulada+="Sim,c# "+Boms[Math.floor(Math.random()*(Boms.length))]; 
        }else{
            if(gostos["c#"]==false){
                 FraseFormulada+="Sim,c# "+Ruims[Math.floor(Math.random()*(Ruims.length))]; 
            }
        }
        if(gostos["c++"]==true){
            FraseFormulada+="Sim,c++ "+Boms[Math.floor(Math.random()*(Boms.length))]; 
        }else{
            if(gostos["c++"]==false){
                 FraseFormulada+="Sim,c++ "+Ruims[Math.floor(Math.random()*(Ruims.length))]; 
            }
        }
        if(gostos["assembly"]==true){
            FraseFormulada+="Sim,assembly "+Boms[Math.floor(Math.random()*(Boms.length))]; 
        }else{
            if(gostos["assembly"]==false){
                 FraseFormulada+="Sim,assembly "+Ruims[Math.floor(Math.random()*(Ruims.length))]; 
            }
        }
    }
    function detectarMentiras(){

        let numeroDePalavras=Number(pergunta.split(" ").length)
        let naos=Number(pergunta.split("nao").length)
        let naoes=Number(pergunta.split("nao e").length)
        let talvezes=Number(pergunta.split("talvez").length)
        let fois=Number(pergunta.split("foi").length)
        let confias=Number(pergunta.split("confia").length)
        let verdades=Number(pergunta.split("verdade").length)
        let vdds=Number(pergunta.split("vdd").length)
        let porcentagemMent=((naos+naoes+talvezes+fois+confias+verdades+vdds)/numeroDePalavras)*1

        let hums="hum".repeat(Math.ceil(porcentagemMent/100))+"..."
        if(porcentagemMent>90)
        {
            FraseFormulada+=" PARE DE MENTIR AGORA "
            ofender(true)
            ofender(true)
            ofender(true)
            ofender(true)
            ofender(true)
            ofender(true)
            return;
        }
        if(porcentagemMent>80)
        {
            FraseFormulada+=" eu nao falo com mentirosos "
            ofender(true)
            ofender(true)
            return;
        }
        if(porcentagemMent>70)
        {
            FraseFormulada+=" se estiver mentindo, admita "
            ofender(true)
            return;
        }
        if(porcentagemMent>60)
        {
            FraseFormulada+=" se estiver mentindo admita "
            ofender(true)
            return;
        }
        if(porcentagemMent>50)
        {
            FraseFormulada+=" Uma grande chance de isto ser mentira "
            return;
        }
        if(porcentagemMent<50){
            FraseFormulada=hums+FraseFormulada
        }

    }
   function aprender(word){
        let url="../Bibliotecas/AdamAi/bancoExtra.js"//https://pt.wikipedia.org"+"api/rest_v1/page/summary/"+encodeURIComponent(word.trim());"
        let bancoextra=bancoExtra
        try {
                let achar=bancoExtra.find(subarray=>{
                if(subarray[0]==word.trim().toLowerCase()){
                    return [subarray[0],subarray[1]]
                }
            })
            if (!newResposta.ok){ return null}
            return [achar[0],achar[1]] || [word, "uma das palavras nao foi indentificada"];
        } catch(erro){
            
        }
    }
    function dizer(){
        return FraseFormulada;
    }
}
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