import notfound from "../assets/images/notfound.jpg";

const ErrorPage = () => {
  return (
    <div className="h-[100dvh] flex items-center justify-center">
      <img src={notfound} alt="gg" className="w-[50%] h-[50%]" />
    </div>
  );
};

export default ErrorPage;
