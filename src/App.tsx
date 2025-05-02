import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import WebApp from '@twa-dev/sdk';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  background-color: var(--tg-theme-bg-color, #ffffff);
  color: var(--tg-theme-text-color, #000000);
`;

const Header = styled.header`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: var(--tg-theme-text-color, #000000);
  text-align: center;
`;

const Button = styled.button`
  background-color: var(--tg-theme-button-color, #2481cc);
  color: var(--tg-theme-button-text-color, #ffffff);
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px 0;
  width: 200px;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
`;

const Card = styled.div`
  background-color: var(--tg-theme-secondary-bg-color, #f0f0f0);
  border-radius: 12px;
  padding: 20px;
  margin: 10px 0;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Text = styled.p`
  color: var(--tg-theme-text-color, #000000);
  margin: 10px 0;
  text-align: center;
`;

function App() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    WebApp.ready();
    const userData = WebApp.initDataUnsafe?.user;
    if (userData) {
      setUser(userData);
    }
    document.body.style.backgroundColor = WebApp.themeParams.bg_color;
  }, []);

  const handleMainButtonClick = () => {
    WebApp.showAlert('Привет от Telegram Mini App!');
  };

  const handleShareClick = () => {
    WebApp.showAlert('Поделитесь ссылкой: https://t.me/annksndkanfka_bot');
  };

  const handleBackButtonClick = () => {
    WebApp.close();
  };

  return (
    <Container>
      <Header>BomberDann Mini App</Header>
      
      <Card>
        {user && (
          <Text>
            Привет, {user.first_name}!
          </Text>
        )}
        <Text>
          Добро пожаловать в наше приложение!
        </Text>
      </Card>

      <Button onClick={handleMainButtonClick}>
        Нажми меня!
      </Button>

      <Button onClick={handleShareClick}>
        Поделиться
      </Button>

      <Button onClick={handleBackButtonClick}>
        Закрыть
      </Button>
    </Container>
  );
}

export default App;
