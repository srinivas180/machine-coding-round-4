import { useContext } from "react";
import { Link, NavLink, useParams } from "react-router-dom";

import { SinglePost } from "../../components/SinglePost";
import { ForumContext } from "../../contexts/ForumContext";

import "./index.css";
export function Post() {
    const { forum } = useContext(ForumContext);
    const { postId } = useParams();
    const post = forum.posts.find((post) => post.postId === postId);
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
                    <div>
                        <Link to="/">
                            <i class="fa fa-arrow-left" aria-hidden="true"></i>
                        </Link>
                        <h2>Post</h2>
                    </div>
                    <div className="posts">
                        <SinglePost post={post} />
                    </div>
                    <div className="comments">
                        {post.comments.map((comment) => (
                            <div className="comment-container">
                                <div>
                                    <img
                                        className="post__avatar"
                                        src={comment.picUrl}
                                    />
                                </div>
                                <div className="comment-data">
                                    <div className="comment__header">
                                        <span>{comment.name}</span>
                                        <span>{comment.username}</span>
                                        <span>54m</span>
                                    </div>
                                    <div className="comment__reply">
                                        <a href="/">
                                            Replying to @{post.username}
                                        </a>
                                    </div>
                                    <div className="comment__description">
                                        {comment.comment}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
