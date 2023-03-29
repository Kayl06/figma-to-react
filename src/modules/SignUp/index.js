import Menu from "../../components/Menu";
import Panel from "../../components/Panel";
import Switch from "../../components/Switch";
import Button from "../../components/Button";
import { FaFacebook, FaApple, FaGoogle } from "react-icons/fa";

function SignUp() {
  const socials = [
    {
      icon: <FaFacebook className="w-[25px] h-[25px] text-[#2D3748]" />,
      name: "Facebook",
    },
    {
      icon: <FaApple className="w-[25px] h-[25px] text-[#2D3748]" />,
      name: "Apple",
    },
    {
      icon: <FaGoogle className="w-[25px] h-[25px] text-[#2D3748]" />,
      name: "Google",
    },
  ];

  const renderedSocials = socials.map((social) => {
    return (
      <div className="__fb rounded-[15px] border border-[#E2E8F0] p-[24px]">
        <i>{social.icon}</i>
      </div>
    );
  });
  return (
    <div className="__signup text-[#FFFF]">
      <div className="relative __bg_multi_lines mt-[24px]">
        <Menu />

        <div className="__title text-center flex flex-col justify-center">
          <h1 className="text-[32px] font-[700]">Welcome!</h1>
          <div className="w-[25%] mx-auto mt-[9.5px]">
            <span className="font-[300]">
              Use these awesome forms to login or create new account in your
              project for free.
            </span>
          </div>
        </div>

        <Panel className="__register_form text-[#2D3748] w-[452px] px-[51px] mx-auto rounded-[15px] mt-[66.5px] text-center">
          <div className="mt-[45.5px] pb-[45px]">
            <span className="__title font-[700] text-[18px]">
              Register with
            </span>

            <div className="__social_login flex gap-[15px] justify-center mt-[22px] mb-[20.5px]">
              {renderedSocials}
            </div>

            <span className="__or text-[#A0AEC0] text-[18px] font-[700]">
              or
            </span>

            <form className="__form_inputs">
              <div className="text-start block mb-[24px]">
                <span className="text-[14px] font-[400] mb-[5.5px] text-slate-700">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  className="mt-1 px-[20px] py-[15.25px] rounded-[15px] bg-white border-[1px] border-[#E2E8F0] text-[14px] placeholder-[#A0AEC0] placeholder:font-[400] focus:outline-none block w-full focus:ring-1"
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
                  className="mt-1 px-[20px] py-[15.25px] rounded-[15px] bg-white border-[1px] border-[#E2E8F0] text-[14px] placeholder-[#A0AEC0] placeholder:font-[400] focus:outline-none block w-full focus:ring-1"
                  placeholder="Your email"
                />
              </div>
              <div className="text-start block mb-[24px]">
                <span className="text-[14px] font-[400] mb-[5.5px] text-slate-700">
                  Password
                </span>
                <input
                  type="password"
                  name="password"
                  className="mt-1 px-[20px] py-[15.25px] rounded-[15px] bg-white border-[1px] border-[#E2E8F0] text-[14px] placeholder-[#A0AEC0] placeholder:font-[400] focus:outline-none block w-full focus:ring-1"
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

            <label className="text-[14px] text-[#A0AEC0]">
              <span className="font-[400]">Already have an account? </span>
              <span className="text-[#4FD1C5] font-[700]">Sign in</span>
            </label>
          </div>
        </Panel>
      </div>
    </div>
  );
}

export default SignUp;
