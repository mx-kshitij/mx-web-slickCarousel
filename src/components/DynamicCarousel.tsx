import { ReactElement, createElement } from "react";
import Slider from "react-slick";
import { ListValue } from "mendix";

export interface DynamicCarouselProps {
    data: ListValue;
    contentTemplate: any;
    settings?: any;
}

export function DynamicCarousel({ data, contentTemplate, settings }: DynamicCarouselProps): ReactElement {
    //Create an empty array to represent slides
    let returnSlides: any[] = [];

    //Iterate over items returned by the datasource
    data.items?.map(item => {
        //For each item use the contentTemplate to create slide
        var slide = (
            <div className="slide">
                {contentTemplate?.get(item)}
            </div>);
        //Add slide to the array which will be returned
        returnSlides.push(slide);
    })

    //Return list enclosed in a slider object
    return (
        <Slider {...settings}>
            {returnSlides}
        </Slider>);
}