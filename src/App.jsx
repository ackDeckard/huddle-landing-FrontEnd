function App() {
  return (
    <section className="p-6 max-w-sm grid place-items-center lg:max-w-xl xl:max-w-full xl:grid-cols-2 xl:gap-4">
      <header className="xl:col-start-1 xl:grid xl:justify-center xl:w-full">
        <img
          src="/logo.svg"
          alt="huddle logo"
          className="pb-10 w-1/3 xl:w-1/4 "
        />
        <img
          src="/illustration.svg"
          alt="sketch of a chat history"
          className="xl:w-full"
        />
      </header>

      <main className="text-center xl:text-left xl:col-start-2 xl:place-self-start xl:self-center xl:max-w-2xl xl:mr-28 xl:pr-28">
        <h1 className="px-8 pt-10 text-xl text-white font-semibold leading-9 xl:text-5xl xl:px-0">
          Build The Community Your Fans Will Love
        </h1>

        <p className="text-white px-5 py-5 xl:px-0">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button className="bg-white text-customviolet w-3/5 rounded-full p-1 pb-2 drop-shadow-xl xl:w-2/6 xl:p-0 xl:py-2 hover:bg-customsoftmagenta hover:text-white">
          Register
        </button>
      </main>

      <footer className="pt-10 flex justify-center gap-4 xl:col-start-2  xl:place-self-end   xl:max-w-2xl xl:mr-28 xl:pr-28">
        <a href="#" className="">
          <i class="fa-brands fa-facebook-f rounded-full border text-white p-2 px-[10px] w-8 h-8 hover:text-customsoftmagenta hover:border-customsoftmagenta"></i>
        </a>
        <a href="#" className="">
          <i class="fa-brands fa-twitter rounded-full border text-white p-2 w-8 h-8 hover:text-customsoftmagenta hover:border-customsoftmagenta"></i>
        </a>
        <a href="#" className="">
          <i class="fa-brands fa-instagram rounded-full border text-white p-2 py-[7px] w-8 h-8 hover:text-customsoftmagenta hover:border-customsoftmagenta"></i>
        </a>
      </footer>
    </section>
  );
}

export default App;
