import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Link } from "react-router-dom";
import clsx from "clsx";


type FormValues = {
  userName: string;
  email: string;
  password: string;
  way:unknown;
  dot:number;
  day:number;
  Number:number

};

const handleHomeClick = () => {
    window.location.href = '/'; 
  };

const RegisterForm = () => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
    },
  });

  const { errors } = formState;

  const onSubmit = (formData: FormValues) => {
    console.log(formData);
  };

  const inputClasses =
    "text-white w-full block opacity-50 rounded-none px-2.5 pb-2.5 pt-4 w-80 text-sm text-gray-900 bg-black dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";

  const emailInputClasses = clsx(inputClasses, {
    "ring-2 ring-inset ring-red-600": !!errors?.email,
  });
  const passwordInputClasses = clsx(inputClasses, {
    "ring-2 ring-inset ring-red-600": !!errors?.password,
  });
  const userNameInputClasses = clsx(inputClasses, {
    "ring-2 ring-inset ring-red-600": !!errors?.userName,
  });

  return (
    <div className="relative" style={{
        backgroundImage: `url('https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}>
        <div className="flex justify-between items-center p-4">
        <button
          className="absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleHomeClick}
        >
          Home
        </button>
      </div>
        <section className="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto">
            <div className="bg-black/[0.75] p-8 rounded shadow-md max-w-md w-full mx-auto">
                {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm"> */}
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                    Create new account
                </h2>
                {/* </div> */}

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-white"
                    >
                        Username
                    </label>
                    <div className="mt-2">
                        <input
                        id="userName"
                        type="userName"
                        autoComplete="userName"
                        className={userNameInputClasses}
                        {...register("userName", {
                            required: {
                            value: true,
                            message: "Name is required",
                            },
                            validate: {
                            isValidUsername: (value) =>
                              /^[a-zA-Z0-9]+$/.test(
                                value
                                ) || "Username is not valid",
                            },
                        })}
                        />
                        <ErrorMessage
                        errors={errors}
                        name="userName"
                        render={({ message }) => (
                            <p className="text-red-500">{message}</p>
                        )}
                        />
                    </div>
                    </div>

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
                                value.length >= 9 ||
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
                        Register
                    </button>
                    </div>

                    <div>
                        <Link className="block text-sm font-medium leading-6 text-white" to="/login">Already have an account? Login</Link>
                    </div>
                </form>
                </div>  
            </div>
        </section>
    </div>
  );
};

export default RegisterForm