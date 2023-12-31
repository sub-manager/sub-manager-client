const Logo = () => {
  return (
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
        <img
          className="h-8 w-auto"
          src="/images/logo.png"
          alt="sub manager logo"
          style={{ height: "2em", width: "8em" }}
        />
      </a>
    </div>
  );
};

export default Logo;
