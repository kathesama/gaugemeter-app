![header](assets/header.png)

# Trabajo Práctico Final
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">

[<img src="https://img.shields.io/badge/Linkedin-kathesama-blue?style=for-the-badge&logo=linkedin">](https://www.linkedin.com/in/kathesama)
<br>
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-blue?style=for-the-badge&logo=docker&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg?style=for-the-badge)
<br>
[![GitHub issues](https://img.shields.io/github/issues/kathesama/gaugemeter-app?style=plastic)](https://github.com/kathesama/gaugemeter-app/issues)
[![GitHub forks](https://img.shields.io/github/forks/kathesama/gaugemeter-app?style=plastic)](https://github.com/kathesama/gaugemeter-app/network)
[![GitHub stars](https://img.shields.io/github/stars/kathesama/gaugemeter-app?style=plastic)](https://github.com/kathesama/gaugemeter-app/stargazers)
<br>
![GitHub last commit](https://img.shields.io/github/last-commit/kathesama/gaugemeter-app?color=red&style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/kathesama/gaugemeter-app?style=plastic)
<br>
![Maintaned](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=plastic)
![OWASP](https://img.shields.io/badge/OWASP%3F-yes-green.svg?style=plastic)
![OWASP](https://img.shields.io/badge/CleanCode%3F-yes-green.svg?style=plastic)
[![GitHub license](https://img.shields.io/github/license/kathesama/gaugemeter-app?style=plastic)](https://github.com/kathesama/gaugemeter-app/blob/main/LICENSE)
![GitHub repo size](https://img.shields.io/github/repo-size/kathesama/gaugemeter-app?style=plastic)
<br>
Autor:

* Ing. Katherine E. Aguirre

Docente:

* Brian Ducca

## Gaugemeter Ionic App
Trabajo práctico final para la asignatura Desarrollo de Aplicaciones Multiplataforma

## Premisa
Se necesitará recopilar la información proporcionada por un sensor que va a medir la
humedad de la tierra mediante el uso de un tensiómetro el cual responde a cambios de
tensión de humedad en el suelo y su funcionamiento se rige por la fuerza de succión del
suelo. 

Consiste en un medidor de vacío y un tubo sellado con una capa de cerámica porosa.
La capa de cerámica simula movimiento del agua a través del suelo. Mientras más seco se
encuentra el suelo, más alta será la lectura del tensiómetro. La interpretación de la lectura de un tensiómetro varía según el cultivo, el tipo de suelo y curva de humedad
correlacionada. Sin embargo, se puede tomar de referencia que de 0 a 10 centibares (Cb) el
suelo está saturado; de 10 a 30 Cb, el suelo está en CC; y, de 30 a 60 Cb, el suelo está
seco y debe regarse de inmediato.

## Ejecución de la aplicación
1. Clonar este repo:
> git clone https://github.com/kathesama/gaugemeter-app.git

2. **Ejecutar primero el backend**, para ello ir a la carpeta *./gaugemeter-app* y modificar el archivo **docker-compose.yml**, ajuste los parametros de enviroment para la imagen de docker.

3. Ejecutar:
> docker-compose -f .\docker-compose.yml up

* Para ver todos detalles del backend ir a **[Readme de gaugemeter-app](https://github.com/kathesama/gaugemeter_tp_bck/blob/main/README.md)**

* Para administrar la base de datos mongo se recomienda usar *MongoDB Compass*, instalar: https://www.mongodb.com/try/download/compass

Una vez haya instalado MongoDB Compass, se debe abrir la consola de MongoDB Compass y configurar los parametros de conexión a la base de datos:<br>
* **Usuario**: root
* **Password**: pass12345

Ejemplo de parametros para el backend:<br>
```
- MONGO_URL=mongodb://root:pass12345@127.0.0.1:27017/?authSource=admin
- IS_TLS_MONGO=false
- DB_NAME=gaugemeterTp
- SERVER_FINGERKEY=987asy87tdsyakjhsbdahsd´90as8d0a98sda12453454fbfgb
- SENDGRID_API_KEY=SG.dH3vMyasdasdbbV2qg.MDatasdasdasd5ye-ryaIbj6faKasdasdasdto6Eg
- JWT_SECRET=0p9o1u23oeiu23rhj3bjknOIUY(/&%R&/4765ytagiwkjnkasdj)
- CA_TOKEN_MONGO=KKljaushjkldanbsbhkjasdlañksnbdlas
- MAIL_OWNER=Admin Admin
- MAIL_USERNAME=Admin
- MAIL_FROM=comemail@domain.com
- isHTTPS=false
```

4. Ir a la carpeta *./frontend* y ejecutar:<br>
> npm install

**Nota**: este proyecto se ecuta sobre Ionic, sino lo tiene ejecutar:
> npm install -g @ionic/cli

5. Una vez instaladas las librerias, ejecutar en la misma carpeta *frontend*:<br>
> ionic serve


