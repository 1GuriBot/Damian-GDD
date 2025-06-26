#!/bin/bash

echo "========================================"
echo "   Damian Painel - Servidor Local"
echo "========================================"
echo ""
echo "Iniciando servidor na porta 8000..."
echo ""
echo "Para acessar no celular:"
echo "1. Conecte o celular na mesma rede WiFi"
echo "2. Digite no navegador: http://SEU-IP:8000"
echo ""
echo "Para descobrir seu IP, digite: ifconfig (Linux/Mac) ou ipconfig (Windows)"
echo ""
echo "Pressione Ctrl+C para parar o servidor"
echo "========================================"
echo ""

python3 -m http.server 8000 