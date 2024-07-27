import "./myLocation.css";

export default function MyLocation() {
  return (
    <>
      <div className="my_location">
        <div className="my_location_content">
          <div className="my_location_content_field">
            <h3>Email:</h3>
            <span>subhanshabeer2005@gmail.com</span>
          </div>

          <div className="my_location_content_field">
            <h3>WhatsApp Number:</h3>
            <span>03226694001</span>
          </div>

          <div className="my_location_content_field">
            <h3>Location:</h3>
            <span>Faisalabad, Pakistan</span>
          </div>
        </div>
      </div>
    </>
  );
}
