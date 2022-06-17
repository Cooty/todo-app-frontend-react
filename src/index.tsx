import ReactDOM from "react-dom";
import "./styles/global.css";
import App from "./App";
import Provider from "./store/Provider";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
