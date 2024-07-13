import React from "react";
function LoadingEffect() {
  return (
    <>
      <div className="loading_Container">
        <div className="loading_Effect">
          <img
            src={`${process.env.PUBLIC_URL}/loading.webp`}
            alt="Loading Image"
          />
          <h4>Please wait...</h4>
        </div>
      </div>
    </>
  );
}
export default LoadingEffect;
