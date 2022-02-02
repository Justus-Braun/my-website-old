import React from 'react';
import './App.css';
import Button from './components/Button';
import GithubLogo from './assets/github.svg';
import DiscordLogo from './assets/discord.svg';
import CodeLogo from './assets/code.svg';
import MailLogo from './assets/mail.svg';

function App() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })

    }
    window.addEventListener('resize', handleResize)
    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  })

  var svgMultiplyer = 20;
  
  const buttons = {
    display: "flex",
    justifyContent: "center",
    flexDirection: dimensions.width / svgMultiplyer < 50 ? "column" : "row"
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Justus Braun</h1>
        <div style={buttons}>
          <Button imgSrc={CodeLogo} onButtonClick={() => window.location.href = "https://github.com/Justus-Braun/my-website"} svgMultiplyer={svgMultiplyer} dimensions={dimensions} />
          <Button imgSrc={GithubLogo} onButtonClick={() => window.location.href = "https://github.com/Justus-Braun"} svgMultiplyer={svgMultiplyer} dimensions={dimensions} />
          <Button imgSrc={DiscordLogo} onButtonClick={() => window.location.href = "https://gflp10.xyz/online"} svgMultiplyer={svgMultiplyer} dimensions={dimensions} />
          <Button imgSrc={MailLogo} onButtonClick={() => window.location.href = "mailto:justusbraun03@gmail.com"} svgMultiplyer={svgMultiplyer} dimensions={dimensions} />
        </div>
      </header>
    </div>
  );
}

export default App;
