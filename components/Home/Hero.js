import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import SearchForm from "../Search/Form";

const HomeHero = () => {
  const router = useRouter();
  const handleSubmit = (values) => {
    router.push(`/jobs?search=${values.search}`);
  };

  return (
    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
      <div className="flex flex-col md:flex-row">
        <div className="text-left md:w-1/2 mb-4 md:mb-0">
          <h1>
            <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
              Coming soon
            </span>
            <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
              <span className="block text-gray-900">Jobs in Brunei</span>
              <span className="block text-primary-600">at your fingertips</span>
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Apply for the right job at the right time.
          </p>
          <div className="mt-8 sm:max-w-lg text-left mx-0">
            <p className="text-base font-medium text-gray-900">
              Start by searching for a keyword
            </p>
            <SearchForm onSubmit={handleSubmit} />
          </div>
        </div>
        <div className="relative md:w-1/2 w-100 h-64 md:h-auto order-first md:order-last mb-4 md:mb-0">
          <div className="relative mx-auto w-full h-full rounded-lg shadow-lg overflow-hidden">
            <Image
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="sample photo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeHero;
