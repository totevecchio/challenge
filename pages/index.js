import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import React, { useState } from "react";

export default function Home({ data }) {
  const { user } = useUser();
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredBands = data.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
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
          <h1>
            <form>
              <input
                type="text"
                placeholder="Search"
                className="input"
                onChange={handleChange}
              />
            </form>
            <div className="list">
              {filteredBands.map((data) => (
                <Link href={`/${data.id}`} key={data.id} passHref={true}>
                  <h5 className="bandsBox">{data.name}</h5>
                </Link>
              ))}
            </div>
          </h1>
        </div>
      )}
    </div>
  );
}

Home.getInitialProps = async () => {
  let data;
  try {
    const res = await fetch(
      "https://my-json-server.typicode.com/improvein/dev-challenge/bands"
    );
    data = await res.json();
  } catch (err) {
    console.log("ERROR", err);
    data = [];
  }
  return {
    data,
  };
};
