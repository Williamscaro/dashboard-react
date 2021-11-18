import "./sidebar.css";
import {
  //AdminPanelSettings,TrendingUp
  HomeOutlined,
  PollOutlined,
  AssignmentOutlined,
  PersonOutline,
  PieChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutlineOutlined,
  ErrorOutlined,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <HomeOutlined className="sidebarIcon" />
              Home
            </li>

            <li className="sidebarListItem">
              <PollOutlined className="sidebarIcon" />
              Analitics
            </li>

            <li className="sidebarListItem">
              <AssignmentOutlined className="sidebarIcon" />
              Asigments
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PersonOutline className="sidebarIcon" />
              Intern
            </li>

            <li className="sidebarListItem">
              <PieChart className="sidebarIcon" />
              Reports
            </li>

            <li className="sidebarListItem">
              <AssignmentOutlined className="sidebarIcon" />
              Asigments
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>

            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>

            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutlineOutlined className="sidebarIcon" />
              Manage
            </li>

            <li className="sidebarListItem">
              <PollOutlined className="sidebarIcon" />
              Analitics
            </li>

            <li className="sidebarListItem">
              <ErrorOutlined className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
