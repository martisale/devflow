import { Button } from "@/components/ui/button";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import LocalSearch from "@/components/search/LocalSearch";
import HomeFilter from "@/components/filters/HomeFilter";
const questions = [
  {
    _id: "1",
    title: "How to use Next.js?",
    description:
      "How to use Next.js? I'm new to Next.js and I'm trying to learn how to use it.",
    tags: [
      {
        _id: "1",
        name: "JavaScript",
      },
      {
        _id: "2",
        name: "JavaScript",
      },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "https://via.placeholder.com/150",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to use Tailwind CSS?",
    description:
      "How to use Tailwind CSS? I'm new to Tailwind CSS and I'm trying to learn how to use it.",
    tags: [
      {
        _id: "1",
        name: "React",
      },
      {
        _id: "2",
        name: "React",
      },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "https://via.placeholder.com/150",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    const matchesQuery = question.title
      .toLowerCase()
      .includes(query?.toLowerCase());
    console.log(matchesQuery);
    const matchesFilter = filter
      ? question.tags[0].name.toLowerCase() === filter.toLowerCase()
      : true;
    return matchesQuery && matchesFilter;
  });

  return (
    <>
      <section className="w-full flex flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          asChild
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w_full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </>
  );
};

export default Home;
