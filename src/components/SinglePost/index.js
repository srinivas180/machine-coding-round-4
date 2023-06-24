import { useContext } from "react";
import { Link } from "react-router-dom";

import { ForumContext } from "../../contexts/ForumContext";
import "./index.css";

export function SinglePost({ post }) {
    const { forum, upvote, downvote, bookmarkPost } = useContext(ForumContext);
    const votes = post.upvotes - post.downvotes;

    return (
        <div className="post">
            <div className="post__votes-container">
                <div className="post__votes">
                    <span
                        className="post__upvote"
                        onClick={() => upvote(post.postId)}
                        style={{ color: votes >= 0 ? "rebeccapurple" : "gray" }}
                    >
                        <i className="fa fa-caret-up" aria-hidden="true"></i>
                    </span>
                    <span className="post__vote-count">
                        {post.upvotes - post.downvotes}
                    </span>
                    <span
                        className="post__downvote"
                        onClick={() => downvote(post.postId)}
                        style={{ color: votes < 0 ? "rebeccapurple" : "gray" }}
                    >
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div className="post__data">
                <div className="post__content-header">
                    <img className="post__avatar" src={forum.picUrl} />
                    <span>
                        Posted by{" "}
                        <a href="/" className="profile__link">
                            @{forum.username}
                        </a>
                    </span>
                    <span>54m</span>
                </div>
                <h2 className="post__content-heading">{post.post}</h2>
                <div className="tags">
                    {post.tags.map((tag, index) => (
                        <span key={index} className="tags__item">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="post__description">{post.postDescription}</div>
                <div className="post__options">
                    <Link to={`/post/${post.postId}`}>
                        <i className="fa fa-comment-o" aria-hidden="true"></i>
                    </Link>

                    <i className="fa fa-share-alt" aria-hidden="true"></i>
                    <i
                        className={`fa fa-bookmark${
                            post.isBookmarked ? "" : "-o"
                        }`}
                        style={{
                            color: post.isBookmarked ? "rebeccapurple" : "",
                        }}
                        aria-hidden="true"
                        onClick={() => bookmarkPost(post.postId)}
                    ></i>
                </div>
            </div>
        </div>
    );
}
