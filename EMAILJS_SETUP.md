# 📧 Configuração EmailJS - Envio de Emails Direto do Frontend

## ✅ O Que Foi Feito

Instalei e integrei **EmailJS** nos componentes:
- ✅ Contact.tsx (formulário de contato)
- ✅ LeadMagnet.tsx (captura de leads)

**Vantagens**:
- ✅ Sem necessidade de backend
- ✅ Emails enviados diretamente do navegador
- ✅ Gratuito até 200 emails/mês
- ✅ Suporta Gmail SMTP

---

## 🚀 Configuração EmailJS (5 minutos)

### Passo 1: Criar Conta no EmailJS

1. Acesse: https://www.emailjs.com/
2. Clique em "Sign Up" (gratuito)
3. Confirme seu email
4. Faça login

### Passo 2: Conectar Gmail

1. No dashboard, clique em "**Email Services**"
2. Clique em "**Add New Service**"
3. Selecione "**Gmail**"
4. Clique em "**Connect Account**"
5. Faça login com: **nexusdeveloperprofessional@gmail.com**
6. Autorize o EmailJS
7. Dê um nome ao serviço: `service_nexus`
8. Clique em "**Create Service**"

### Passo 3: Criar Template de Contato

1. Clique em "**Email Templates**"
2. Clique em "**Create New Template**"
3. Configure:

**Template Name**: `template_contact`

**Subject**: 
```
Novo Contato - {{from_name}}
```

**Content (HTML)**:
```html
<h2>Novo Contato Recebido!</h2>

<p><strong>Nome:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Telefone:</strong> {{phone}}</p>
<p><strong>Serviço:</strong> {{service}}</p>

<p><strong>Mensagem:</strong></p>
<p>{{message}}</p>

<hr>
<p>Enviado via Nexus Developer Professional</p>
```

**To Email**: `nexusdeveloperprofessional@gmail.com`

4. Clique em "**Save**"

### Passo 4: Criar Template de Lead

1. Clique em "**Create New Template**" novamente
2. Configure:

**Template Name**: `template_lead`

**Subject**: 
```
Novo Lead Capturado - {{from_name}}
```

**Content (HTML)**:
```html
<h2>Novo Lead Capturado!</h2>

<p><strong>Nome:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>

<hr>
<p>Este lead se inscreveu para receber o guia de investimento digital.</p>
<p>Enviado via Nexus Developer Professional</p>
```

**To Email**: `nexusdeveloperprofessional@gmail.com`

3. Clique em "**Save**"

### Passo 5: Obter Public Key

1. Clique em "**Account**" (canto superior direito)
2. Procure por "**API Keys**"
3. Copie a "**Public Key**" (algo como: `user_xxxxxxxxxxxxx`)

---

## 🔧 Atualizar Código

Agora você precisa atualizar os arquivos com sua Public Key:

### Contact.tsx

Procure por:
```typescript
'YOUR_PUBLIC_KEY'
```

Substitua por sua Public Key:
```typescript
'user_xxxxxxxxxxxxx'  // Sua key real
```

### LeadMagnet.tsx

Procure por:
```typescript
'YOUR_PUBLIC_KEY'
```

Substitua por sua Public Key:
```typescript
'user_xxxxxxxxxxxxx'  // Sua key real
```

---

## 📝 Edição Manual dos Arquivos

### 1. Abra `src/components/Contact.tsx`

Localize (linha ~44):
```typescript
await emailjs.send(
  'service_nexus',
  'template_contact',
  templateParams,
  'YOUR_PUBLIC_KEY'    // ← SUBSTITUA AQUI
);
```

Mude para:
```typescript
await emailjs.send(
  'service_nexus',
  'template_contact',
  templateParams,
  'user_xxxxxxxxxxxxx'  // Sua Public Key
);
```

### 2. Abra `src/components/LeadMagnet.tsx`

Localize (linha ~29):
```typescript
await emailjs.send(
  'service_nexus',
  'template_lead',
  templateParams,
  'YOUR_PUBLIC_KEY'    // ← SUBSTITUA AQUI
);
```

Mude para:
```typescript
await emailjs.send(
  'service_nexus',
  'template_lead',
  templateParams,
  'user_xxxxxxxxxxxxx'  // Sua Public Key
);
```

---

## 🧪 Testar

Após atualizar as Public Keys:

```bash
npm run dev
```

1. Acesse http://localhost:5173
2. Preencha o formulário de contato
3. Clique "Enviar Mensagem"
4. Verifique seu Gmail: nexusdeveloperprofessional@gmail.com
5. Deve ter recebido o email! ✅

---

## 📊 Monitoramento

No dashboard do EmailJS você pode:
- Ver quantos emails foram enviados
- Ver taxa de sucesso
- Verificar limite mensal (200 grátis)
- Upgrade se precisar mais

---

## ⚙️ IDs Criados

Anote para referência:

```
Service ID: service_nexus
Template Contato: template_contact
Template Lead: template_lead
Public Key: user_xxxxxxxxxxxxx (você vai obter)
```

---

## 🎯 Vantagens vs Backend

| Aspecto | Backend | EmailJS |
|---------|---------|---------|
| Setup | Complexo | 5 minutos |
| Hospedagem | Precisa servidor | Não precisa |
| Custo | $$$$ | Grátis (200/mês) |
| Manutenção | Alta | Zero |
| Emails | Ilimitados | 200/mês grátis |

---

## 🔒 Segurança

✅ Public Key pode ficar no código (é pública)
✅ EmailJS protege contra spam
✅ Rate limiting automático
✅ Sem senhas expostas

---

## 🚀 Deploy

Após configurar:

```bash
npm run build
```

Faça deploy normalmente no Discloud. EmailJS funciona em qualquer domínio!

---

## 📞 Próximo Passo

1. Crie conta no EmailJS
2. Configure service e templates
3. Copie sua Public Key
4. Substitua nos arquivos
5. Teste localmente
6. Deploy! 🎉

**Não precisa mais do backend!** 🔥

