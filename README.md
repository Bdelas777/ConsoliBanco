# ConsoliBanco

## Vercel

Enlace en vivo: https://consoli-banco.vercel.app/sign-in

Para acceder introduzca lo siguiente:

Email: bsr@gmail.com

Password: papita12

## Importante

Poner el state o estado solo con 2 caracteres

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- Appwrite
- Plaid
- Dwolla
- React Hook Form
- Zod
- TailwindCSS
- Chart.js
- ShadCN
- Gemini
- Chart.js 2
- Sentry


## <a name="features">🔋 Caracteristicas </a>

- **Autentificación**: Usamos un sistema seguro para validar quien entre con Plaid, Dwolla y Sentry

- **Conectar Bancos**: Integra con Plaid para vincular múltiples cuentas bancarias.

- **Página Principal**: Muestra una visión general de la cuenta del usuario con el saldo total de todos los bancos conectados, transacciones recientes, dinero gastado en diferentes categorías, etc.

- **Mis Bancos**: Revisa la lista completa de todos los bancos conectados con sus respectivos saldos y detalles de cuenta.

- **Historial de Transacciones**: Incluye opciones de paginación y filtrado para ver el historial de transacciones de diferentes bancos.

- **Actualizaciones en Tiempo Real**: Refleja los cambios en todas las páginas relevantes al conectar nuevas cuentas bancarias.

- **Transferencia de Fondos**: Permite a los usuarios transferir fondos utilizando Dwolla a otras cuentas, con los campos requeridos y el ID bancario del destinatario.

- **Adaptabilidad**: Garantiza que la aplicación se ajuste perfectamente a diferentes tamaños de pantalla y dispositivos, brindando una experiencia de usuario consistente en plataformas de escritorio, tabletas y móviles.

- **Generación de plan financiero**: Te ayuda a generar un plan financiero por tu salario y deudas

- **Chatbot de dudas**: Para preguntas comunes o ayuda

- **Gráficos de Análisis**:  Generamos gráficas de análisis para apoyarte con tus transferencias, cuanto has gastado, entre otras..

## <a name="quick-start">¿Cómo usarlo?</a>

Tienes que tener lo siguiente:

**Prerequisitos**

Debes tener instalado lo siguiente:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (O cualquier otro manejardor de paquetes como lo pnpm o yaml)

**Clonar repo desde conola**

```bash
git clone https://github.com/Bdelas777/ConsoliBanco.git
```

**Instalación**

Para instalarlo puedes usar:

```bash
npm install
npm i
```

**Variables**

Debes crear un archivo `.env` en la ruta de la carpeta(para este caso las deje si las quiere probar, más adelante las elimino_

```env
#NEXT
NEXT_PUBLIC_SITE_URL=

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox

#Femini 
GOOGLE_GENERATIVE_AI_API_KEY=
```

Para obtener esos valores les dejó las siguientes ligas [Appwrite](https://appwrite.io/?utm_source=youtube&utm_content=reactnative&ref=JSmastery), [Plaid](https://plaid.com/) and [Dwolla](https://www.dwolla.com/)

## <a name="links">🔗 Enlaces</a>

Diagrama  de funcionamiento [aqui](https://www.canva.com/design/DAGQxak7F4I/NVPAPoPTxWPi5BqwcIfIpg/edit?utm_content=DAGQxak7F4I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

Presentación [aqui](https://docs.google.com/presentation/d/1FBAc9GuvSHg6PpeZlqY6fVSpDp47Mdzp/edit?usp=sharing&ouid=101944253581504655268&rtpof=true&sd=true) 

## Inspiration

La inspiración detrás de ConsoliBanco proviene de la necesidad de una solución bancaria unificada y eficiente para gestionar múltiples cuentas desde una sola plataforma. Muchos usuarios tienen varias cuentas en diferentes bancos y carecen de una visión consolidada de sus finanzas, lo que puede dificultar la gestión de sus ingresos, gastos y ahorros.
## What it does

ConsoliBanco permite a los usuarios conectar varias cuentas bancarias de manera segura, visualizar su saldo total, revisar transacciones recientes y categorizadas, y transferir fondos entre cuentas. Además, genera gráficos de análisis financieros y proporciona herramientas para crear planes financieros personalizados. Incluye un chatbot para asistencia, soporte en tiempo real y una interfaz adaptable a dispositivos móviles.

## How we built it

Construimos ConsoliBanco utilizando un stack moderno que incluye Next.js y TypeScript para el desarrollo frontend, Appwrite para la autenticación y backend, Plaid y Dwolla para la integración con bancos, y React Hook Form junto con Zod para la validación de formularios. Usamos TailwindCSS y ShadCN para una interfaz de usuario ágil y moderna, y Chart.js para la visualización de datos financieros. Las integraciones con Sentry aseguraron la gestión de errores, y Gemini contribuyó a las pruebas y optimizaciones.

## Challenges we ran into

Uno de los mayores retos fue garantizar la seguridad de las transacciones y la conexión bancaria mediante Plaid y Dwolla, asegurando que los datos sensibles se manejen de manera segura. También nos enfrentamos a desafíos en la integración en tiempo real de los cambios de cuenta y saldos, y en garantizar que la aplicación sea completamente adaptable a dispositivos móviles sin sacrificar la experiencia de usuario.Además, que tuvimos el reto de implementar una inteligencia Artificial pata el Chatbot, sin embargo, al usar OpenAI no nos dejaba porque nos acabamos el saldo y no esta bien entrenado por lo que optamos por el uso de Gemini

## Accomplishments that we're proud of

Estamos orgullosos de haber logrado una integración fluida con múltiples bancos y ofrecer una experiencia de usuario confiable y en tiempo real. La creación de gráficos de análisis financieros, el chatbot interactivo, y la funcionalidad de generación de un plan financiero personalizado son características destacadas que proporcionan un valor significativo a los usuarios.

## What we learned

Aprendimos la importancia de diseñar para la escalabilidad y seguridad en aplicaciones financieras, asegurando que la integración con terceros, como Plaid y Dwolla, sea robusta y eficiente. También mejoramos nuestras habilidades en la creación de interfaces adaptables y en la optimización de datos en tiempo real.También como un equipo multidisciplinario te ayuda a mejorar

## What's next for ConsoliBanco

Los próximos pasos para ConsoliBanco incluyen la expansión de la plataforma para integrar más instituciones financieras, mejorar el chatbot con inteligencia artificial avanzada, y ofrecer opciones más personalizadas de planificación financiera basadas en las metas y hábitos de cada usuario. También planeamos optimizar el análisis predictivo para ayudar a los usuarios a anticipar gastos y optimizar sus finanzas a largo plazo.

