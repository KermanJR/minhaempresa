# 🔗 Guia de Integração - Backend com Frontend em Produção

## Status da Integração

✅ **Backend criado**: `/server` com Express.js + Nodemailer
✅ **Frontend em produção**: https://nexusdeveloper.discloud.app
⏳ **Backend pronto para deploy**: Aguardando upload no Discloud

## Arquitetura

```
Frontend (React + TypeScript)
        ↓
    [CORS Request]
        ↓
Backend (Express.js + Nodemailer)
        ↓
Gmail SMTP
        ↓
nexusdeveloperprofessional@gmail.com
```

## Fluxo de Dados

### 1. Lead Magnet Form
```
User submits email
        ↓
POST /api/lead (email, name)
        ↓
Nodemailer sends welcome email
        ↓
Admin notification email
        ↓
User sees success message
```

### 2. Contact Form
```
User submits contact form
        ↓
POST /api/contact (name, email, phone, message, service)
        ↓
Nodemailer sends confirmation email
        ↓
Nodemailer sends admin notification
        ↓
User sees success message
```

### 3. Newsletter
```
User subscribes to newsletter
        ↓
POST /api/newsletter (email)
        ↓
Nodemailer sends welcome email
        ↓
Admin notification
        ↓
User sees success message
```

## Endpoints Disponíveis

| Método | Endpoint | Descrição | Body |
|--------|----------|-----------|------|
| GET | `/api/health` | Verificar se backend está online | - |
| POST | `/api/lead` | Capturar lead | `{email, name}` |
| POST | `/api/contact` | Contato completo | `{name, email, phone, service, message}` |
| POST | `/api/newsletter` | Inscrição newsletter | `{email}` |

## URLs de Produção Configuradas

**Frontend**: https://nexusdeveloper.discloud.app

**Backend (será atribuído após deploy)**: 
- Exemplo: `https://nexus-backend-xyz.discloud.app`

**CORS Permitido**:
- ✅ https://nexusdeveloper.discloud.app
- ✅ http://localhost:5173 (desenvolvimento)
- ✅ http://localhost:3000 (desenvolvimento)

## Variáveis de Ambiente Necessárias

No painel do Discloud do backend, configure:

```
EMAIL_USER=nexusdeveloperprofessional@gmail.com
EMAIL_PASSWORD=<16-char app password from Google>
PORT=3001
NODE_ENV=production
FRONTEND_URL=https://nexusdeveloper.discloud.app
```

## Passo a Passo de Deploy

### 1. Obter Senha de App do Gmail

1. Acesse https://myaccount.google.com/security
2. Ative "Verificação em 2 etapas" (se não estiver ativada)
3. Volte para segurança e procure "Senhas de app"
4. Selecione "Mail" e "Windows Computer"
5. Copie a senha de 16 caracteres
6. **Não feche**: Você usará no Discloud

### 2. Upload no Discloud

1. Acesse https://discloud.app/dashboard
2. Clique em "Nova Aplicação"
3. Faça upload de toda a pasta `server/`
4. Confirme o upload

### 3. Configurar Variáveis de Ambiente

1. No painel da aplicação, clique em "Configurações"
2. Selecione a aba "Variáveis de Ambiente"
3. Adicione cada variável abaixo:

```
NAME=EMAIL_USER
VALUE=nexusdeveloperprofessional@gmail.com
```

```
NAME=EMAIL_PASSWORD
VALUE=<cole a senha de 16 caracteres do Google>
```

```
NAME=PORT
VALUE=3001
```

```
NAME=NODE_ENV
VALUE=production
```

```
NAME=FRONTEND_URL
VALUE=https://nexusdeveloper.discloud.app
```

4. Salve as configurações
5. Reinicie a aplicação

### 4. Obter URL do Backend

Após o deploy sucesso:
1. No painel do Discloud, procure por "URL da Aplicação"
2. Copie o URL completo (exemplo: `https://nexus-backend-abc123.discloud.app`)
3. Teste: `https://seu-url/api/health`

### 5. Atualizar Frontend

1. Abra `.env.production` no frontend:
```
REACT_APP_API_URL=https://seu-url-do-backend.discloud.app
```

2. Rebuild e redeploy:
```bash
npm run build
# Faça upload do /dist para o Discloud do frontend
```

## Teste de Integração

### Teste Local (antes de deploy)

```bash
# Terminal 1: Backend
cd server
npm start
# Deve mostrar: 🚀 Servidor Nexus Backend rodando em http://localhost:3001

# Terminal 2: Frontend
npm run dev
# Acesse http://localhost:5173
```

### Teste no Navegador

1. Abra https://nexusdeveloper.discloud.app
2. Preencha o formulário de Lead Magnet
3. Clique "Baixar Guia Grátis"
4. Verifique se recebeu email em sua caixa (pode estar em Spam)
5. Verifique se o admin recebeu notificação em nexusdeveloperprofessional@gmail.com

### Teste de Contato

1. Vá para a seção "Contato"
2. Preencha o formulário completo
3. Clique "Enviar Mensagem"
4. Verifique emails nos endereços configurados

## Troubleshooting

### ❌ "Failed to fetch" ou erro de CORS

**Solução**:
1. Verifique se o backend está online
2. Verifique a URL em `.env.production`
3. Confirme que FRONTEND_URL está correto no Discloud
4. Reinicie o backend

### ❌ Emails não chegam

**Solução**:
1. Verifique a senha de app do Gmail
2. Confirme que autenticação 2FA está ativada
3. Verifique logs do backend no Discloud
4. Tente novamente após 5 minutos

### ❌ "PORT is already in use"

**Solução**:
1. Remove PORT das variáveis de ambiente
2. Deixe o Discloud atribuir a porta automaticamente
3. Reinicie a aplicação

### ❌ Backend online mas endpoints retornam 404

**Solução**:
1. Verifique se `src/index.js` está correto
2. Confirme estrutura de pastas:
   ```
   server/
   ├── src/
   │   ├── index.js
   │   ├── services/
   │   │   └── emailService.js
   │   └── middleware/
   │       └── validation.js
   └── package.json
   ```
3. Redeploy no Discloud

## 📊 Monitoramento

No painel do Discloud você pode:
- ✅ Ver logs em tempo real
- ✅ Monitorar uso de CPU e memória
- ✅ Reiniciar aplicação se necessário
- ✅ Ver status de uptime

## 🔐 Segurança

✅ Senhas do Gmail **nunca** no código (apenas em variáveis de ambiente)
✅ CORS restrito ao domínio do frontend
✅ Validação de todos os campos
✅ Sanitização de mensagens antes do envio

## 📝 Checklist Final

- [ ] Pasta `server/` criada com todos os arquivos
- [ ] `npm install` executado em `server/`
- [ ] `.env` local configurado para testes
- [ ] Backend testado localmente (`npm start`)
- [ ] Frontend testa com `REACT_APP_API_URL=http://localhost:3001`
- [ ] Senhas de app do Gmail geradas
- [ ] Backend deployado no Discloud
- [ ] URL do backend obtida
- [ ] Variáveis de ambiente configuradas no Discloud
- [ ] `.env.production` do frontend atualizado
- [ ] Frontend rebuildo e redeployado
- [ ] Testes de integração executados
- [ ] Emails confirmados em ambas caixas

## 📞 Suporte

Se encontrar problemas:
1. Verifique logs do backend (painel Discloud)
2. Teste endpoint `/api/health`
3. Confirme variáveis de ambiente
4. Reinicie aplicações

