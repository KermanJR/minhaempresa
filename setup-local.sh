#!/bin/bash
# Script de teste local - Backend + Frontend Integration

echo "🚀 Iniciando integração Backend + Frontend"
echo ""

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js não está instalado${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Node.js encontrado${NC}"

# Criar .env no servidor se não existir
if [ ! -f "server/.env" ]; then
    echo -e "${YELLOW}⚠️  Criando server/.env${NC}"
    cp server/.env.example server/.env
    echo -e "${YELLOW}⚠️  Edite server/.env e adicione suas credenciais do Gmail${NC}"
fi

# Instalar dependências do backend
echo ""
echo -e "${YELLOW}📦 Instalando dependências do backend...${NC}"
cd server
npm install --silent
cd ..

# Criar .env.local do frontend se não existir
if [ ! -f ".env.local" ]; then
    echo -e "${YELLOW}⚠️  Criando .env.local${NC}"
    echo "REACT_APP_API_URL=http://localhost:3001" > .env.local
fi

echo ""
echo -e "${GREEN}✅ Setup concluído!${NC}"
echo ""
echo -e "${YELLOW}📝 Para iniciar o teste:${NC}"
echo ""
echo "Terminal 1 (Backend):"
echo "  cd server"
echo "  npm start"
echo ""
echo "Terminal 2 (Frontend):"
echo "  npm run dev"
echo ""
echo "Então acesse: http://localhost:5173"
echo ""
