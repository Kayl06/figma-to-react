import Panel from "../../components/Panel";
import Link from "../../components/Link";
import { IoArrowForward } from "react-icons/io5";

function BigCards() {
  return (
    <div className="__big_cards flex flex-col md:flex-row gap-[24px]">
      <Panel
        className="__first_card mb-[10px] md:mb-0 w-full lg:w-[80%] xl:w-[60%] __item_big bg-white p-[20px] rounded-[15px]"
        shadow={true}
      >
        <div className="flex xl:flex-row flex-col justify-between w-full">
          <div className="__left_content w-full flex flex-col items-start justify-between md:order-1 order-2">
            <div className="">
              <span className="__title text-[12px] font-[700] text-[#A0AEC0]">
                Built by developers
              </span>
              <div className="mt-[3px]">
                <span className="__number mr-[5px] text-[#2D3748] font-bold text-[18px]">
                  Purity UI Dashboard
                </span>
              </div>

              <div className="w-[60%]">
                <span className="text-[14px] font-[400] text-[#A0AEC0]">
                  From colors, cards, typography to complex elements, you will
                  find the full documentation.
                </span>
              </div>
            </div>

            <div className="my-[10px] lg:mt-0">
              <Link className="text-[#2D3748] text-[13px] font-[700]" to="/">
                Read more
                <IoArrowForward className="ml-[7px] w-[15px] h-[12px]" />
              </Link>
            </div>
          </div>

          <div className="__right_content w-full lg:w-[100%] xl:w-[488px] flex flex-auto justify-center items-center md:order-2 order-1 mb-[10px] lg:mb-0 bg-[#4FD1C5] rounded-[12px]"></div>
        </div>
      </Panel>

      <Panel
        className="__second_card rounded-[15px] p-[15px] bg-white flex items-center w-full xl:w-[40%] "
        shadow={true}
      >
        <div className="__bg h-[300px] md:h-[100%] flex flex-col justify-between text-white p-[20px] mb-[6px]">
          <div>
            <div className="__title  relative z-[1]">
              <h1 className="text-[18px] font-bold">Work with Rockets</h1>
            </div>
            <div className="w-[80%] relative z-[1]">
              <span className="text-[14px] font-[400]">
                Wealth creation is an evolutionarily recent positive-sum game.
                It is all about who take the opportunity first.
              </span>
            </div>
          </div>

          <div>
            <Link
              className="text-white relative z-[1] text-[13px] font-[700]"
              to="/"
            >
              Read more
              <IoArrowForward className="ml-[7px] w-[15px] h-[12px]" />
            </Link>
          </div>
        </div>
      </Panel>
    </div>
  );
}

export default BigCards;
