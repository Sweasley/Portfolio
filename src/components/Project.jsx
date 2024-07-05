import Customer from "../assets/Customer.png";
import Admin from "../assets/Admin.png";

const Project = () => {
  return (
    <>
      <div
        className="bg-black max-w-[1200px] mx-auto p-5 mb-5 overflow-hidden"
        id="Project"
      >
        <div className="pb-8">
          <p className="mb-3 font-bold primary-color text-4xl mx-auto grad-text">
            Projects
          </p>
          <p>Here are some of my projects:</p>
        </div>
        {/* Grid for both desktop and mobile screens */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          {/* Project 1 */}
          <div className="relative overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md bg-cover">
            <img
              src={Customer}
              alt="Travel IQ"
              className="object-cover w-full h-[200px] sm:h-[200px] transform transition-transform duration-300 hover:scale-105"
            />
            <div className="opacity-0 group-hover:opacity-90 bg-gray-700/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Travel IQ
              </span>
              <div className="pt-8 text-center">
                <a href="https://sweasley.github.io/TravelIQ/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold">
                    View Project
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Description for Project 1 */}
          <div className="text-center mt-4 text-white">
            <p className="text-lg font-medium text-start">
              Travel IQ is a customer-facing travel management application aimed
              at providing users with comprehensive travel planning tools and
              information. It also has an admin side which...
            </p>
          </div>

          {/* Project 2 */}
          <div className="relative overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md bg-cover">
            <img
              src={Admin}
              alt="Admin Dashboard"
              className="object-cover w-full h-[200px] sm:h-[200px] transform transition-transform duration-300 hover:scale-105"
            />
            <div className="opacity-0 group-hover:opacity-90 bg-gray-700/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Admin Dashboard
              </span>
              <div className="pt-8 text-center">
                <a href="https://glairiest-significa.000webhostapp.com/web/php/login.php">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold">
                    View Project
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Description for Project 2 */}
          <div className="text-center mt-4 text-white">
            <p className="text-lg font-medium text-start">
              Admin Dashboard for Travel IQ provides robust tools for managing
              travel data, user accounts, and operational insights. It also has
              a Forecasting feature, with customer segmenation. <br />
              <span className="primary-color">
                Use this credentials to login and view the page: <br />
                email: test@email.com <br />
                pass: 123
              </span>
            </p>
          </div>

          {/* Repeat similar structure for other projects */}
        </div>
      </div>
    </>
  );
};

export default Project;
