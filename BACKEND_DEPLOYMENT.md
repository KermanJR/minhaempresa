# 🚀 Guia de Deploy - Nexus Backend no Discloud

## Passo 1: Preparar o Backend para Discloud

### 1.1 Estrutura do Projeto

O backend está em `/server` com a seguinte estrutura:
```
server/
├── src/
│   ├── index.js              # Servidor principal
│   ├── services/
│   │   └── emailService.js   # Serviço de email
│   └── middleware/
│       └── validation.js     # Validação de dados
├── .env                      # Variáveis de ambiente (não commitar!)
├── .env.example              # Template
├── .gitignore                # Ignora node_modules e .env
└── package.json              # Dependências
```

### 1.2 Arquivo de Configuração Discloud

Crie `discloud.config` na raiz do backend (`server/discloud.config`):

```
NAME=nexus-backend
MAIN=src/index.js
DESCRIPTION=Backend para captura de leads e contatos - Nexus Developer Professional
```

## Passo 2: Configurar Variáveis de Ambiente no Discloud

No painel do Discloud, adicione as seguintes variáveis de ambiente:

```
EMAIL_USER=nexusdeveloperprofessional@gmail.com
EMAIL_PASSWORD=seu_app_password_aqui
PORT=3001
NODE_ENV=production
FRONTEND_URL=https://nexusdeveloper.discloud.app
```

### Obter Senha de App do Gmail

1. Acesse [Google Account Security](https://myaccount.google.com/security)
2. Ative "Verificação em 2 etapas"
3. Vá para "Senhas de app"
4. Selecione "Mail" e "Windows Computer"
5. Copie a senha gerada (16 caracteres)
6. Cole em `EMAIL_PASSWORD` no Discloud

## Passo 3: Deploy no Discloud

### Opção A: Upload via Dashboard

1. Acesse [Discloud Dashboard](https://discloud.app)
2. Clique em "Nova Aplicação"
3. Faça upload da pasta `server`
4. Configure as variáveis de ambiente
5. Clique em "Deploy"

### Opção B: Upload via Discloud CLI

```bash
# Instalar Discloud CLI
npm install -g discloud.app

# Fazer login
discloud login

# Deploy
discloud upload
```

## Passo 4: URLs de Produção

Após o deploy:

- **Frontend**: https://nexusdeveloper.discloud.app
- **Backend**: https://seu-app-discloud.discloud.app
  - Health Check: `https://seu-app-discloud.discloud.app/api/health`
  - Lead: `https://seu-app-discloud.discloud.app/api/lead`
  - Contact: `https://seu-app-discloud.discloud.app/api/contact`
  - Newsletter: `https://seu-app-discloud.discloud.app/api/newsletter`

## Passo 5: Atualizar Frontend

Após saber o URL do backend no Discloud, atualize:

**`.env.production` (Frontend)**:
```
REACT_APP_API_URL=https://seu-app-discloud.discloud.app
```

**Rebuild e redeploy o frontend**:
```bash
npm run build
# Faça upload do dist/ para Discloud
```

## Passo 6: Testar a Integração

1. Acesse https://nexusdeveloper.discloud.app
2. Preencha o formulário de lead ou contato
3. Verifique se o email foi enviado para nexusdeveloperprofessional@gmail.com
4. Confirme que você recebeu a confirmação no seu email

## 🔒 Segurança em Produção

✅ **CORS configurado** para aceitar apenas:
- https://nexusdeveloper.discloud.app
- Localhost (desenvolvimento)

✅ **Variáveis sensíveis** armazenadas no Discloud (não no código)

✅ **Validação de dados** em todas as requisições

✅ **Email com autenticação** de aplicativo do Gmail

## 📊 Monitoramento

No Discloud, você pode:
- Ver logs em tempo real
- Monitorar CPU e memória
- Reiniciar aplicação se necessário
- Ver status de uptime

## 🆘 Troubleshooting

### "CORS error" 
- Verifique se o FRONTEND_URL está correto em `.env`
- Reinicie a aplicação no Discloud

### "Authentication failed"
- Confirme se EMAIL_PASSWORD está correta
- Certifique-se que autenticação 2FA está ativada no Gmail

### "PORT is already in use"
- O Discloud atribui a porta automaticamente
- Não especifique PORT em variáveis de ambiente (deixe comentado)

### Emails não são enviados
- Verifique logs no Discloud
- Confirme credenciais do Gmail
- Verifique se "Senhas de app" foi gerada corretamente

## 📝 Próximas Etapas

1. ✅ Backend criado e testado localmente
2. ⏳ Deploy no Discloud
3. ⏳ Atualizar Frontend com URL de produção do backend
4. ⏳ Testar integração completa
5. ⏳ Monitorar logs e performance

