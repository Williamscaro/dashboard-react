import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Asigments</h3>

      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Asigments</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Average</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgdate">2 Jun 2021</td>
          <td className="widgetLgAverage">22%</td>
          <td className="widgetLgStatus">
            <Button type="Approved"></Button>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgdate">2 Jun 2021</td>
          <td className="widgetLgAverage">22%</td>
          <td className="widgetLgStatus">
            <Button type="Declined"></Button>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgdate">2 Jun 2021</td>
          <td className="widgetLgAverage">22%</td>
          <td className="widgetLgStatus">
            <Button type="Pending"></Button>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgdate">2 Jun 2021</td>
          <td className="widgetLgAverage">22%</td>
          <td className="widgetLgStatus">
            <Button type="Approved"></Button>
          </td>
        </tr>
      </table>
    </div>
  );
}
