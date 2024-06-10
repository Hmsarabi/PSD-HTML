const hero = () => {
  return (
    <div className="border border-gray-400 h-96 rounded-3xl m-6">
      <header className="flex">
        <nav className=" w-1/2 rounded-br-2xl bg-slate-950 text-white">
          <ul className="flex  w-full flex-wrap py-2 font-light text-sm justify-around ">
            <li className="sofia">Logo</li>
            <li className=" hover:bg-white hover:text-slate-950">
              <a href="">Home</a>
            </li>
            <li className=" hover:bg-white hover:text-slate-950">
              <a href="">About</a>
            </li>
            <li className=" hover:bg-white hover:text-slate-950">
              <a href="">Solutions</a>
            </li>
            <li className=" hover:bg-white hover:text-slate-950">
              <a href="">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="px-10 py-2">
          <input type="search" placeholder="search" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </header>
      <main className="">
        <section className="flex flex-wrap justify-between relative">
          <div className="w-1/2 p-10 ">
            <h1 className="text-xl font-bold">THE MAD HATTER*</h1>
            <h2 className="text-xl">UI/UX DESIGN — 001</h2>
            <p className="py-8 text-xs">
              <i className="fa-regular fa-circle"></i>{" "}
              <i className="fa-regular fa-circle"></i>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className=" w-1/2 pt-8 pl-20 ">
            <img className="h-60" src="public/img/1.png" alt="" />
            <div>June 2020</div>
            <p>
              <i className="fa-solid fa-arrow-down"></i>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default hero;
