const Home: Page = () => {
  return (
    <div className="grid h-screen items-center">
      <section className="mx-auto select-none">
        <p>
          <span className="font-bold">
            Hello! <div className="inline-block animate-bounce">👋</div>
          </span>{" "}
          I am
        </p>
        <h1 className="whitespace-nowrap text-5xl font-bold">Nikko Abucejo</h1>
        <h2 className="font-medium">A Full-stack Software Engineer.</h2>
      </section>
    </div>
  );
};

export default Home;
