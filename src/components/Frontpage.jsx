import React from 'react'
import Nav from './Nav'

const Frontpage = () => {
  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h1><center>Lets Travel</center></h1>
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://c8.alamy.com/comp/2FMJTCM/lets-travel-vector-design-lets-travel-world-tour-text-in-paper-cut-with-travelling-3d-elements-like-hat-sneakers-and-country-destination-card-2FMJTCM.jpg"
                                class="d-block w-100" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                            <img src="https://image.slidesdocs.com/responsive-images/background/travel-postcard-poster-powerpoint-background_2678403a83__960_540.jpg"
                                class="d-block w-100" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                            <img src="https://w0.peakpx.com/wallpaper/639/301/HD-wallpaper-amazing-places-ultra-nature-lakes-blue-travel-beautiful-landscape-sunset-scenery-lake-background-mountains-amazing-canada-peaks-azure-alberta-moraine-banff-visit-nationalpark-tourism.jpg"
                                class="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
                </div>
            
  )
}

export default Frontpage