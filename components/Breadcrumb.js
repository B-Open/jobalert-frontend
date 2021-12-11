import Link from "next/link";
import cx from "classnames";

/**
 * title
 * href
 */

const Breadcrumb = ({ links, className }) => {
  return (
    <nav
      className={cx("flex p-4 rounded-2xl shadow-xl", className)}
      aria-label="Breadcrumb"
    >
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link href="/">
              <a className="text-gray-400 hover:text-gray-500">
                <svg
                  className="flex-shrink-0 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span className="sr-only">Home</span>
              </a>
            </Link>
          </div>
        </li>

        {links.map((eachLink) => (
          <li key={eachLink.title}>
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 h-5 w-5 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <Link href={eachLink.href}>
                <a className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                  {eachLink.title}
                </a>
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
