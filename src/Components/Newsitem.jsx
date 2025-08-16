import image from "../assets/Newsimage.jpeg"
const Newsitem = ({ title, description, src, url }) => {
  return (
    <div
      className="card text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 h-100"
      style={{
        maxWidth: "345px",
        minHeight: "450px",
        backgroundColor: "#1e293b",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <img
        src={src ? src : image}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
        alt="news"
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">
            {title ? title.slice(0, 50) : "No Title Available"}
          </h5>
          <p className="card-text">
            {description ? description.slice(0, 90) : "No Description Available"}
          </p>
        </div>
        <a
          href={url ? url : "#"}
          className="btn btn-primary mt-auto"
          target="_blank"
          rel="noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Newsitem;

