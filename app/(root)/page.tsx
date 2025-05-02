import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();

  console.log(session);

  return (
    <>
      <h1 className="font-bold text-4xl font-space-grotesk">
        Welcome to DevFlow
      </h1>
    </>
  );
};

export default Home;
