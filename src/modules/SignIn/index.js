import ChakraLogo from "../../assets/images/signin/chakra-logo.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";
import Menu from "../../components/Menu";
import Switch from "../../components/Switch";
import useInput from "../../hooks/use-input";

function SignIn() {
  const [email, handleChangeEmail] = useInput("");
  const [password, handleChangePassword] = useInput("");

  return (
    <div className="__sign_in flex lg:flex-row flex-col text-[#2D3748]">
      <Menu
        className="absolute hidden lg:flex left-0 right-0 max-w-[987px] p-[20px] mt-[24px] rounded-[15px]"
        contentColor="dark"
      />

      <div className="lg:mt-[188px] mt-[50px] lg:w-1/2 w-full justify-end flex flex-row lg:order-1 order-2">
        <div className="flex flex-col w-full xl:w-[80%] 2xl:w-[60%] lg:pr-[100px] 2xl:pr-[239px] px-[20px]">
          <div className="__title text-start flex flex-col justify-center">
            <h1 className="text-[32px] text-[#4FD1C5] font-[700]">
              Welcome Back
            </h1>
            <span className="text-[14px] text-[#A0AEC0] font-[700] mt-[8.5px]">
              Enter your email and password to sign in
            </span>
          </div>

          <form className="__form_inputs mt-[36px]">
            <div className="text-start block mb-[24px]">
              <span className="text-[14px] font-[400] mb-[5.5px] text-slate-700">
                Email
              </span>
              <Input
                type="email"
                name="email"
                value={email}
                placeholder="Your email address"
                onChange={handleChangeEmail}
              />
            </div>
            <div className="text-start block mb-[24px]">
              <span className="text-[14px] font-[400] mb-[5.5px] text-slate-700">
                Password
              </span>
              <Input
                type="password"
                name="password"
                value={password}
                placeholder="Your password"
                onChange={handleChangePassword}
              />
            </div>

            <Switch name="toggleRememberMe">
              <span className="text-[12px] text-[#2D3748]">Remember me</span>
            </Switch>

            <Button
              primary
              className="__signup_btn w-full mt-[36px] mb-[22px] rounded-[12px] p-[15px] h-[45px] justify-center text-[10px] font-[700] uppercase"
            >
              Sign In
            </Button>
          </form>

          <div className="text-[14px] text-[#A0AEC0] flex justify-center">
            <span className="font-[400]">Don't have an account?&nbsp;</span>
            <Link to="/signup" className="text-[#4FD1C5] font-[700]">
              Sign up
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-auto __right_bg lg:h-[872px] h-[250px] right-0 lg:w-[862px] w-full flex justify-center items-center lg:order-2 order-1 bg-[#5CE1CA] lg:rounded-bl-[25px] rounded-none mb-[0] lg:mb-[122px] ">
        <div className="__logo_chakra">
          <img
            src={ChakraLogo}
            alt="chakra-logo"
            className=" lg:h-auto lg:w-auto w-[250px]"
          />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
