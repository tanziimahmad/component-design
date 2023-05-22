import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          <GoBell />
          Click
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something
        </Button>
      </div>
    </div>
  );
}

export default App;
