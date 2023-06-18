import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({
  _id,
  title,
  summary,
  content,
  createdAt,
  author,
}) {
  return (
    <div>
      <div className="post">
        <div className="texts">
          <Link to={`/post/${_id}`}>
            <h2>{title}</h2>{" "}
          </Link>
          <p className="info">
            <Link to={`/post/${_id}`} className="author">
              Author: {author.name}
            </Link>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </p>
          <Link to={`/post/${_id}`}>
            <p className="summary">{summary}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
