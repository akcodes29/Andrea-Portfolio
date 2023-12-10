import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard({title, description, imgsrc, buttonText, link, githublink}) {
  return (
    <Card style={{ width: '30rem', margin: "5px" }}>
      <Card.Img variant="top" src={imgsrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary">{buttonText}</button>
        </a>
        <br />
        <br />
        <a href={githublink} target="_blank" rel="noopener noreferrer">
          <button className="githubRepo">Github Repo</button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;