import logo from "./logo.svg";
import "./App.css";
import "versoly-ui";
import "./index.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar fixed w-full top-0 bg-dark" id="navbar">
        <div className="container">
          <a
            className="navbar-brand text-white"
            href="/"
            style={{ textShadow: "rgba(255,255,255,0.5) 0 0 12.5px" }}
          >
            <span>Acme Inc</span>
          </a>
          <button
            className="navbar-btn"
            data-toggle="collapse"
            data-target="#navbar-row"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="h-1 rounded-full bg-white" />
            <div className="h-1 mt-1 rounded-full bg-white" />
            <div className="h-1 mt-1 rounded-full bg-white" />
          </button>
          <div className="navbar-row" id="navbar-row">
            <ul className="navbar-col" />
            <ul className="navbar-col" />
            <ul className="navbar-col">
              <li>
                <a
                  className="relative flex-none btn btn-primary bg-gradient-to-r from-primary to-secondary md:py-2 px-6 border-none hover:from-primary-700 hover:to-secondary-700"
                  href="#"
                >
                  <span
                    className="absolute rounded top-[50%] filter blur-lg z-[-1] h-[133%] w-[calc(100%+16px)] opacity-70 transform translate-y-[-50%]"
                    style={{ background: "inherit" }}
                  />
                  <span>Notify Me!</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="flex items-center relative pt-20 bg-dark md:pt-0 md:h-screen">
        <div className="container text-white relative">
          <div className="row flex text-center justify-center">
            <div className="col md:w-7/12">
              <h1
                className="uppercase font-semibold display-2 tracking-wide"
                style={{ textShadow: "rgba(255,255,255,0.5) 0 0 12.5px" }}
              >
                Explain your product and its main benefit
              </h1>
              <p className="mt-6 mb-12 mx-auto opacity-60 leading-6 letter-spacing-lg h5">
                Briefly explain how the solution works, what's unique about it
                and what results will your users get from using it
              </p>
              <form
                className="flex flex-col md:flex-row mx-auto max-w-md gap-y-2"
                data-formid="72b67f3c-c62f-4d62-82b2-13bd99608cba"
              >
                <input
                  type="email"
                  className="flex-grow form-input focus:border-primary rounded-l px-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white border-primary md:rounded-r-none"
                  placeholder="Your best email"
                  name="email"
                  required=""
                />
                <button
                  className="relative flex-none btn btn-primary border-l-none md:rounded-l-none bg-gradient-to-r from-primary to-secondary md:py-4 px-7 border-none hover:from-primary-700 hover:to-secondary-700 z-[1]"
                  type="submit"
                >
                  <span
                    className="absolute rounded top-[50%] filter blur-lg z-[-1] h-[133%] w-[calc(100%+16px)] opacity-70 transform translate-y-[-50%]"
                    style={{ background: "inherit" }}
                  />
                  Notify Me!
                </button>
              </form>
              <div
                data-form-successid="72b67f3c-c62f-4d62-82b2-13bd99608cba"
                className="d-js alert alert-success bg-success text-white"
              >
                <p className="mb-0">
                  We received your message and will contact you back soon.
                </p>
              </div>
              <div
                data-form-errorid="72b67f3c-c62f-4d62-82b2-13bd99608cba"
                className="d-js alert alert-danger bg-danger text-white mt-2"
              >
                <p className="mb-0">Error sending please try again</p>
              </div>
              <p className="mt-4 mb-0 w-full opacity-60">
                Get notified when we launch
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="fixed bottom-0 w-full py-3">
        <div className="container">
          <div className="row items-center justify-center">
            <div className="col lg:w-3/12 text-center mt-3 lg:mt-0">
              <div className="flex flex-row justify-center mb-0 opacity-80 gap-x-4">
                <a className="text-white" href="#" title="facebook">
                  <i className="fab fa-lg fa-facebook" />
                </a>
                <a className="text-white" href="#" title="twitter">
                  <i className="fab fa-lg fa-twitter" />
                </a>
                <a className="text-white" href="#" title="linkedin">
                  <i className="fab fa-lg fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
