import Cookies from "js-cookie";

const useAuth = (): boolean => {
  const token = Cookies.get("token");
  return !!token;
};

export default useAuth;
