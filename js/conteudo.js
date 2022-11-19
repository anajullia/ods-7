//Cria uma variável para manipilar um arquivo XML
xmlhttp = new XMLHttpRequest();
//Lê um determinado arquivo XML no diretório do projeto
xmlhttp.open("GET","xml/conteudo.xml",false);
//Envia o arquivo aberto pra leitura
xmlhttp.send();
//Envia uma resposta do tipo XML
xmlDoc = xmlhttp.responseXML;
//Cria um array a partir da quantidade de postagens
x = xmlDoc.getElementsByTagName("texto");

function funcaoConteudo(){
    for(i = x.length-1; i>=0; i--){
        document.write(
        "<p class='textoajuste1'>" + x[i].getAttribute("codigo") + "</p>" +getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</td>" +
        "<td>" + x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,150) +  "...</td>" +
        "</tr>");
    }
}