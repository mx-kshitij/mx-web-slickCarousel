import { ReactElement, createElement } from "react";
import { SlickCarouselPreviewProps } from "../typings/SlickCarouselProps";
import { StaticCarousel } from "./components/StaticCarousel";

export function preview({ }: SlickCarouselPreviewProps): ReactElement {
    return <StaticCarousel/>;
}

export function getPreviewCss(): string {
    return require("./ui/SlickCarousel.css");
}
