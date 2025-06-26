# 🚀 Comandos para GitHub Pages

## 📋 Passo a Passo Rápido

### 1. **Criar Repositório no GitHub**
- Vá para [github.com](https://github.com)
- Clique em **"New repository"**
- Nome: `damian-painel`
- Deixe público (Public)
- **NÃO** inicialize com README
- Clique **"Create repository"**

### 2. **Subir os Arquivos (Execute no terminal)**

```bash
# Navegue para a pasta do projeto
cd damian-painel

# Inicializar git
git init

# Adicionar todos os arquivos
git add .

# Fazer primeiro commit
git commit -m "Primeira versão do painel Damian: Ruin or Reign"

# Renomear branch para main
git branch -M main

# Adicionar repositório remoto (SUBSTITUA SEU-USUARIO)
git remote add origin https://github.com/SEU-USUARIO/damian-painel.git

# Enviar para GitHub
git push -u origin main
```

### 3. **Ativar GitHub Pages**
1. No GitHub, vá para **Settings** do repositório
2. Role até **Pages** (barra lateral esquerda)
3. Em **Source**, selecione **"Deploy from a branch"**
4. Em **Branch**, selecione **main** e **/(root)**
5. Clique **Save**

### 4. **Acessar o Site**
- URL: `https://SEU-USUARIO.github.io/damian-painel`
- Aguarde alguns minutos para ficar online

## 🔄 **Para Atualizações Futuras**

```bash
# Sempre que fizer mudanças:
git add .
git commit -m "Descrição da atualização"
git push
```

## 📱 **Teste no Celular**
1. Abra o site no celular
2. Teste todas as funcionalidades
3. Adicione aos favoritos
4. Teste o modo escuro

## 💾 **Backup Antes da Viagem**
1. Use o botão ⬇️ no painel
2. Salve o arquivo JSON
3. Envie para Google Drive/Email

---

**🎉 Pronto! Agora você pode usar em qualquer lugar!** 