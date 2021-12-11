import Head from "next/head";
import moment from "moment";
import Image from "next/image";

import Page from "../../components/Page";
import Breadcrumb from "../../components/Breadcrumb";

const JobsID = (props) => {
  const { title, description, salary, createdOn } = props;
  const importedOn = moment(createdOn);

  return (
    <>
      <Head>
        <title>B-Open Job Search</title>
        <meta name="description" content="Get your job alerts here first!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <div className="w-full h-96 relative bg-gray-800">
          <Image
            objectFit="cover"
            layout="fill"
            src="/images/hero-image.jpg"
            alt="two people talking"
            className="opacity-75"
          />
          <div className="absolute bottom-3 w-full justify-center px-3 xl:px-0">
            <Breadcrumb
              className="bg-white mx-auto max-w-7xl"
              links={[{ title: "Search Jobs", href: "/jobs" }]}
            />
          </div>
        </div>
        <section className="max-w-7xl mx-auto pt-8 pb-16 px-3 xl:px-0">
          <div className="mt-8 p-4 rounded-2xl shadow-xl">
            <p className="text-4xl font-extrabold text-primary-600 sm:text-5xl">
              {String(title).toUpperCase()}
            </p>
            <p className="text-gray-500 text-xl mt-5">
              {salary || "Salary not indicated."}
            </p>
            <div className="flex mt-5 text-sm text-gray-500">
              <svg
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              <p>
                Imported on
                <time
                  className="ml-1"
                  dateTime={importedOn.format("YYYY-MM-DD")}
                >
                  {importedOn.format("Do MMM yyyy")}
                </time>
              </p>
            </div>
            <p className="text-gray-700 text-2xl mt-4">Description</p>

            <div
              className="mt-2 items-center text-sm text-gray-500"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </section>
      </Page>
    </>
  );
};

JobsID.getInitialProps = async ({ params }) => {
  console.log(params);
  return {
    providerId: 0,
    providerJobId: "",
    companyId: 0,
    title: "Cashier",
    salary: "$ 0-20 Daily",
    salaryMin: 0,
    salaryMax: 20000,
    salaryType: 2,
    location: "  Belait, Liang, Sungai Liang",
    description:
      "\n                        \n                       \t<p><p>Perempuan/Anak Tempatan </p><p>Displin/Peramah </p><p>Ada Pengalaman sebagai juruwang </p><p>Boleh Bercakap & Menulis Dalam B.Melayu & Inggeris </p><p>Pandai Mengendalikan Pembayaran & Melanggani Pelanggan Dengan Baik Terutama Di Waktu Sibuk </p><p>Cepat Belajar </p><p>Tiada Masalah Transport </p><p>Kedatangan yang terbaik </p><p>Tidak ada masalah peribadi </p><p>Able to handle payments and serve customers well especially during busy hours </p>\n                        \n                    ",
    provider: null,
    company: null,
    id: 16,
    isDeleted: 0,
    createdOn: "2021-11-07T03:15:46",
    updatedOn: "2021-11-07T03:15:46",
  };
};

export default JobsID;
