const https = require('https');

var options = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET'
};


///funcao q faz a busca a cada 10 segundos
setInterval(() => GETRequisicao(options), 10 * 10000);



function GETRequisicao(options){
    

    const req = https.get(options, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);

        res.on('data', (d) => {
            if(res.statusCode < 200 || res.statusCode > 299){
                // Funcao que envia email aqui e bla blab lba

                console.log('deu erro envia email');
            }
            else {
                console.log('deu certo');
            }
        });
       

        req.on('error', (e) => {
        console.error(e);
        });

    // Se der erro na requisição tbm é bom enviar e-mail
    });    
    req.end;

}