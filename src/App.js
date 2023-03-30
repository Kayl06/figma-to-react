import Route from "./components/Route";
import "./assets/styles.css";
import FooterMenu from "./components/FooterMenu";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <div className="relative __hero">
      <Route path="/">
        <SignInPage />
      </Route>
      <Route path="/signup">
        <SignUpPage />
      </Route>

      <FooterMenu />
    </div>
  );
}

export default App;
