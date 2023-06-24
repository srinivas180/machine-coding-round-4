import { Route, Routes } from "react-router";

import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:postId" element={<Post />} />
            </Routes>
        </div>
    );
}

export default App;
