import React, { FC } from "react";
import { gql, useQuery } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JobList from "./JobList";
import "antd/dist/antd.css";

import { ALL_POSTS } from "./queries";
import NewPost from "./NewPost";

const Main: FC = () => {
  const { error, loading, data } = useQuery(ALL_POSTS);
  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div>
        <h2 style={{ padding: 10 }}>JobBoard</h2>
      </div>
      <Switch>
        <Route path="/new" render={() => <NewPost />} />
        <Route path="/" render={() => <JobList jobs={data.allPosts} />} />
      </Switch>
    </Router>
  );
};

export default Main;
