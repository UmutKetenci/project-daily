import React from "react";

const Person = ({ avatar_url, html_url, login }) => {
  return (
    <article className="person-card">
      <div className="img-wrapper">
        <img src={avatar_url} alt="image" />
      </div>
      <div className="person-content">
        <p className="person-login">{login}</p>
        <a href={html_url} target={"_blank"} className="person-profile">
          Profile
        </a>
      </div>
    </article>
  );
};

export default Person;
