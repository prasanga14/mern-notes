import Header from '../components/Header';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <div className=" h-100 flex flex-col items-center justify-center ">
        <h2 className="font-bold text-3xl">Login</h2>
        <form>
          <input
            className=" w-full m-4 p-4 border-2"
            type="email"
            placeholder="Enter your email"
          />
          <input
            className=" w-full m-4 p-4 border-2"
            type="password"
            placeholder="Enter your password"
          />
          <button
            className="w-1/2 text-white bg-regal-blue ml-48 p-2 cursor-pointer rounded-4xl"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
