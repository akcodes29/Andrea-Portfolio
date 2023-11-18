import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard({title, description, imgsrc, buttonText, link}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgsrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary">{buttonText}</button>
        </a>
        {/* <Button variant="primary" className="btn btn-primary">{buttonText}</Button> */}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;