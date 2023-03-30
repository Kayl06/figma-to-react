import ChakraLogo from "../../assets/images/signin/chakra-logo.png"
import Button from "../../components/Button";
import Link from "../../components/Link";
import Menu from "../../components/Menu";
import Switch from "../../components/Switch";

function SignIn() {
  return (
    <div className="__sign_in flex text-[#2D3748]">
      <Menu
        className="absolute left-0 right-0 max-w-[987px] p-[20px] mt-[24px] rounded-[15px]"
        contentColor="dark"
      />

      <div className="mt-[188px] w-1/2 justify-center flex-auto order-1">
        <div className="flex flex-col xl:w-[35%] w-full md:px-[20px] ml-auto mr-[239px]">
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
                Name
              </span>
              <input
                type="text"
                name="name"
                className="mt-1 px-[20px] py-[15.25px] rounded-[15px] bg-white border-[1px] border-[#E2E8F0] text-[14px] placeholder-[#A0AEC0] placeholder:font-[400] focus:outline-none block w-full h-[50px] focus:ring-1"
                placeholder="Your full name"
              />
            </div>
            <div className="text-start block mb-[24px]">
              <span className="text-[14px] font-[400] mb-[5.5px] text-slate-700">
                Email
              </span>
              <input
                type="email"
                name="email"
                className="mt-1 px-[20px] py-[15.25px] rounded-[15px] bg-white border-[1px] border-[#E2E8F0] text-[14px] placeholder-[#A0AEC0] placeholder:font-[400] focus:outline-none block w-full h-[50px] focus:ring-1"
                placeholder="Your email address"
              />
            </div>
            <div className="text-start block mb-[24px]">
              <span className="text-[14px] font-[400] mb-[5.5px] text-slate-700">
                Password
              </span>
              <input
                type="password"
                name="password"
                className="mt-1 px-[20px] py-[15.25px] rounded-[15px] bg-white border-[1px] border-[#E2E8F0] text-[14px] placeholder-[#A0AEC0] placeholder:font-[400] focus:outline-none block w-full h-[50px] focus:ring-1"
                placeholder="Your password"
              />
            </div>

            <Switch name="toggleRememberMe">
              <span className="text-[12px] text-[#2D3748]">Remember me</span>
            </Switch>

            <Button
              primary
              className="__signup_btn w-full mt-[36px] mb-[22px] rounded-[12px] p-[15px] h-[45px] justify-center text-[10px] font-[700] uppercase"
            >
              Sign up
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

      <div className="flex-auto __right_bg h-[872px] right-0 w-[862px] flex justify-center items-center order-2 bg-[#5CE1CA] rounded-bl-[25px] mb-[122px] ">
        <div className="__logo_chakra">
          <img src={ChakraLogo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SignIn;