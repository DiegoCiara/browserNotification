import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    requestNotificationPermission();
  }, []);

  const handleNotification = () => {
    showNotification('Nova mensagem!', {
      body: 'Você tem uma nova mensagem no chat.',
      icon: '/path/to/icon.png',
      tag: 'nova-mensagem'
    }); console.log('Notification' in window);
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification('Teste de Notificação', {
          body: 'Esta é uma notificação de teste.',
          icon: 'https://ai.softspace.com.br/favicon.svg', // URL de ícone de teste
        });
      }
    });
  };

  return (
    <div>
      <button onClick={handleNotification}>Enviar Notificação</button>
    </div>
  );
}

function requestNotificationPermission() {
  if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log('Permissão concedida para notificações.');
      } else {
        console.log('Permissão negada para notificações.');
      }
    });
  } else {
    console.log('Este navegador não suporta notificações.');
  }
}

function showNotification(title, options) {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, options);
  }
}

export default App;