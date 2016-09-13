## Data flow

Flujo de datos con Angular 2


### Guía
- `balance` : Carpeta para el componente que mostrá los ingresos y gastos
- `editor` : Carpeta para el componente con el formaulario de alta y edición
- `lista` : Carpeta para el componente con la tabla de movimientos
- `home.module.ts` : Se importan y delcaran los tres componentes
- `movimiento` : Este componente se vacía hacia los tres nuevos
- `@input` : Con este decorador se crean propiedades para recibir datos
- `@output` : Mediante un EventEmitter se envían datos hacia el contendor padre
- `styleUrls` : Las hojas de estilo no se heredan, hay que pedirlas explícitamente

### 1.5 -> 2
[components](http://ngmigrate.telerik.com/components)