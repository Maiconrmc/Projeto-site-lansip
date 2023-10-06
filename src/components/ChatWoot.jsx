
import React, { useEffect } from 'react';

function ChatwootChat() {
  useEffect(() => {
    // Configurações do Chatwoot
    const BASE_URL = 'https://cwt.lansip.lansip.net.br';
    const websiteToken = 'gd25HbHYBaLzTSyp4Sdzy3qb';

    // Cria o elemento <script> dinamicamente
    const script = document.createElement('script');
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.defer = true;
    script.async = true;

    // Insere o elemento <script> no DOM
    document.head.appendChild(script);

    // Quando o script do Chatwoot SDK é carregado com sucesso, inicializa o SDK
    script.onload = () => {
      window.chatwootSDK.run({
        websiteToken: websiteToken,
        baseUrl: BASE_URL
      });
    };
  }, []);

  return (
    <div>
      {/* Aqui você pode adicionar o conteúdo do seu componente */}
      
    </div>
  );
}

export default ChatwootChat;