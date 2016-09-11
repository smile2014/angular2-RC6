## injection

Inyección de dependencias con Angular 2


### Guía
- `saludo` : Eliminamos la Carpeta del componente saludo y sus referencias
- `shared` : Aparece una carpeta destinada a contener cosas comunes a varios componentes
- `movimientos.service.ts` : Un servicio (inyectable) que encapsule el trabajo con datos
- `movimiento.model.ts` : Una clase (no inyectable) para definir una interfaz de datos
- `home.module.ts` : Importa y declara como proveedor al servicio anterior
- `movimiento.component.ts` : Puede importar y reclamar en el consturcto al anterior servicio
- `movimiento.component.html` : Desde la vista se puede usar directamente el servicio

### 1.5 -> 2
[injectable](http://ngmigrate.telerik.com/angular-2-injectable-service)