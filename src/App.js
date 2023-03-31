import Route from "./components/Route";
import "./assets/styles.css";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import DashboardPage from "./pages/DashboardPage";
import TablesPage from "./pages/TablesPage";
import useNavigation from "./hooks/use-navigation";
import classNames from "classnames";

function App() {
  const { currentPath } = useNavigation();

  const classes =
    currentPath === "/dashboard" || currentPath === "/tables"
      ? "bg-[#F8F9FA]"
      : "bg-[#FFFFFF]";

  const appClasses = classNames("relative __main", classes);

  return (
    <div className={appClasses}>
      <Route path="/">
        <SignInPage />
      </Route>

      <Route path="/signup">
        <SignUpPage />
      </Route>

      <Route path="/dashboard">
        <DashboardPage />
      </Route>

      <Route path="/tables">
        <TablesPage />
      </Route>
    </div>
  );
}

export default App;
