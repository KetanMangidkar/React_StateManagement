import React, { useState } from "react";

const ContactCard = (props) => {
  // es6 destructuing
  const { name, email, id, phone } = props;
  const [isActive, setIsActive] = useState(false);

  //   conditional rendering
  //   if (isActive) {
  //     return (
  //       <div
  //         onClick={() => {
  //           setIsActive(false);
  //         }}
  //       >
  //         {phone}
  //       </div>
  //     );
  //   }

  return (
    <div>
      <div className="container">
        <div>{name}</div>
        <div>{email} </div>
        <div className="click_container">
          {isActive ? (
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
            >
              {phone}
            </div>
          ) : (
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
            >
              Click to show more 
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
