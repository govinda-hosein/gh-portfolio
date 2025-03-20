import React from "react";
import GitRepo from "github-embed-repo";

export default function Greeting({ name }) {
  return (
    <GitRepo
      user="Oct4Pie"
      repo="github-embed-repo"
      options={{
        component: "card",
        showProfile: true,
        showStats: true,
        theme: "dark",
        statsToShow: [
          "stars",
          "forks",
          "watchers",
          "issues",
          "pull_requests",
          "contributors",
        ],
      }}
    />
  );
}
