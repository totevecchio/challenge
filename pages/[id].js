import { useUser } from "@auth0/nextjs-auth0";
import { withRouter } from "next/router";
import React from "react";
import fetch from "isomorphic-fetch";

const Page = ({ data, genreList }) => {
  const { user } = useUser();
  console.log(user);
  const filterdGenreCode = genreList.map((g) => {
    return g.name;
  });
  const genre = filterdGenreCode.filter(
    (filterdGenreCode) =>
      filterdGenreCode.toLowerCase() === data.genreCode.replace(/\-/g, " ")
  );
  return (
    <div className="container">
      {!user && (
        <div className="navBox">
          <nav>
            <h3 className="user">Please Login</h3>
            <button>
              <a href="/api/auth/login">Login</a>
            </button>
          </nav>
          <div className="login">
            <h1>Login to continue</h1>
          </div>
        </div>
      )}
      {user && (
        <div className="navBox">
          <nav>
            <h3 className="user">Hi {user.name}</h3>
            <button>
              <a href="/api/auth/logout">Logout</a>
            </button>
          </nav>
          <div className="bandCont">
            <div className="bandBox">
              <h3>Band: {data.name}</h3>
              <h4>Genre: {genre}</h4>
              <h4>Year: {data.year}</h4>
              <h4>Country: {data.country}</h4>
              <h4>Members: </h4>
              {data.members.map((b) => (
                <p key={b.name}>{b.name}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

//Fetching props from the db with the Id passed the URL

Page.getInitialProps = async ({ query }) => {
  const [data, genreList] = await Promise.all([
    fetch(
      `https://my-json-server.typicode.com/improvein/dev-challenge/bands/${query.id}`
    ).then((r) => r.json()),
    fetch(
      `https://my-json-server.typicode.com/improvein/dev-challenge/genre`
    ).then((r) => r.json()),
  ]);
  return { data, genreList };
};

export default withRouter(Page);
