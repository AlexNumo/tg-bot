// import { useEffect } from 'react';
import './App.css';
// import { TelegramWebApp } from 'react-telegram-webapp';
// const tg = window.Telegram.WebApp;
function App() {
  // useEffect(() => {
  //   tg.ready();
  // }, []);

  const onClose = () => {
    // tg.close();
    console.log("Click close")
  }
  return (
    <div className="App">
      work
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
