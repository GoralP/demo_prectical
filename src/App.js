import "./App.css";
import "antd/dist/antd.css";
import { SliderMenu } from "./component";
import "bootstrap/dist/css/bootstrap.css";
import "react-quill/dist/quill.snow.css";
import "react-image-crop/dist/ReactCrop.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      {/* <Router>
        <Route path="/" component={SliderMenu}></Route>
        <Route path="subnavone" component={SubnavOne}></Route>
      </Router> */}
      <SliderMenu />
    </div>
  );
}

export default App;
