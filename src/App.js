import "./assets/styles.css";
import FooterMenu from "./components/FooterMenu";
import SignUp from "./modules/SignUp";

function App() {
  return (
    <div className="relative __hero container mx-xl-[24px] mx-auto">
      <SignUp />

      <FooterMenu />
    </div>
  );
}

export default App;
