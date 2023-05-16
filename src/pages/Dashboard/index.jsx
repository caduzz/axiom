import { BotAvatar } from "../../components/BotAvatar";
import { EmbedDashboard } from "./EmbedDashboard";
import { NavBarDashboard } from "./NavBarDashboard";
import { DashboardMain } from "./style";

import { BsChevronBarLeft, BsTools, BsFillShieldFill, BsInfoCircleFill, BsFire } from "react-icons/bs"

function Dashboard() {
  return (
    <DashboardMain>
      <div className="navBarLateral">
        <div className="barLateralTop">
          <button className="closeButton">
            <BsChevronBarLeft size={20} color="#8e92a8" style={{marginRight: 10}}/>
          </button>
          <BotAvatar animated={true}/>
        </div>
        <div className="contentListCommands">
          <input className="category" placeholder="Category"/>
          <ul className="listCommands">
            <li>
              <p className="iconArea"><BsTools size={15} color="#8e92a8" style={{marginRight: 10}}/> Utils</p> <span>5</span>
            </li>
            <li>
              <p className="iconArea"><BsFillShieldFill size={15} color="#8e92a8" style={{marginRight: 10}}/> Moderation</p> <span>6</span>
            </li>
            <li>
              <p className="iconArea"><BsInfoCircleFill size={15} color="#8e92a8" style={{marginRight: 10}}/> Info</p> <span>4</span>
            </li>
            <li>
              <p className="iconArea"><BsFire size={15} color="#8e92a8" style={{marginRight: 10}}/> Tinder</p> <span>7</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="contentPage">
        <NavBarDashboard />
        <div className="contentCommands">
          <EmbedDashboard />
        </div>
      </div>
    </DashboardMain>
  );
}

export default Dashboard;
