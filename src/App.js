import './App.css';
import Button from './components/Button';
import GithubLogo from './assets/github.svg';
import DiscordLogo from './assets/discord.svg';
import CodeLogo from './assets/code.svg';
import MailLogo from './assets/mail.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Justus Braun</h1>
        <div className="buttons">
          <Button imgSrc={CodeLogo} onButtonClick={() => window.location.href = "https://github.com/Justus-Braun/my-website"} />
          <Button imgSrc={GithubLogo} onButtonClick={() => window.location.href = "https://github.com/Justus-Braun"} />
          <Button imgSrc={DiscordLogo} onButtonClick={() => window.location.href = "https://gflp10.xyz/online"} />
          <Button imgSrc={MailLogo} onButtonClick={() => window.location.href = "mailto:justusbraun03@gmail.com"} />
        </div>
      </header>
    </div>
  );
}

export default App;
