const Header = () => {
  return (
    <section className="flex justify-between items-center bg-regal-blue font-arial">
      <div className="logo">
        <a
          href="/"
          className="text-white font-bold  text-2xl pl-2 cursor-pointer"
        >
          MyNotes
        </a>
      </div>

      <div className="buttons p-5 ">
        <a
          href="/login"
          className="p-2 text-white font-bold  m-2 rounded-3xl cursor-pointer hover:bg-regal-blue"
        >
          Login
        </a>
        <a
          href="/register"
          className="p-5 text-white font-bold  m-2 rounded-3xl cursor-pointer hover:bg-regal-blue"
        >
          Signup
        </a>
      </div>
    </section>
  );
};

export default Header;
