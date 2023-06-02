import React from "react";
import "./place_bid.css";

const Popup = ({ inputValue, handleInputChange, handleBid, handleCancel }) => {
  return (
    <div className="popup-container">
      <div className="popup-box">
        <div className="popup-content">
          <div className="tab">
            <p>Current Bid: 3.2 ETH</p>
          </div>
          <div className="tab">
            <p>Gas fee: 0.003eth</p>
          </div>
          <div className="tab">
            <p>
              Input Your Bid Value
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder=" Enter bid value"
              />
            </p>
          </div>
          <div className="buttons">
            <button onClick={handleBid}>Place Bid</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
