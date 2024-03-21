import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="container mt-5" data-testid="about-content">
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6OwpUhFGsttcKRE1UVHZzcDUsFDTwnGHbNQ&usqp=CAU" className="card-img-top" alt="hello" />
          <div className="card-body">
            <h5 className="card-title">About Us</h5>
            <p className="card-text">Experiences fuelled by innovations, forward thinking, and a commitment to bring the very best to Indian roads.Today, We has its eyes set firmly on the possibilities of tomorrow. And everybody is invited on this journey.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;