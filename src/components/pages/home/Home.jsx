import Chart from "../../chart/Chart";
import FeacturedInfo from "../../featuredInfo/FeacturedInfo";
import "./home.css";
import { userData } from "../../../dummyData";
import WidgetLg from "../../widgetLg/WidgetLg";
import WidgetSm from "../../widgetSm/WidgetSm";

export default function Home() {
  return (
    <div className="home">
      <FeacturedInfo />
      <Chart
        data={userData}
        title="Groups Analitics"
        grid
        dataKeyX="name"
        dataKeyY="members"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
