import Icon from "../Icon";
import Paper from "../Paper";
import LogoSmarttBot from "../../assets/logoSmarttBot.png";
import BarGraph from "../../assets/barGraph.svg";
import * as S from "./style";

const SideBar = () => (
  <Paper gridArea="SideBar">
    <S.Sidebar>
      <Icon
        icon={LogoSmarttBot}
        alt="SmarttBot"
        separator="Bottom"
        isClickable
      />
      <Icon icon={BarGraph} alt="Análise geral" isClickable />
    </S.Sidebar>
  </Paper>
);
export default SideBar;
