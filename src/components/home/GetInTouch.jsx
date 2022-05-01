import React from "react";

const GetInTouch = ({ heading, message, email, message2, twitterUser, message3, linkedInUser }) => {
  return (
    <>
      <h2 id='contact' className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}: <a href={`mailto:${email}`}>{email}</a>.
      </p>
      <p className="lead text-center pb-3">
        {message2}: <a href="https://www.twitter.com/iamAngelSH/" target="_blank" rel="noopener noreferrer">{twitterUser}</a>. 
        &nbsp;
        {message3}: <a href="https://www.linkedin.com/in/angelsantanahernandez/" target="_blank" rel="noopener noreferrer">{linkedInUser}</a>.
      </p>
    </>
  );
};

export default GetInTouch;
