import { getUser } from "@/app/api/user/procedures";

export const dynamic = "force-dynamic";

const Home: Page = async () => {
  const user = await getUser();

  return (
    <div className="grid h-screen items-center">
      <section className="mx-auto select-none">
        <p>
          <span className="font-bold">
            Hello! <span className="inline-block animate-bounce">👋</span>
          </span>{" "}
          I am
        </p>
        <h1 className="whitespace-nowrap text-5xl font-bold">
          {`${user.name.first} ${user.name.last}`}
        </h1>
        <h2 className="font-medium">A Full-stack Software Engineer.</h2>
      </section>
    </div>
  );
};

export default Home;
