import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Post() {
  const params = useParams() as { id: string };
  const [search, setSearch] = useSearchParams();
  const title = search.get("title");
  return (
    <div>
      Post ID: {params.id} {"->"} {title}
      <button
        onClick={() => {
          setSearch({ ...Object.fromEntries(search), me: "strong" });
        }}
      >
        search
      </button>
    </div>
  );
}

export default Post;
