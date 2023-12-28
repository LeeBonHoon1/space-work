import { WheatIcon } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-[100dvh] opacity-50 flex-col space-y-4">
      <WheatIcon className="animate-spin w-8 h-8" />
      <div>잠시만 기다려주세요.</div>
    </div>
  );
};

export default LoadingPage;
