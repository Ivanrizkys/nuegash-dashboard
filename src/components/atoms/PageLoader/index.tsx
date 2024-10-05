import { Loader2 } from "lucide-react";

const PageLoader = () => {
  return (
    <main className="w-full h-dvh flex items-center justify-center">
      <Loader2 className="w-11 h-11 animate-spin text-primary-500" />
    </main>
  );
};

export default PageLoader;
