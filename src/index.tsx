import ReactDOM from "react-dom";
import "./styles/global.css";
import App from "./App";
import Provider from "./store/Provider";
import printReleaseNotes from "./utils/print-release-notes";

if (process.env.NODE_ENV === "production") {
  printReleaseNotes(process.env.REACT_APP_RELEASE);
}

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
