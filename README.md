# JwtAuth‑Frontend

Frontend em **React + Vite + TailwindCSS** para consumir a API de autenticação JWT.  
Este projeto foi desenvolvido para funcionar em conjunto com a API backend (por exemplo, o projeto [JwtAuth](https://github.com/tomej-dev/JwtAuth)).

---

## 🚀 Tecnologias utilizadas

- React  
- Vite  
- TailwindCSS  
- Axios (para requisições HTTP)  
- React Router DOM (para navegação)  
- Autenticação via JWT (JSON Web Token)

---

## 🗂 Estrutura do projeto

JwtAuth-Frontend/
│
├── public/
│ └── index.html
├── src/
│ ├── api/
│ │ └── api.js # instância do Axios configurada
│ ├── pages/
│ │ ├── Login.jsx # página de login
│ │ ├── Register.jsx # página de registro
│ │ └── Dashboard.jsx # página protegida pós‑login
│ ├── App.jsx # roteamento entre páginas
│ ├── index.css # importação do Tailwind
│ └── main.jsx # ponto de entrada React + import CSS
├── tailwind.config.js # config do TailwindCSS
├── postcss.config.js # config do PostCSS
└── package.json

yaml
Copiar código

---

## ⚙️ Como executar localmente

### 1. Clone o repositório  
```bash
git clone https://github.com/tomej-dev/JwtAuth‑Frontend.git
cd JwtAuth‑Frontend
2. Instale as dependências
bash
Copiar código
npm install
3. Configure a URL da API
Abra .env ou src/api/api.js e ajuste a baseURL para apontar para sua API backend.
Exemplo:

bash
Copiar código
VITE_API_URL = http://localhost:5043/api
4. Execute o aplicativo
bash
Copiar código
npm run dev
Abra no navegador a URL que aparecer, tipicamente http://localhost:5173.

🔐 Fluxo de autenticação
Páginas do usuário:

/ ‑ Página de Login

/register ‑ Página de Registro

Após o login bem‑sucedido:

É armazenado no localStorage o token JWT retornado pela API

O token é automaticamente enviado em todas as requisições via Axios

Acesso à página protegida:

/dashboard só acessível se houver token válido

Se não houver token ou o token for inválido/expirado → redirecionamento para / (login)

📦 Exemplos de endpoints esperados da API
POST /api/auth/register → Corpo: { "username": "...", "password": "..." }

POST /api/auth/login → Corpo: { "username": "...", "password": "..." }
→ Retorna: { "token": "...", "expiresAt": "..." }

GET /api/sample/protected → Requer header Authorization: Bearer <token>
→ Retorna mensagem e claims do usuário

🎨 Estilização com TailwindCSS
Este projeto usa TailwindCSS para estilização rápida e eficiente.
No arquivo src/index.css:

css
Copiar código
@tailwind base;
@tailwind components;
@tailwind utilities;
E em tailwind.config.js a propriedade content está configurada para escanear arquivos .jsx, .tsx e index.html.

✅ Boas práticas
Armazenar o token no localStorage ou sessionStorage (dependendo do nível de segurança desejado)

Enviar token JWT em todas as requisições protegidas via header Authorization

Redirecionar o usuário para login quando o token for inválido ou expirar

Usar HTTPS em produção e variáveis de ambiente para URL da API e outros segredos

👨‍💻 Autor
João Tomé — desenvolvedor focado em C#/.NET, React e soluções full‑stack.

📖 Licença
Este projeto está sob a licença MIT. Sinta‑se à vontade para usar, modificar e compartilhar.
