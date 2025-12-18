# Configuração de Deploy e Domínio

## 1. Configurar DNS no Render (registro.br)

### Passo 1: Acessar Painel do Render
1. Vai em: https://dashboard.render.com
2. Selecione seu projeto
3. Clique em "Settings"
4. Vá para "Custom Domain"
5. Adicione o domínio: `vanusaazevedo.com.br`

### Passo 2: Copiar DNS Records do Render
Render vai te mostrar um registro tipo:
- **Type:** CNAME
- **Name:** vanusaazevedo.com.br
- **Value:** (algo como seu-app.onrender.com)

### Passo 3: Configurar no registro.br
1. Acesse: https://www.registro.br
2. Faça login na sua conta
3. Vá em "Meus Domínios"
4. Clique no domínio `vanusaazevedo.com.br`
5. Vá em "Editar DNS"
6. **Adicione um novo registro CNAME:**
   - **Nome:** vanusaazevedo.com.br (ou deixar em branco para raiz)
   - **Tipo:** CNAME
   - **Valor:** (copie exatamente do Render)

7. **Salve as alterações**

⏳ **Espere 24-48 horas** para o DNS propagar

---

## 2. Configurar SSL no Render
Após DNS estar propagado:
1. Render automaticamente gera certificado SSL (HTTPS)
2. Você pode testar em: https://vanusaazevedo.com.br

---

## 3. Configurar Google Business Profile

### Passo 1: Criar/Reclamar Negócio
1. Acesse: https://business.google.com
2. Clique em "Gerenciar meu negócio"
3. Preencha as informações:
   - **Nome:** Vanusa Azevedo - Psicóloga
   - **Categoria:** Psicólogo
   - **Cidade:** Patrocínio, MG
   - **Telefone:** (34) 99228-1523
   - **Email:** contato@vanusaazevedo.com.br
   - **Website:** https://vanusaazevedo.com.br
   - **Horário:** Seg-Sex 08:00-18:00

### Passo 2: Adicionar Fotos
- Foto de perfil profissional
- Fotos do consultório/local de atendimento
- Foto de apresentação

### Passo 3: Adicionar Serviços
- Terapia Individual
- Terapia de Casal
- Atendimento Online
- Tratamento de Ansiedade

### Passo 4: Verificação do Negócio
Google enviará:
- **Verificação por telefone (recomendado)** - ligação com código
- Ou envio de código por correio

---

## 4. Verificar SEO no Google

### Google Search Console
1. Acesse: https://search.google.com/search-console
2. Clique em "Adicionar propriedade"
3. Escolha "Nome de domínio"
4. Digite: `vanusaazevedo.com.br`
5. Siga as instruções para adicionar registro DNS

Após verificação:
- Enviar sitemap: https://vanusaazevedo.com.br/sitemap.xml
- Monitorar indexação
- Verificar erros

### Google Analytics
1. Acesse: https://analytics.google.com
2. Crie uma nova propriedade
3. Copie o ID de rastreamento
4. Adicione ao seu HTML (se necessário)

---

## 5. Checklist Final

- [ ] DNS configurado no registro.br
- [ ] Domínio funcionando em HTTPS no Render
- [ ] Google Business Profile criado
- [ ] Negócio verificado no Google
- [ ] Sitemap adicionado ao Search Console
- [ ] Robots.txt indexável
- [ ] Primeiras avaliações/reviews no Google

---

## Contato para Suporte
- **Email:** contato@vanusaazevedo.com.br
- **WhatsApp:** (34) 99228-1523
- **Instagram:** @vanusaa_azevedo
