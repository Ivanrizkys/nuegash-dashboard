import Cookies from "js-cookie";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "@/src/hooks/useAuth";
import { useDispatch } from "react-redux";
import Logo from "@/src/assets/icons/Logo";
import { updateUser } from "@/src/global/user";
import Input from "@/src/components/atoms/Input";
import supabaseClient from "@/src/config/supabase";
import Button from "@/src/components/atoms/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthTokenResponse } from "@supabase/supabase-js";
import { Link, useNavigate, Navigate } from "react-router-dom";

interface LoginFormValues {
  Email: string;
  Password: string;
}

const Login = () => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingDemo, setLoadingDemo] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const supabaseLogin = (data: LoginFormValues): Promise<AuthTokenResponse> => {
    return new Promise((resolve, reject) => {
      supabaseClient.auth
        .signInWithPassword({
          email: data.Email,
          password: data.Password,
        })
        .then((res) => {
          if (res.error) {
            reject(res.error);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const handleLogin: SubmitHandler<LoginFormValues> = async (data) => {
    setLoading(true);
    toast.promise<AuthTokenResponse>(supabaseLogin(data), {
      loading: "Signing in...",
      success: (res) => {
        Cookies.set("token", res.data.session?.access_token as string, {
          expires: 7,
        });
        Cookies.set(
          "refresh-token",
          res.data.session?.refresh_token as string,
          { expires: 14 },
        );
        dispatch(
          updateUser({
            Name: res.data.user?.user_metadata.name,
            Class: res.data.user?.user_metadata.class,
            Email: res.data.user?.email as string,
            ImageHash: res.data.user?.user_metadata.image.hash,
            ImageUrl: res.data.user?.user_metadata.image.url,
          }),
        );
        setLoading(false);
        navigate("/");
        return "Login success";
      },
      error: (err) => {
        setLoading(false);
        return "Invalid login credentials";
      },
    });
  };

  const handleLoginDemo = () => {
    setLoadingDemo(true);
    toast.promise<AuthTokenResponse>(
      supabaseLogin({
        Email: "ivnriizky@gmail.com",
        Password: "%0=6SO887}Xw2£RELEGo&Lu8",
      }),
      {
        loading: "Signing in...",
        success: (res) => {
          Cookies.set("token", res.data.session?.access_token as string, {
            expires: 7,
          });
          Cookies.set(
            "refresh-token",
            res.data.session?.refresh_token as string,
            { expires: 14 },
          );
          dispatch(
            updateUser({
              Name: res.data.user?.user_metadata.name,
              Class: res.data.user?.user_metadata.class,
              Email: res.data.user?.email as string,
              ImageHash: res.data.user?.user_metadata.image.hash,
              ImageUrl: res.data.user?.user_metadata.image.url,
            }),
          );
          setLoadingDemo(false);
          navigate("/");
          return "Successfully login with demo account";
        },
        error: (err) => {
          setLoadingDemo(false);
          return "Invalid login credentials";
        },
      },
    );
  };

  if (auth) return <Navigate to="/" />;

  return (
    <div className="min-h-screen bg-primary-0 flex">
      <div className="basis-2/5 shrink-0 lg:shrink-0 lg:basis-[611px] hidden sm:block">
        <img
          src="/login-img.webp"
          alt="login image"
          className="w-full h-screen object-cover inline-block"
        />
      </div>
      <div className="basis-full px-6">
        <div className="max-w-[448px] h-screen flex flex-col items-center justify-center  mx-auto">
          <Logo />
          <h2 className="text-2xl font-bold text-secondary-500 mt-6 text-center">
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
                required: "Email is required",
                pattern: {
                  value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                  message: "Must be a valid email",
                },
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
              autoComplete="on"
              error={!!errors.Password}
              {...register("Password", {
                required: "Password is required",
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
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Login"
                )}
              </Button>
            </div>
            <div className="mt-4">
              <Button type="button" buttonFull onClick={handleLoginDemo}>
                {loadingDemo ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Demo Account"
                )}
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
