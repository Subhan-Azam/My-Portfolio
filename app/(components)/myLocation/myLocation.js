import "./myLocation.css";

export default function MyLocation() {
  return (
    <>
      <div className="locationCard container">
        <div className="bg container"></div>
        <div className="z-10 scroll-effect-contact-1 my_location">
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
              <span className="text-gray-400">Faisalabad, Pakistan</span>
            </div>
          </div>
        </div>
        <div className="blob"></div>
      </div>

     
    </>
  );
}

 {/* <div className="scroll-effect-contact-1 my_location">
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
      </div> */}