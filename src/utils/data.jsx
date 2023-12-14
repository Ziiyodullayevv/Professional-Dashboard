import Users from "../components/users/Users.jsx";
import { AreaChartOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import Analytics from "../components/analytics/Analytics.jsx";
export const data = [
  {
    id: 1,
    icon: <AreaChartOutlined />,
    label: "Analytics",
    path: "/",
    element: <Analytics />,
    hidden: false,
  },
  {
    id: 2,
    icon: <UsergroupAddOutlined />,
    label: "Users",
    path: "/users",
    element: <Users />,
    hidden: false,
  },
];
