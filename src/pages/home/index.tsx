import React from "react";
import Landing from "/static/media/home/landing.png";
import IndustryLayout from "src/layouts/IndustryLayouts";

function HomePage() {
  return (
    <div>
        123456
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return (
    <div>
      {page}
    </div>
  );
};

export default HomePage;


