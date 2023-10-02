import {FC} from "react";
import "./App.css";
import CommentFeed from "./Components/CommentFeed/CommentFeed";

const App: FC = () => {
    return (
        <div className="app">
            <CommentFeed />
        </div>
    );
};

export default App;
