import { ReactElement, createElement } from "react";
import Slider from "react-slick";
import { SlideListType } from "../../typings/SlickCarouselProps";

export interface StaticCarouselProps {
    slideList?: SlideListType[];
    settings?: any;
}

export function StaticCarousel({ slideList, settings }: StaticCarouselProps): ReactElement {
    //Create an empty array to represent slides
    let returnSlides: any[] = [];

    //Iterate over object list received
    slideList?.map(currentSlide => {
        //Create current slide
        var slide = (
            <div className="slide">
                <div className="slide-content">{currentSlide.content}</div>
                <div className="slide-caption">{currentSlide.caption?.value}</div>
            </div>)
        //Add slide to the array which will be returned
        returnSlides.push(slide);
    })

    //Return list enclosed in a slider object
    return (
        <Slider {...settings}>
            {returnSlides}
        </Slider>);
}