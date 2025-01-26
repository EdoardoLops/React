import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import GithubUserList from "./GithubUserList";
import NotFound from "./NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/users">Github Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Welcome name="John" />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<GithubUserList />}>
            <Route index element={<p>Add a user and select it</p>} />
            <Route path=":username" element={<ShowGithubUser />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
