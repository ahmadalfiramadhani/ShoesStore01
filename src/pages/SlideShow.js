import React from "react";

const SlideShow = () => {
  return (
    <div className="container-xxl mt-5">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            style={{
              borderRadius: "55%",
              height: "15px",
              width: "15px",
              marginRight: "10px",
            }}
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            style={{
              borderRadius: "55%",
              height: "15px",
              width: "15px",
              marginRight: "10px",
            }}
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            style={{
              borderRadius: "55%",
              height: "15px",
              width: "15px",
            }}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1611299106168-277a21fad977?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8am9yZGFuJTIwc2hvZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              class="d-block w-100"
              alt="shoefantasy"
              height="843.125px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://c0.wallpaperflare.com/preview/28/600/957/pair-of-black-white-and-red-air-jordan-1-shoes.jpg"
              class="d-block w-100"
              alt="shoefantasy"
              height="843.125px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://wallpapers-base.com/wp-content/uploads/2018/08/high_quality_wallpaper_HD_1080_IDS_1003367.png"
              class="d-block w-100"
              alt="shoefantasy"
              height="843.125px"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            style={{ height: "50px", width: "50px" }}
            class="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            style={{ height: "50px", width: "50px" }}
            class="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span
            style={{ height: "50px", width: "50px" }}
            class="visually-hidden"
          >
            Next
          </span>
        </button>
      </div>
    </div>
  );
};

export default SlideShow;