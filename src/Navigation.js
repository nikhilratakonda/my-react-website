import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Nav = styled.nav`
  padding: 1em;
  background: #f7f3e9;
  @media (max-width: 700px) {
    padding-top: 64px;
  }
  @media (min-width: 700px) {
    position: fixed;
    width: 449px;
    height: calc(100% - 64px);
    overflow-y: scroll;
  }
`;
const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 4em;
    color: #333;
  }
  a:visited {
    color: #333;
  }
  a:hover,
  a:focus {
    color: #0077cc;
  }
  @media (max-width: 700px) {
    margin-top: 20px;
  }
`;
const Navigation = () => {
  const [articleTitle, setArticleData] = useState([]);
  const APi =
    "https://newsapi.org/v2/everything?q=tesla&from=2023-03-30&sortBy=publishedAt&apiKey=22883d0b3957493682077e42f4703692";
  const getData = async () => {
    const res = await fetch(APi);
    const dataTemp = await res.json();
    console.log("dataTemp", dataTemp);
    setArticleData(dataTemp.articles);
    console.log(dataTemp.articles, "articles");
    console.log(articleTitle, "artticleTest");
  };
  useEffect(() => {
    getData();
    const intervalid = setInterval(() => {
      getData();
    }, 60000);
    return () => clearInterval(intervalid);
  }, []);
  return (
    <Nav>
      <NavList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <div>
          {articleTitle?.slice(0,5).map((item) => {
            return (
              <div>
                <br></br>
                <h3>{item.title}</h3>
              </div>
            );
          })}
        </div>
      </NavList>
    </Nav>
  );
};
export default Navigation;
