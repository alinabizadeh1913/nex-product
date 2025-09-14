interface Typographytype {
  tagName?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  color?: string;
  className?: string;
  children?: React.ReactNode;
}

const Typography = ({ tagName, className, children }: Typographytype) => {
  return (
    <>
      {!tagName && (
        <p className={`${className ? className : ""}`}>{children}</p>
      )}
      {tagName === "h1" ? (
        <h1 className={`${className ? className : ""}`}>{children}</h1>
      ) : tagName === "h2" ? (
        <h2 className={`${className ? className : ""}`}>{children}</h2>
      ) : tagName === "h3" ? (
        <h3 className={`${className ? className : ""}`}>{children}</h3>
      ) : tagName === "h4" ? (
        <h4 className={`${className ? className : ""}`}>{children}</h4>
      ) : tagName === "h5" ? (
        <h5 className={`${className ? className : ""}`}>{children}</h5>
      ) : tagName === "h6" ? (
        <h6 className={`${className ? className : ""}`}>{children}</h6>
      ) : tagName === "p" ? (
        <p className={`${className ? className : ""}`}>{children}</p>
      ) : tagName === "span" ? (
        <span className={`${className ? className : ""}`}>{children}</span>
      ) : (
        ""
      )}
    </>
  );
};

export default Typography;
