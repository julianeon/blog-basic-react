import React from 'react';
import styled from 'styled-components';

const Wrap=styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1em;
`
 
const Primary=styled.div`
    max-width: 650px;
    margin: 0 auto;
    font-family: 'Sen', sans-serif;
`

const Block = styled.div`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  border: 2px solid darkgray;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin-bottom: 3vh;
  margin-top: 1vh;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: darkgray;
    color: white;
  }
`;

const Google = () => (
    <Block>
      <h1>Google</h1>
      <p>This is Google. It's a search engine started by Sergey Brin and Larry Page.</p>
      <p>PageRank is the search algorithm that started it all. Today it's a multibillion dollar company.</p>      
    </Block>
)

const Amazon = () => (
    <Block>
    <h1>Amazon</h1>
      <p>This is Amazon. It started off as an online bookstore.</p>
      <p>Amazon is the owner of AWS, the host this tutorial is targeting.</p>
    </Block>
)

const FaceBook = () => (
    <Block>
    <h1>FaceBook</h1>
      <p>This is FaceBook. It was started by Mark Zuckerberg at Harvard.</p>
      <p>FaceBook is the creator of the framework used to build this website, React.</p>      
    </Block>
)

const Apple = () => (
    <Block>
    <h1>Apple</h1>
      <p>This is Apple. It's CEO is Tim Cook.</p>
      <p>Apple manufactures the iPhone and the Mac.</p>      
    </Block>
)


function App() {
  return (
      <Wrap>
      <Primary>        
        <Amazon/>
        <Google/>
        <FaceBook/>                
        <Apple/>
      </Primary>
      </Wrap>      
  );
}

export default App;
