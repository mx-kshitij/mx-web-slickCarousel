import { ReactElement, createElement } from "react";
import { StaticCarousel } from "./components/StaticCarousel";
import { SlickCarouselContainerProps } from "../typings/SlickCarouselProps";
import "./ui/SlickCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DynamicCarousel } from "./components/DynamicCarousel";

export function SlickCarousel({ carouselType, slideList, data, contentTemplate }: SlickCarouselContainerProps): ReactElement {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const renderCarouselSlides = () => {
        if(carouselType === "static"){
            return (
                //return the static carousel
                <StaticCarousel slideList={slideList} settings={settings} />
            )
        }
        else{
            return (
                //return the static carousel
                <DynamicCarousel data={data} contentTemplate={contentTemplate} settings={settings} />
            )
        }
    }

    return (
        <div className="slider-outer">
            {renderCarouselSlides()}
        </div>
    );
}