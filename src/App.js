import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import StatsCards from "./Components/StatsCards";
import Ongoing from "./Components/Ongoing";
import Walllove from "./Components/Walllove";
import CoreValue from "./Components/CoreValue";
import JoinCTA from "./Components/JoinCTA";
function App() {
  return (
    <div className="App">
      <Header />
      <StatsCards />
      <Ongoing />
      <Walllove />
      <CoreValue />
      <JoinCTA />
    </div>
  );
}

export default App;
