import { createContext, useState } from "react";

import { forumData } from "../db/forumData";

export const ForumContext = createContext();

export function ForumProvider({ children }) {
    const [forum, setForum] = useState(forumData);

    const upvote = (postId) => {
        setForum((forum) => {
            return {
                ...forum,
                posts: forum.posts.map((post) => {
                    return post.postId === postId
                        ? { ...post, upvotes: post.upvotes + 1 }
                        : post;
                }),
            };
        });
    };

    const downvote = (postId) => {
        setForum((forum) => {
            return {
                ...forum,
                posts: forum.posts.map((post) => {
                    return post.postId === postId
                        ? { ...post, downvotes: post.downvotes + 1 }
                        : post;
                }),
            };
        });
    };

    const bookmarkPost = (postId) => {
        setForum((forum) => {
            return {
                ...forum,
                posts: forum.posts.map((post) => {
                    return post.postId === postId
                        ? { ...post, isBookmarked: !post.isBookmarked }
                        : post;
                }),
            };
        });
    };

    return (
        <ForumContext.Provider
            value={{ forum, upvote, downvote, bookmarkPost }}
        >
            {children}
        </ForumContext.Provider>
    );
}
