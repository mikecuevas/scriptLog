const https = require('https');
const fs = require('fs');

const options = {
  hostname: 'site de teste',
  port: 443,
  path: '/',
  method: 'GET'
};

const arquivoResultados = 'resultados.txt';
const numeroRequisicoesSalvar = 10;
let numeroRequisicoes = 0;
let resultados = '';

setInterval(() => {
  fazerRequisicao(options);
}, 10 * 1000);

function fazerRequisicao(options) {
  const req = https.get(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
    let dados = '';

    res.on('data', (chunk) => {
      dados += chunk;
    });

    res.on('end', () => {
      if (res.statusCode >= 200 && res.statusCode <= 299) {
        resultados += `Requisição ${++numeroRequisicoes}: OK\n`;
      } else {
        resultados += `Requisição ${++numeroRequisicoes}: ERRO (${res.statusCode})\n`;
      }

      if (numeroRequisicoes % numeroRequisicoesSalvar === 0) {
        salvarResultados(resultados);
        resultados = '';
      }
    });
  });

  req.on('error', (error) => {
    console.error(`Erro na requisição: ${error}`);
    resultados += `Requisição ${++numeroRequisicoes}: ERRO\n`;
    if (numeroRequisicoes % numeroRequisicoesSalvar === 0) {
      salvarResultados(resultados);
      resultados = '';
    }
  });

  req.end();
}

function salvarResultados(resultados) {
  fs.appendFile(arquivoResultados, resultados, (error) => {
    if (error) {
      console.error(`Erro ao salvar resultados: ${error}`);
    } else {
      console.log('Resultados salvos com sucesso.');
    }
  });
}
