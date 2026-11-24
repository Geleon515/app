# TEST_REPORT — FinanPro 360

Fecha de empaquetado: 2026-11-24T16:34:57-05:00 (America/Lima). Estado congelado por solicitud expresa del usuario. No se ejecutaron pruebas nuevas después de esa orden; se conservaron los logs existentes y se detuvo la reejecución en curso.

## Resultados registrados

| Comprobación | Resultado real | Alcance |
|---|---|---|
| TypeScript frontend (`npm run typecheck`) | Aprobado en ejecuciones registradas | strict y noUncheckedIndexedAccess; no acredita runtime Deno/Edge |
| ESLint (`npm run lint`) | Aprobado en ejecuciones registradas | Código y scripts; artefactos generados excluidos |
| Build Vite/PWA | Aprobado; último log conservado | Build estático existente y precache generado |
| Dominio y componentes | 52 pruebas aprobadas | Vitest + Testing Library |
| Cobertura de ramas de dominio | 91.12% | No equivale a cobertura contractual total |
| PostgreSQL/RLS | 16 pruebas aprobadas en último log | PostgreSQL real; identidad por fixture SQL en esta suite |
| Auth y REST reales | 7 grupos aprobados | GoTrue 2.185.0 + PostgREST 13.0.7 + PostgreSQL, sin backend financiero simulado |
| Sesión en navegador real | 1 E2E aprobado | Alta inicial, RPC, reload sin reingreso, respuesta perdida tras commit y recuperación sin duplicar; logout offline |
| E2E completo anterior | 22 aprobados, 2 omitidos | Chromium/Firefox/WebKit; offline reservado a Chromium |
| Última reejecución E2E | 8 Chromium aprobados; interrumpida | Detenida por instrucción del usuario, sin resultado completo de Firefox/WebKit |
| Respaldo local preparado | 1 E2E offline aprobado en log existente | Venta/cobro/transferencia/plan, persistencia, reset y nueva pestaña offline |
| Restauración SQL aislada | Ejecutada; ver evidencia | Otra base en el contenedor; no restauración integral de Auth |
| Auditoría de dependencias | Resultado conservado en JSON | Lectura histórica; no se volvió a ejecutar al empaquetar |

Navegadores de la suite Playwright 1.56.1: Chromium 141.0.7390.37, Firefox 142.0.1 y WebKit 26.0. WebKit requirió bibliotecas extraídas localmente y un wrapper de ejecución; se llegó a ejecutar el motor. Los scripts de CI prevén instalación normal de dependencias del sistema. La vista previa interactiva de Sites falló por el relay; las capturas se obtuvieron mediante Playwright.

## Cálculos y reglas contrastados

- Escenario §15: ventas 180000, costo 72000, ganancia bruta 108000, gastos variables 6000, fijos 48000, ganancia estimada 54000 céntimos.
- Caja Negocio 124000, Personal 105000, consolidado 229000; CxC 40000 y CxP 30000; anticipo disponible cero.
- Conciliación mensual: aperturas como posición inicial, sin ingreso ficticio; caja inicial Negocio 100000 y variación 24000.
- Proyección: cierres programados 134000 / 114000 / 99000 / 59000; línea sin cobros 94000 / 4000 / −11000 / −51000.
- Calculadora: variable unitario 15, contribución 15, margen 50%, recargo 100%, precio sugerido 25, equilibrio 20 unidades y 60000 céntimos, resultado simulado 60000.
- Redondeo por línea, reverso exacto, precios/cantidades inválidos, límites, fecha civil Lima, bisiesto, margen/recargo y divisiones no calculables.
- A5 usa margen bruto nulo o negativo de línea; no se denomina contribución operativa.

## Integración y seguridad efectivamente ejercitadas

Los tests SQL incluyen seed idempotente, resultados calculados por SQL, RLS en tablas/vistas, IDs ajenos, anonimato/sin identidad, grants y rol writer sin bypass, rechazo de escritura directa, rollback tras fallo de venta/costo, idempotencia y payload conflictivo, redondeo del servidor, pares de planes, anulación de liquidación, portabilidad y reconciliación diaria.

Se probaron **dos sesiones del mismo propietario** compitiendo por un pendiente de S/100 con operaciones de S/80: solo una prospera. También se probaron dos ventas compitiendo por S/80 de un anticipo de S/100, con un único éxito.

Auth/REST reales comprobaron confirmación de enlace de un uso, rechazo del login sin confirmar, login de dos propietarios, aislamiento REST con UUID conocido, escrituras directas rechazadas, JWT expirado/ausente, renovación y recuperación. La prueba de navegador ejecutó una petición real y perdió deliberadamente su respuesta después del commit para comprobar recuperación del recibo sin duplicación. No se usó SMTP de producción ni se enviaron correos reales como parte de estas pruebas.

## UX y offline

Se ejecutaron los recorridos financieros, corrección/reemplazo, planes realizados como transferencia y venta, persistencia tras recarga y cambios de tema. Se comprobaron 320, 375, 768, 1024 y 1440 px y axe en el panel. Se corrigieron incidencias observadas de formato monetario, etiquetas accesibles, ancho móvil, gráfico enfocable oculto y acceso al logout en pantallas de poca altura.

La prueba offline Chromium usa service worker real, corta red, registra datos en IndexedDB, recarga, reinicia y abre una nueva pestaña. También se ejercitó la indisponibilidad de IndexedDB con consentimiento para modo memoria. No hay prueba manual completa de accesibilidad ni de todos los módulos.

## Limitaciones y estado de aceptación

**No se declara cumplimiento íntegro de §16.5 ni aplicación lista para acceso público con datos reales.** PENDIENTES.md detalla las puertas abiertas, especialmente paginación/capacidad de servidor, recuperación Auth/supresiones, Edge de eliminación y operación pública.

Las pruebas completas anteriores no se atribuyen automáticamente a cambios posteriores. El último ciclo E2E se interrumpió por orden del usuario; no se marca como aprobado globalmente. No se creó commit Git; MANIFEST.json documenta hashes del contenido entregado. No hubo despliegue, contratación ni activación de registro público.

Los logs bajo `verification/` permiten revisar los comandos/resultados conservados. No se incluyen trazas de red Auth ni sus archivos temporales de credenciales.
