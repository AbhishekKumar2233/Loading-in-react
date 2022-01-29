import "./styles.css";
import ReactLoading from "react-loading";

export default function App() {
  return (
    <div className="App">
      <ReactLoading type="balls" color="#10000F" height={100} width={50} />
      <ReactLoading type="bars" color="#10000F" height={100} width={50} />
      <ReactLoading type="bubbles" color="#10000F" height={100} width={50} />
      <ReactLoading type="cubes" color="#10000F" height={100} width={50} />
      <ReactLoading type="cylon" color="#10000F" height={100} width={50} />
      <ReactLoading type="spin" color="#10000F" height={100} width={50} />
      <ReactLoading type="spokes" color="#10000F" height={100} width={50} />
      <ReactLoading
        type="spinningBubbles"
        color="red"
        height={100}
        width={50}
      />
    </div>
  );
}
