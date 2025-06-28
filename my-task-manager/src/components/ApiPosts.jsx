import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function ApiPosts() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(6); // posts per page
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch posts in English-like content
  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/posts?limit=100");
        const data = await res.json();
        setPosts(data.posts); // note the structure: data.posts
        setFilteredPosts(data.posts);
      } catch (err) {
        setError("Failed to fetch posts.");
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  // Search filter
  useEffect(() => {
    const results = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPosts(results);
    setPage(1); // reset to first page on search
  }, [search, posts]);

  // Pagination
  const paginatedPosts = filteredPosts.slice(
    (page - 1) * limit,
    page * limit
  );
  const totalPages = Math.ceil(filteredPosts.length / limit);

  return (
    <Card className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">
        API Posts (DummyJSON)
      </h2>

      {/* Search */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 mb-6 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Search by title..."
      />

      {/* Loading & Error */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Post List */}
      <div className="grid md:grid-cols-2 gap-4">
        {paginatedPosts.map((post) => (
          <div key={post.id} className="border p-4 rounded bg-white dark:bg-gray-800">
            <h3 className="font-bold mb-2">{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        <Button
          variant="secondary"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Prev
        </Button>
        <span className="px-4 py-2 text-sm">
          Page {page} of {totalPages}
        </span>
        <Button
          variant="secondary"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </div>
    </Card>
  );
}
