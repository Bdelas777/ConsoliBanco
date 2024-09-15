# ConsoliBanco


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

Tienes que tener lo siguiente_

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

Diagrama  de funcionamiento [here]([https://drive.google.com/file/d/1TVhdnD97LajGsyaiNa6sDs-ap-z1oerA/view?usp=sharing](https://www.canva.com/design/DAGQxak7F4I/NVPAPoPTxWPi5BqwcIfIpg/edit?utm_content=DAGQxak7F4I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

Presentación [here]([[https://drive.google.com/file/d/1TVhdnD97LajGsyaiNa6sDs-ap-z1oerA/view?usp=sharing](https://www.canva.com/design/DAGQxak7F4I/NVPAPoPTxWPi5BqwcIfIpg/edit?utm_content=DAGQxak7F4I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)](https://docs.google.com/presentation/d/1FBAc9GuvSHg6PpeZlqY6fVSpDp47Mdzp/edit?usp=sharing&ouid=101944253581504655268&rtpof=true&sd=true)
