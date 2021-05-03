import React from "react";
import Posts from "./Posts";
import Stories from "./Stories";
import Extras from "./Extras";

export default function NewsFeed() {
  return (
    <div className="container">
      <div className="empty"></div>

      <div className="feed">
        <Stories />
        <br />
        <Posts />
      </div>

      <div className="extras">
        <Extras />
      </div>
    </div>
  );
}
