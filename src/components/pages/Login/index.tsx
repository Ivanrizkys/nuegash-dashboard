import { Link } from "react-router-dom";
import Logo from "@/src/assets/icons/Logo";
import Input from "@/src/components/atoms/Input";
import Button from "@/src/components/atoms/Button";
import { useForm, SubmitHandler } from "react-hook-form";

interface LoginFormValues {
  Email: string;
  Password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const handleLogin: SubmitHandler<LoginFormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-primary-0 flex">
      <div className="shrink-0 basis-[611px]">
        <img
          src="/login-img.webp"
          alt="login image"
          className="w-full h-screen object-cover inline-block"
        />
      </div>
      <div className="basis-full px-6">
        <div className="max-w-[448px] h-screen flex flex-col items-center justify-center  mx-auto">
          <Logo />
          <h2 className="text-2xl font-bold text-secondary-500 mt-6">
            Login To Your Dashboard
          </h2>
          <form
            className="w-full text-secondary-500 mt-6"
            onSubmit={handleSubmit(handleLogin)}
          >
            <p className="text-sm font-semibold mb-[2px]">Email</p>
            <Input
              placeholder="Input your email"
              type="email"
              error={!!errors.Email}
              {...register("Email", {
                required: "Please enter your email address!",
                pattern: {
                  value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                  message: "Please enter a valid email address!"
                }
              })}
            />
            <p
              className={`text-xs text-error-500 transition-opacity duration-500 ${
                errors.Email ? "opacity-100" : "opacity-0"
              }`}
            >
              {errors?.Email?.message ?? ""}
            </p>
            <p className="text-sm font-semibold mt-4 mb-[2px]">Password</p>
            <Input
              placeholder="Input your password"
              type="password"
              error={!!errors.Password}
              {...register("Password", {
                required: "Please input your password!",
              })}
            />
            <p
              className={`text-xs text-error-500 transition-opacity duration-500 ${
                errors.Password ? "opacity-100" : "opacity-0"
              }`}
            >
              {errors?.Password?.message ?? ""}
            </p>
            <Link to="/auth/forgot-password">
              <p className="text-xs text-secondary-300 text-right mt-1">
                Forgot Password ?
              </p>
            </Link>
            <div className="w-full mt-4">
              <Button type="submit" buttonFull>
                Login
              </Button>
            </div>
            <p className="text-xs text-secondary-300 text-center mt-6">
              Don't have an account yet ?{" "}
              <Link to="/auth/register">
                <span className="text-primary-500">Sign Up</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
