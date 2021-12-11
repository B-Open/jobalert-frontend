import { useRouter } from "next/router";
import Head from "next/head";
import api from "../../components/Api";
import Page from "../../components/Page";
import JobsList from "../../components/List/Jobs";
import SearchForm from "../../components/Search/Form";

const Jobs = ({ data, searchTerm, error }) => {
  const router = useRouter();
  const handleSubmit = (values) => {
    return router.push(`/jobs?search=${values.search}`);
  };

  return (
    <>
      <Head>
        <title>B-Open Job Search</title>
        <meta name="description" content="Get your job alerts here first!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <section className="max-w-7xl mx-auto py-16">
          <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
            <div className="max-w-max md:mx-auto">
              <main className="sm:flex">
                {!!data.length && (
                  <div className="text-left md:text-right">
                    <p className="text-xl">Searching for..</p>
                    <p className="text-4xl font-extrabold text-primary-600 sm:text-5xl">
                      {String(searchTerm).toUpperCase()}
                    </p>
                  </div>
                )}
                {!data.length && !error && (
                  <p className="text-4xl font-extrabold text-primary-600 sm:text-5xl">
                    404
                  </p>
                )}
                <div className="sm:ml-6">
                  <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                      {!!data.length && `${data.length} jobs found.`}
                      {!data.length && !error && "No jobs were found."}
                    </h1>
                    <p className="mt-1 text-base text-gray-500">
                      Try searching for a different keyword
                    </p>
                    <SearchForm onSubmit={handleSubmit} />
                  </div>
                </div>
              </main>
            </div>
          </div>

          {!!data.length && (
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul role="list" className="divide-y divide-gray-200">
                {data.map((jobData) => (
                  <JobsList key={jobData.id} {...jobData} />
                ))}
              </ul>
            </div>
          )}
        </section>
      </Page>
    </>
  );
};

Jobs.getInitialProps = async ({ query }) => {
  const { search } = query;
  try {
    // const result = await api(`/Job/${search}`);
    const result = await api(`/Job/demo`);
    return {
      searchTerm: search,
      data: result.data,
    };
  } catch (error) {
    console.log("error", error.message);
    return {
      searchTerm: search,
      data: [],
      error,
    };
  }
};

export default Jobs;
