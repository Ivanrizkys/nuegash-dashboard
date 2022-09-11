import { Link } from "react-router-dom";
import Logo from "@/src/assets/icons/Logo";

const AppLogo = () => {
  return (
    <Link to="/">
      <div className="flex items-center gap-x-3">
        <Logo />
        <h1 className="text-secondary-500 text-2xl font-semibold">Nuegas</h1>
      </div>
    </Link>
  );
};

export default AppLogo
