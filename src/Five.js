import React, { useState } from "react";
import './Five.css';
function Five(){
    const[question, setQuestion] =useState(false);
    const[article, setArticle] = useState(false);

    const handleQuestionClick = () => {
        setQuestion(true);
        setArticle(false); 
      };
    
      const handleArticleClick = () => {
        setArticle(true);
        setQuestion(false); 
      };
    return(
        
        <>
            <div className="one">
                <h1 className="heading">New Post</h1>
            </div>
            
            <form className="appl">
            <h2 className="main head">Select post option: </h2>
            
                <input  type="radio" id="question" name="language" value="Question"   onClick={handleQuestionClick}/>
                <label  for="question">Question</label><br/>

                 <input type="radio" id="article" name="language" value="Article" onClick={handleArticleClick} />
                <label for="article">Article</label> 
            </form>
            

          


            {  question && 
            <div>
            <div className="border">
            <p className="question">What do you want to ask or share</p>
            </div>
            <div className="Title_add">
          <label for="title">Title</label>
            <input className="Title" type="text" placeholder="Start your question" name="title"/>

            </div>
            <div className="Second">
                <h3 className="description">Describe your Problem</h3>
                <textarea id="area" rows="10" cols="50"></textarea>
            </div>
            <div className="tats">
            <p>Tags</p>
            <input type="text" id="text" placeholder="Add upto 3 tags"/>
            </div>
            <div className="switch">
            <button>Post</button>

            </div>
            </div>
            }







            {  article && 
            <div className="Article_Margin">
            <div className="Heading_Border">
            <p className="Text_Adding">What do you want to ask or share</p>
            </div>
            <div className="Title_add">
          <label for="title">Title</label>
            <input className="Title" type="text" placeholder="Start your question" name="title"/>

            </div>
            <div>
              <h3 className="textbox">Abstract</h3>
              <textarea id="area" rows='3' cols='20' > Enter 1 parargraph abstract</textarea>
            </div>
            <div className="Second">
                <h3 className="textbox">Describe your Problem</h3>
                <textarea id="area" rows="10" cols="50"></textarea>
            </div>
            <div className="Tags">
            <p>Tags</p>
            <input type="text" id="text" placeholder="Add upto 3 tags"/>
            </div>
            <div className="button">
            <button>Post</button>

            </div>
            </div>
            }
            
            
        </>
    )
}
export default Five;