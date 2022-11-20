//Cria uma variável para manipilar um arquivo XML
xmlhttp = new XMLHttpRequest();
//Lê um determinado arquivo XML no diretório do projeto
xmlhttp.open("GET","xml/conteudo.xml",false);
//Envia o arquivo aberto pra leitura
xmlhttp.send();
//Envia uma resposta do tipo XML
xmlDoc = xmlhttp.responseXML;
//Cria um array a partir da quantidade de postagens
x = xmlDoc.getElementsByTagName("corpo");

function texto1(){
    for(i=0;i<=1;i++){
        document.write(
           "<p class='textoajuste1'>" + x[i].getElementsByTagName("texto1")[0].childNodes[0].nodeValue + "</p>");
    }
}