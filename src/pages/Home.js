import Bio from "../components/Bio"
import Welcome from "../components/Welcome"

function Home(){
    return (
      <div>
        <Welcome name="Matthew"/>
        <Bio/>
      </div>
    );
    }

export default Home;