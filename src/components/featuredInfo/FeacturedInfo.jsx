import "./feacturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeacturedInfo() {
  return (
    <div className="featured">
      <div className="featureItem">
        <span className="featuredTitle">
          Inters Individuals Complete Asigment
        </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">27%</span>
          <span className="featuredMoneyRate">
            -11 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compare to Last Month</span>
      </div>

      <div className="featureItem">
        <span className="featuredTitle">Inters Grupal Complete Asigment</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">6%</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compare to Last Month</span>
      </div>

      <div className="featureItem">
        <span className="featuredTitle">Attendance</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">60%</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compare to Last Month</span>
      </div>
    </div>
  );
}
