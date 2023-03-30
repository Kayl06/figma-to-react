import Menu from "../../components/Menu";
import Panel from "../../components/Panel";
import Switch from "../../components/Switch";
import Button from "../../components/Button";
import { FaFacebook, FaApple, FaGoogle } from "react-icons/fa";
import Link from "../../components/Link";
import useInput from "../../hooks/use-input";
import Input from "../../components/Input";

function SignUp() {
  const [name, handleChangeName] = useInput("");
  const [email, handleChangeEmail] = useInput("");
  const [password, handleChangePassword] = useInput("");

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
      <div
        key={social.name}
        className="__fb rounded-[15px] border border-[#E2E8F0] p-[24px]"
      >
        <i>{social.icon}</i>
      </div>
    );
  });
  return (
    <div className="__signup text-[#FFFF]">
      <div className="relative __bg_multi_lines mt-[24px]">
        <Menu className="max-w-[1200px] p-[58.5px] hidden lg:flex" />

        <div className="__title text-center flex flex-col justify-center lg:p-0 pt-[35px] px-[30px]">
          <h1 className="text-[32px] font-[700]">Welcome!</h1>
          <div className="lg:w-[25%] mx-auto mt-[9.5px]">
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
                <Input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={name}
                  onChange={handleChangeName}
                />
              </div>
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
                Sign up
              </Button>
            </form>

            <div className="text-[14px] text-[#A0AEC0] flex justify-center">
              <span className="font-[400]">Already have an account?&nbsp;</span>
              <Link to="/" className="text-[#4FD1C5] font-[700]">
                Sign in
              </Link>
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
}

export default SignUp;
