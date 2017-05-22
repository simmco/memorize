import Header from "./header";
import Meta from "./meta";

export default ({ children }) => (
  <div className="main">
    <Meta />
    <Header />

    <div className="page">
      {children}
    </div>

    <style jsx>{`
      .main {
        margin: auto;
        padding: 0 0 0 0;
        background-color: #f2f2f8;
      }
      .page {
        color: #212121;
        background-color: #f2f2f8;
        min-height: 100vh;
        padding: 3rem 0 0 0;
      }
      @media (max-width: 750px) {
        .main {
          padding: 0;
          width: auto;
        }
      }
    `}</style>
  </div>
);
