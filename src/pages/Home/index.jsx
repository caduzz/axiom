import { HomeMain } from "./style";

import { NavBar } from "../../components/NavBar";
import { ButtonEnvitDiscord } from "../../components/ButtonEnvitDiscord";
import { EmbedBotDiscord } from "../../components/EmbedBotDiscord";

function Home() {
  return (
    <HomeMain>
      <NavBar active='home'/>
      <div className="bodyArea">
        <div className="bannerArea">
          <div className="bannerInfo">
            <h1>Connecting people transforming communities</h1>
            <p>
              Making your Discord life easier - With Axiom, you're always in control!
            </p>
            <div className="bannerBtnArea">
              <ButtonEnvitDiscord />
              <a href="/#" className="btnAbout">See feature</a>
            </div>
          </div>
          <div className="embedLeft">
            <EmbedBotDiscord />
          </div>
        </div>
      </div>
    </HomeMain>
  );
}

export default Home;
