import PropTypes from 'prop-types';
import "./App.css"
function Course(props) {

  function Buycourse() {
    console.log("purchased");
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

        <button onClick={Buycourse}>Buy now</button>

      </div>
    )
  );
}

Course.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};

export default Course;