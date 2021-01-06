import React from "react";

export default function Search() {
  return (
    <div className="row">
      <div className="search offset-1">
        <form>
          <div className="row">
            <div className="col-lg-10 col-9">
              <input
                type="search"
                placeholder="Enter City"
                id="search-form-input"
              ></input>
            </div>
            <div className="col-lg-2 col-3">
              <button type="submit">
                {" "}
                <i className="fas fa-search-location"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      <i className="fas fa-map-marker-alt" id="current-location-btn"></i>
    </div>
  );
}
