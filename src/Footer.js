import React from 'react';
import styled from 'styled-components';
const HeaderBar = styled.header`
    width: 100%;
    padding: 0.5em 1em;
    display: flex;
    height: 64px;
    top : 1084px;
    position: fixed;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    z-index: 1;

`;
const Footer = () => {
return (
    <HeaderBar>
       <h2 style = {{marginLeft:'950px'}}> Copy right @ Nikhil </h2>
    </HeaderBar>
   
    );
};
export default Footer;