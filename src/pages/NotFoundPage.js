import Aside from "../components/Aside";

function NotFoundPage() {
  return (
    <div className="flex">
      <div className="">
        <Aside />
      </div>
      <div className="lg:ml-[300px] flex md:p-[50px] w-full">
        <h1 className="text-4xl font-bold text-[#2D3748] text-center">
          Page not found
        </h1>
      </div>
    </div>
  );
}

export default NotFoundPage;
