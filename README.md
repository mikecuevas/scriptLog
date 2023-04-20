<h1>Monitor de requisições HTTP</h1>


Esse é um projeto que monitora periodicamente uma URL usando requisições HTTP GET e armazena os resultados em um arquivo de texto. Ele também envia um email quando uma resposta com status code inválido é recebida.


Resultados
Os resultados das requisições HTTP são armazenados em um arquivo de texto na pasta raiz do projeto. O nome do arquivo é definido pela variável arquivoResultados. Cada linha do arquivo corresponde a uma requisição, e contém o status code da resposta e uma mensagem "OK" ou "ERRO", dependendo do status code.
