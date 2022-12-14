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
y = xmlDoc.getElementsByTagName("noticia");

function texto1(){
    for(i=0;i<=1;i++){
        document.write(
           "<p class='textoajuste1'>" + x[i].getElementsByTagName("texto1")[0].childNodes[0].nodeValue + "</p>");
    }
}

function principal() {
    for(i= y.length - 1; i >= 0; i--){
        document.write("<div class='col-md-6'>" + 
        "<div class='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative' id='texto'>" +
        "<div class='col p-4 d-flex flex-column position-static' style='width:400px' id='card'>" +
        y[i].getElementsByTagName("tituloblog")[0].childNodes[0].nodeValue + "</h3>" +
        "<div class='mb-1 text-muted' id='texto1'>" +
        y[i].getElementsByTagName("conteudoblog")[0].childNodes[0].nodeValue.substr(0,200)+ "..." + "</div>" +
        "<p class='mb-auto' style='color: #000000'>" +
        "<a href='blog.html?codigo_blog=" + i + "' class='stretched-link'>Veja mais.</a>" + 
        "</div>" +
        "</div>" +
        "</div>");
    }
}



function tituloblog(){
    url = new URL (window.location.href);
    parametro = url.searchParams;
    i = parametro.get("codigo_blog");
    document.write(y[i].getElementsByTagName("tituloblog")[0].childNodes[0].nodeValue);
  }
  
  function conteudoblog(){
    url = new URL(window.location.href);
    parametro = url.searchParams;
    i = parametro.get("codigo_blog");
  
    document.write(y[i].getElementsByTagName("conteudoblog")[0].childNodes[0].nodeValue);
  } 
  
  function linkblog(){
    url = new URL(window.location.href);
    parametro = url.searchParams;
    i = parametro.get("codigo_blog");
  
    document.write(y[i].getElementsByTagName("linkblog")[0].childNodes[0].nodeValue);
  }   