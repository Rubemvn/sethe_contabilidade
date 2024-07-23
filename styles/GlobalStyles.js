"use client";
import { createGlobalStyle } from "styled-components";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
   &::-webkit-scrollbar {
		width: 11px;
    background: ${({ theme }) => theme.colors.theme01};
	}
  
	&::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.secondary};
    border: 2px solid ${({ theme }) => theme.colors.theme01};
		border-radius: 10px;
	}
  
}

html{
  font-size: 62.5%;
  size: 62.5%;
  scroll-behavior: smooth;
  overflow: hidden;
}

html, body, :root{
  height: 100%;
}

body{
  scroll-behavior: smooth;
  width: 100%;
  height: 100vh;
  /* font-family: 'bricolage Grotesque'; */
  background-color: ${(props) => props.theme.colors.theme01};
  
  -webkit-user-select: none;   
  -moz-user-select: none;
  -ms-user-select: none;     
  user-select: none;

  font-family: ${montserrat.style.fontFamily};
  
  transition: all .3s ease-out;
  
  overflow-y: auto;
} 

*, button, input {
  border: 1;
  outline: 0;
  font-family: ${montserrat.style.fontFamily};
}

button {
  cursor: pointer;
}

h1{
  font-size: 4rem;
}

`;
