# Pruebas Serverless con NodeJS y AWS Lambda

### Es necesario una cuenta en AWS.

- Para crear una cuenta de AWS, se tienen que ingresar algunos datos personales e información de tu tarjeta de crédito. https://aws.amazon.com/es/
- Si ya tienes cuenta de AWS, ingresa a tu consola de administración de AWS https://console.aws.amazon.com/console/home
- Crear un usuario que tenga permisos para crear lambdas.
  - Ingresar a la sección IAM.
  - Ingresar a Usuarios.
  - Ingresar a Añadir Usuario(s)
  - Escribe un User name o Nombre de usuario y habilita el Tipo de acceso (Access type) Acceso mediante programación (Programmatic access)
  - Crear un grupo, agregar el nombre del grupo y asigna el permiso (AdministratorAccess)
  - Descargar el .csv para guardar tu Access key ID and Secret access key (o copiarlos manual)

### Configuración global (optional)

abrir terminal y ejecutar `npm i -g aws-cli serverless`

- Configurar AWS.
  - Tener a la mano el access key y secret para configurar en la máquina
  - Escribir en la consola `aws configure`
  - AWS Access Key ID: (Pegar la información)
  - AWS Secret Access Key: (Pegar la información)
  - Default region name [us-west-1]: (Verificar cuenta en que región se encuentra o escribir la más cerca a donde estamos o al negocio).
  - Default output format [json]: (recomendado json)
- Configurar serverless para AWS
  - Escribir en la consola `sls config credentials --provider aws --key KEY --secret SECRET --profile USERNAME` remplazar KEY por el access key ID, SECRET por en access secret key y USERNAME por el usuario creado en IAM.

### Plugins

- `npm i -D serverless-offline` https://www.npmjs.com/package/serverless-offline
- `npm i -D serverless-dotenv-plugin` https://www.npmjs.com/package/serverless-dotenv-plugin
- `npm i -D serverless-offline-scheduler` https://www.npmjs.com/package/serverless-offline-scheduler
- `npm i -D serverless-plugin-include-dependencies` https://www.npmjs.com/package/serverless-plugin-include-dependencies

NOTA:

- Ejecutar serverless-offline `serverless offline`

## Comandos serverless

- serverless abreviatura sls
- Para crear una plantilla de AWS puedes utilizar `serverless create --template aws-nodejs` o la forma corta `sls create -t aws-nodejs`
- Ejecutar una función `sls invoke local -f NAME_FUNCTION`
- Ejecutar función con evento `sls invoke local -f NAME_FUNCTION -d 'new event'`
- `sls deploy` toma todos los valores configurados por defecto y todas las funciones.
- `sls deploy -f NAME_FUNCTION` desplegar una función específica.
- `sls deploy -s production -f NAME_FUNCTION` desplegar una única función en producción.
- Mirar nuestros registros o logs con un tiempo especifico `sls logs -f NAME_FUNCTION -s prduction --startTime 10m`
- `sls remove -s dev` Eliminar todas las funciones relacionadas con el ambierte de desarrollo.
- `sls remove -s production` Eliminar todas las funciones relacionadas con el ambierte de desarrollo.
- Sus funciones programadas con sintaxis cron se pueden ejecutar con `sls offline start`

Schedule expressions using rate or cron
https://docs.aws.amazon.com/lambda/latest/dg/services-cloudwatchevents-expressions.html

## .env

```
AWS_STAGE=dev
AWS_REGION=us-east-2
```
