import Link from "next/link";

export default () => (
  <header>
    <headercontent>
      <div className="left">
        <Link prefetch href="/">
          <a>
            <span className="logo">memorize</span>
          </a>
        </Link>
      </div>
      <div className="right">
        <Link href="/newcard">
          <div className="nav">
            Add new Card
          </div>
        </Link>
      </div>
    </headercontent>
    <style jsx>{`
      header {
        color: #fff;
        background-color: #29af6a;  
        font-family: 'Work Sans', 'sans-serif';  
        position: fixed;
        width: 100%;     
        height: 4rem;
        padding: 1.2rem 0;
        z-index: 10000;
      }
      headercontent {
        display: flex;
        max-width: 1200px;
        margin: 0 auto;
      }
      .logo {
        display: inline-block;
        color: #fff;
        font-size: 2rem;
        font-weight: 700;
      }
      .logo img {
        height: 35px;
      }
      .left {
        flex:1;
      }
      .right {
        text-align: right;
      }
      .title {
        display: inline-block;
        font-size: 1.5rem;
        text-decoration: none;
        padding: 8px 10px 8px 4px;
        vertical-align: top;
        color: #03A9F4;
      }
      .nav {
        display: inline-block;
        vertical-align: top;
        cursor: pointer;
      }
      @media (max-width: 750px) {
        .title {
          font-size: 16px;
          padding-bottom: 0;
          display:none;
        }
        a.login {
          padding: 24px 10px 23px;
        }
        .nav {
          display: block;
        }
      }
    `}</style>
  </header>
);
