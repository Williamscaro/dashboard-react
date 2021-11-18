import Chart from "../../chart/Chart";
import FeacturedInfo from "../../featuredInfo/FeacturedInfo";
import "./home.css";
import { userData } from "../../../dummyData";

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
    </div>
  );
}
