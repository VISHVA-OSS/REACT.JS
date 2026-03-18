import PropTypes from 'prop-types';
import "./App.css"
import { useState } from 'react';
function Course(props) {

  // UseState

  const [purchased, setPurchased] = useState(false);

  function Buycourse() {
    console.log("purchased");
    setPurchased(true);
  }

  return (
    props.name && (
      <div className='card'>

        <div className="image-container">
          <img src={props.image} alt="" className="card-img" />
          <div className="time-badge">⏱ 26 MINS</div>
        </div>

        <h3>{props.name}</h3>
        <p>{props.price}</p>

        <button className='buy-btn' onClick={Buycourse}>Buy now</button>
        <button className='buy-btn' onClick={()=>props.delete(props.id)}>Delete</button>
        <p>{purchased ? "Already Purchased " : "Get it Now"}</p>

      </div>
    )
  );
}

Course.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};

export default Course;