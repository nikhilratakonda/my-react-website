import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
import data from './test.json';
const Home = ({ children }) => {

    useEffect(() => {
        console.log(data);
    }, []);

    // useEffect(() => {
    //     fetch("/src/test.xml", {method: 'GET',
    //     Accept:'application/xml',
    //     headers : new Headers ({
    //       'content-type': 'application/x-www-form-urlencoded',
    //       'Access-Control-Allow-Origin': '*',
    //       'Access-Control-Allow-Methods': 'GET, POST, PUT',
    //       'Access-Control-Allow-Headers': 'Content-Type',  
    //     }),
    //     mode:'no-cors'
    //     })
    //       .then((response) => response.text())
    //       .then((xml) => {
    //         const parser = new DOMParser();
    //         const xmlDoc = parser.parseFromString(xml, "text/xml");
    //         const posts = xmlDoc.getElementsByTagName("post");
    //         const postArr = [];
    //         for (let i = 0; i < posts.length; i++) {
    //           const post = {
    //             id: posts[i].getAttribute("id"),
    //             title: posts[i].getElementsByTagName("title")[0].textContent,
    //             summary: posts[i].getElementsByTagName("summary")[0].textContent,
    //             content: posts[i].getElementsByTagName("content")[0].textContent,
    //             author: posts[i].getElementsByTagName("author")[0].textContent,
    //             date: posts[i].getElementsByTagName("date")[0].textContent,
    //             img_address: posts[i].getElementsByTagName("img_address")[0].textContent,
    //           };
    //           postArr.push(post);
    //         }
    //        console.log('post arrayt',posts,postArr)
    //       });
    //   }, []);

    return (
        <div>
            {data?.blog?.post?.map((item, index) => (<BlogPost {...item} />))}





        </div>
    );
};
export default Home;


const BlogPost = ({ title, date, author, summary, img_address, slug, content }) => {
    return (
        <div className="blog-post">
            <h1 className="blog-post-title"><Link to={`/blog-site`} state={{ title, date, author, summary, img_address, slug, content }}>{title}</Link></h1>
            <p className="blog-post-meta">{date} by {author}</p>
            <div className="blog-post-summary">
                <img src={img_address} alt={title} />
                <p>{summary}</p>
            </div>
        </div>
    );
}