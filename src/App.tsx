import "./App.scss";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ViewTask from "./components/ViewTask";
// import topWave from "./components/assets/top-wave.svg";

const App = () => {
  return (
    <div className="container">
      {/* <img className="wave-image" src={topWave} alt="wave" /> */}
      <Header />
      <AddTask />
      <ViewTask />
    </div>
  );
};

export default App;
