import Card from "./components/Card";
import posterImg from "./assets/poster.jpg";
import esbPosterImg from "./assets/esb-poster.jpg";
import rotjPosterImg from "./assets/rotj-poster.jpg";

function App() {
  return (
    <div className="app">
      <Card title="Pôster: Star Wars (1977)" posterImg={posterImg} />
      <Card
        title="Pôster: Empire Strikes Back (1980)"
        posterImg={esbPosterImg}
      />
      <Card
        title="Pôster: Return of the Jedi (1983)"
        posterImg={rotjPosterImg}
      />
    </div>
  );
}

export default App;
