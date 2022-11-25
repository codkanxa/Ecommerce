import "./Category-Item.scss";
export const MenuItem = ({ imageUrl, title, id }) => {
  return (
    <div
      className="menu-item"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>{title}</h1>
    </div>
  );
};
