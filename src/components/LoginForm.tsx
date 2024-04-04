import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Link } from "react-router-dom";
import clsx from "clsx";

type FormValues = {
  email: string;
  password: string;
};

const handleHomeClick = () => {
  window.location.href = '/'; 
};

const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { errors } = formState;

  const onSubmit = (formData: FormValues) => {
    console.log(formData);
  };

  const inputClasses =
    "block w-full rounded-md border-0 py-1 text-blue-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";

  const emailInputClasses = clsx(inputClasses, {
    "ring-2 ring-inset ring-red-600": !!errors?.email,
  });
  const passwordInputClasses = clsx(inputClasses, {
    "ring-2 ring-inset ring-red-600": !!errors?.password,
  });

  return (
    <div className="relative" style={{
      backgroundImage: `url('https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }}>
      <div className="flex justify-between items-center p-4">
        <div></div> 
        <button
          className="absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleHomeClick}
        >
          Home
        </button>
      </div>

      <section className="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto">
        <div className="bg-black/[0.75]  p-8 rounded shadow-md max-w-md w-full mx-auto ">
          {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm"> */}
            <h2 className="mt-14 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Sign in to your account
            </h2>
          {/* </div> */}

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={emailInputClasses}
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      validate: {
                        isValidEmail: (value) =>
                          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                            value
                          ) || "Email is not valid",
                      },
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) => (
                      <p className="text-red-500">{message}</p>
                    )}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    className={passwordInputClasses}
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      validate: {
                        minLength: (value) =>
                          value.length >= 8 ||
                          "Password should has more than 8 characters",
                        isCapitalLetter: (value) =>
                          /[A-Z]/.test(value) ||
                          "Password should has at least one capital letter",
                        isLowerCaseLetter: (value) =>
                          /[a-z]/.test(value) ||
                          "Password should has at least one lower case letter",
                        isContainNumber: (value) =>
                          /\d/.test(value) ||
                          "Password should has at least one number",
                      },
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="password"
                    render={({ message }) => (
                      <p className="text-red-500">{message}</p>
                    )}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>

              <div>
                <Link className="block text-sm font-medium leading-6 text-white" to="/register">Don't have an account? Register</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;