import React from "react";
import PostCard from "./PostCard";
import axios from "axios";
import Skeleton from "./Skeleton";
import NoData from "./NoData";

export default function Posts() {
  const [loading, setLoading] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const { data, status } = await axios.get(
        "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed"
      );

      if (status === 200) {
        setPosts(data);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <main>
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-8 pb-8 md:pt-16 md:pb-16">
          <h2 className="mb-4 text-xl font-bold">Veridic Article App</h2>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {loading ? (
              [1, 2, 3].map((x, i) => (
                <div key={i}>
                  <Skeleton />
                </div>
              ))
            ) : posts.length > 0 ? (
              posts.map((post, i) => (
                <div key={i}>
                  <PostCard {...post} />
                </div>
              ))
            ) : (
              <NoData />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
