import { ReactElement, createElement } from "react";
import { StaticCarousel } from "./components/StaticCarousel";
import { SlickCarouselContainerProps } from "../typings/SlickCarouselProps";
import "./ui/SlickCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DynamicCarousel } from "./components/DynamicCarousel";
import Big from "big.js";

export function SlickCarousel({
    carouselType,
    slideList,
    data,
    contentTemplate,
    arrows,
    autoplay,
    autoplaySpeed,
    dots,
    draggable,
    fade,
    infinite,
    pauseOnHover,
    pauseOnDotsHover,
    speed,
    vertical,
    currentSlide,
    beforeChange,
    afterChange
}: SlickCarouselContainerProps): ReactElement {

    const settings = {
        arrows: arrows,
        autoplay: autoplay,
        autoplaySpeed: autoplaySpeed,
        dots: dots,
        draggable: draggable,
        fade: fade,
        infinite: infinite,
        pauseOnDotsHover: pauseOnDotsHover,
        pauseOnHover: pauseOnHover,
        speed: speed,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: vertical,
        verticalSwiping: vertical,
        beforeChange: (next: any) => runBeforeSlideChange(next),
        afterChange: (current: any) => runAfterSlideChange(current)
    };

    const updateSlideNumber = (slide: number) => {
        if (currentSlide) {     //If the slide tracking attribute is assigned, update the attribute to the latest slide index value
            let slideVal = new Big(slide);      //Create a Big type value to set attribute value
            currentSlide.setValue(slideVal);    //Set the value
        }
    }

    const runAfterSlideChange = (slide: number) => {
        //Check if the afterChange action is assigned, can be executed and is not already executing
        if (afterChange && afterChange.canExecute && !afterChange.isExecuting) {
            afterChange.execute();
        }
        //Update the slide number
        updateSlideNumber(slide);
    }

    const runBeforeSlideChange = (slide: number) => {
        //Update the slide number
        updateSlideNumber(slide);
        //Check if the afterChange action is assigned, can be executed and is not already executing
        if (beforeChange && beforeChange.canExecute && !beforeChange.isExecuting) {
            beforeChange.execute();
        }
    }

    const renderCarouselSlides = () => {
        if (carouselType === "static") {
            return (
                //return the static carousel
                <StaticCarousel slideList={slideList} settings={settings} />
            )
        }
        else {
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