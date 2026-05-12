---
# Nombre del archivo: docs/03-ayuno/preguntas-y-respuestas-ayuno.md
# Autor: Arturo Enriquez Betancourt con Jarvis
# Fecha: 2026-05-11
# Versión: 1.0
# Descripción: Documento de Preguntas Frecuentes (FAQ) sobre configuración, historial y dudas técnicas del módulo de ayuno. Formato MD puro optimizado para SEO y UX.

slug: preguntas-frecuentes-ayuno
title: "Preguntas Frecuentes de Ayuno"
sidebar_label: "Preguntas Frecuentes"
sidebar_position: 2
---

# ⏱️ Preguntas Frecuentes: Domina tu Reloj de Ayuno

En esta sección resolvemos las dudas técnicas y de configuración más comunes sobre el uso del temporizador, el historial y las métricas de ayuno en Caloritrack.

## 3. Ayuno Intermitente

### Olvidé darle "Iniciar Ayuno" en la app anoche después de cenar. ¿Perdí ese tiempo?
Para nada. Simplemente toca **"Iniciar Ayuno"** ahora. Una vez que el reloj esté corriendo, verás el texto *"Ayuno iniciado"* debajo del círculo principal. Toca el ícono de **lápiz** junto a la hora y podrás editar la fecha y hora exactas en las que realmente dejaste de comer.

### Todos los días hago ayuno de 20 horas, pero el círculo siempre amanece configurado en 16 horas y tengo que arrastrarlo manualmente. ¿Puedo fijar mi meta?
Sí. Arrastrar el círculo solo cambia la meta para esa sesión en particular. Para cambiar tu meta predeterminada, ve a la pantalla de Ayuno y toca el ícono de **Ajustes** (deslizadores) en la esquina superior izquierda. Allí cambia tus preferencias a 20 horas. La próxima vez que inicies un ayuno, esa será tu meta automática.

### Finalicé mi ayuno de 24 horas, pero al revisar mis estadísticas ("Historial Reciente"), la gráfica no cuadra o la racha se cortó.
Si notas inconsistencias, ve a tu historial en la vista de estadísticas de ayuno. Mantén presionado (o toca los tres puntos) sobre el registro problemático y selecciona **"Editar"**. A veces, iniciar y detener ayunos de prueba por accidente crea micro-registros de un par de minutos que cortan la racha. Puedes eliminar esos registros basura deslizando o desde el menú.

### Viajé a otro continente (cambio de zona horaria) y ahora mi historial parece solaparse o mostrar duraciones incorrectas. ¿Cómo lo arreglo?
Los registros de ayuno guardan marcas de tiempo universales (UTC) para evitar corrupción de datos. Sin embargo, al cambiar de zona horaria, la visualización en tu historial se ajusta a tu hora local actual, lo que puede causar que un ayuno parezca haber empezado "mañana" o solaparse con uno previo. 

Ve a **Perfil > Preferencias de la App** y activa la opción *"Forzar zona horaria de origen para el historial"* si estás en un viaje corto. Si ya te has establecido en el nuevo país, simplemente ajusta manualmente las horas de inicio/fin del ayuno afectado.

### La app me notificó que entré en "Cetosis Profunda", pero mis tiras reactivas de orina marcan niveles bajos. ¿Por qué?
Las fases de ayuno (Quema de glucógeno, Cetosis, Autofagia) que muestra el círculo de Caloritrack son estimaciones basadas en estudios clínicos poblacionales promedio (ej. asumiendo que la cetosis inicia alrededor de las 12-16 horas). Tu metabolismo individual, tu última comida (alta o baja en carbohidratos) y tu nivel de actividad física alteran estos tiempos reales. Usa las fases de la app como una guía motivacional, pero confía en tus métricas biomédicas personales para datos clínicos.

### Quiero registrar un ayuno prolongado de hasta 96 horas, pero el círculo visual parece reiniciarse o se ve extraño.
Por razones de diseño de interfaz (UI), el círculo visual está optimizado para ciclos circadianos de hasta 48 horas. Sin embargo, el motor interno de la app sigue contando con precisión sin importar cuánto tiempo pase, permitiendo registrar ayunos de hasta 96 horas. Para ayunos prolongados (extendidos), verás que el círculo se completa y comienza una línea punteada interior, o simplemente puedes ignorar el círculo y guiarte por el contador numérico de horas/días en el centro de la pantalla.

---

## 📱 Dudas sobre el Sistema Operativo (iOS)

### Instalé el Widget en mi iPhone, pero a veces dice que llevo 14 horas de ayuno y al abrir la app llevo 14 horas y 20 minutos. ¿El widget está roto?
No está roto. Esta es una limitación estricta de Apple (iOS) para conservar la batería de tu dispositivo. 

:::info Limitación de iOS
Los widgets no se actualizan segundo a segundo; iOS solo permite que las aplicaciones refresquen sus widgets cada 15 a 30 minutos (dependiendo del uso de tu batería y memoria). El widget es una *"fotografía reciente"* de tu progreso, pero al abrir Caloritrack, el contador interno siempre mostrará el tiempo exacto en tiempo real.
:::

### Mi ayuno se completó a las 2:00 PM, pero no recibí la notificación emergente de "¡Meta de ayuno alcanzada!" en mi iPhone.
Primero, asegúrate de haber dado permisos yendo a **Perfil > Preferencias de Notificaciones**. Si están activos, el problema suele ser un "Modo de Concentración" (Focus Mode) nativo de iOS, como *"No Molestar"* o *"Trabajo"*, que bloquea las notificaciones push. 

:::tip Tip de Notificaciones
Si tenías la app de Caloritrack abierta y activa en tu pantalla exactamente a las 2:00 PM, iOS suprime la notificación tipo "banner" porque asume que ya estás viendo la pantalla; en su lugar, verás una animación festiva directamente dentro del círculo de la app.
:::