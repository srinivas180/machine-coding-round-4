import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { SinglePost } from "../../components/SinglePost";
import { ForumContext } from "../../contexts/ForumContext";
import "./index.css";

export function Home() {
    const { forum } = useContext(ForumContext);
    const [sort, setSort] = useState({
        sortByMostVotes: false,
        sortByLatestPosts: false,
    });

    let filteredPosts = forum.posts;

    if (sort.sortByMostVotes) {
        filteredPosts.sort(
            (b, a) => a.upvotes - a.downvotes - (b.upvotes - b.downvotes)
        );
    }

    if (sort.sortByLatestPosts) {
        filteredPosts.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
    }

    return (
        <div className="container">
            <div>
                <h1>MyForum</h1>
            </div>
            <div className="content">
                <div className="nav-container">
                    <nav className="nav">
                        <NavLink className="nav__link" to="/">
                            Home
                        </NavLink>
                        <NavLink className="nav__link">Explore</NavLink>
                        <NavLink className="nav__link">Bookmarks</NavLink>
                        <NavLink className="nav__link">Profile</NavLink>
                    </nav>
                </div>
                <div className="posts-container">
                    <h2>Latest Posts</h2>
                    <div className="posts">
                        {filteredPosts.map((post) => (
                            <SinglePost key={post.postId} post={post} />
                        ))}
                    </div>
                </div>
                <div className="filters">
                    <h3>Sort by</h3>
                    <select
                        onChange={(event) => {
                            if (event.target.value === "latestPosts") {
                                setSort({
                                    sortByMostVotes: false,
                                    sortByLatestPosts: true,
                                });
                            } else if (event.target.value === "mostVotes") {
                                setSort({
                                    sortByMostVotes: true,
                                    sortByLatestPosts: false,
                                });
                            }
                        }}
                    >
                        <option>Select</option>
                        <option value="latestPosts">Latest Posts</option>
                        <option value="mostVotes">Most Votes</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
