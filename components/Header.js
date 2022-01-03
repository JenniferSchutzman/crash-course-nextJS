import headerStyles from "../styles/Header.module.css";

function Header() {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span>News
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with the latest web dev news{" "}
      </p>
      {/* should only really use this style jsx if you have conditional styling and want to insert js  */}
      {/* <style jsx>
        {`
          .title {
            color: ${x > 3 ? "red" : "blue"};
          }
        `}
      </style> */}
    </div>
  );
}

export default Header;
