# Pendientes reales y límites de aceptación

Estado congelado por instrucción del usuario. Esta lista no autoriza publicar ni contratar.

## Antes de apertura pública

- Designar responsable, contacto de derechos y soporte; completar y revisar privacidad, términos, proveedores, región y transferencias internacionales.
- Aprovisionar y autorizar Supabase/hosting/backups/SMTP; verificar remitente, SPF/DKIM/DMARC, cuotas y CAPTCHA del proveedor. El widget Turnstile está implementado, pero no fue probado con claves de producción.
- Desplegar y probar la Edge Function de eliminación, sus secretos, reautenticación, errores parciales y reintentos. Las funciones y el script existen; la eliminación integral no tiene prueba E2E ejecutada.
- Ensayar restauración integral con Auth, configuración, roles, login/recuperación y reaplicación de supresiones. El ensayo existente restaura SQL en otra base del contenedor de pruebas; no acredita recuperación completa ni RPO/RTO del servicio.
- Configurar custodio y destinatario operativo, monitoreo, alertas de cuotas/errores, retención y copias cifradas externas. No se contrataron ni activaron servicios.

## Trabajo técnico y pruebas pendientes

- La instantánea real todavía carga el historial completo. La paginación de movimientos es de presentación; faltan el cursor y los filtros completos de servidor del contrato. No se validó la capacidad de 10.000 documentos y 20 sesiones. Este punto impide afirmar preparación pública/escalabilidad conforme a todas las puertas del SPEC.
- No se cubrió exhaustivamente cada RPC/FK/paso de fallo, todos los límites, ataques y escenarios enumerados en §16. No se afirma 100% de invariantes por el porcentaje de cobertura.
- Falta revisión manual completa con lector de pantalla, teclado, zoom 200%, todos los módulos/estados y reportes multipágina extensos. Axe y responsive automatizados solo cubren las pantallas y recorridos ejecutados.
- No se midieron LCP/INP/CLS en móvil 4G, p95 con el volumen contractual, disponibilidad, RPO/RTO integral ni comportamiento operativo público.
- Falta acreditar migraciones desde una versión previamente desplegada y compatibilidad durante siete días; se probaron migraciones desde cero.
- El respaldo existente se conserva tal como estaba preparado. No se recompiló ni se volvió a probar después de la orden de detención. El build principal existente y el respaldo pueden representar momentos próximos distintos de la ejecución; el manifiesto identifica sus archivos.
- La última reejecución E2E fue detenida por el usuario: completó ocho casos Chromium; Firefox/WebKit de esa reejecución no concluyeron. Una ejecución completa anterior registró 22 aprobados y dos offline omitidos.
- Los scripts y las funciones no probados se entregan como código preparado, no como operaciones certificadas. Revisión integral de paridad y aceptación final sigue pendiente.

## Restricciones deliberadas

No hay conexión bancaria, inventario, SUNAT, préstamos, impuestos automáticos, cobros comerciales, equipos, IA, multimoneda, notificaciones externas ni escrituras reales offline. La demo es local y ficticia. El respaldo local no contiene los datos de una cuenta Supabase real ni sustituye una estrategia de backups de producción.
