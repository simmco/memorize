export default ({ children }) => (
  <div className="page-width">
    {children}
    <style jsx>{`
      .page-width {
        max-width: 1200px;
        margin: 0 auto;
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
