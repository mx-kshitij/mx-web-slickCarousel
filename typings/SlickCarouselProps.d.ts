/**
 * This file was generated from SlickCarousel.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ActionValue, DynamicValue, EditableValue, ListValue, ListWidgetValue } from "mendix";
import { Big } from "big.js";

export type CarouselTypeEnum = "static" | "dynamic";

export interface SlideListType {
    caption?: DynamicValue<string>;
    content: ReactNode;
}

export interface SlideListPreviewType {
    caption: string;
    content: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
}

export interface SlickCarouselContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    carouselType: CarouselTypeEnum;
    slideList: SlideListType[];
    data: ListValue;
    contentTemplate: ListWidgetValue;
    arrows: boolean;
    autoplay: boolean;
    autoplaySpeed: number;
    dots: boolean;
    draggable: boolean;
    fade: boolean;
    infinite: boolean;
    pauseOnHover: boolean;
    pauseOnDotsHover: boolean;
    speed: number;
    vertical: boolean;
    currentSlide?: EditableValue<Big>;
    beforeChange?: ActionValue;
    afterChange?: ActionValue;
}

export interface SlickCarouselPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    carouselType: CarouselTypeEnum;
    slideList: SlideListPreviewType[];
    data: {} | { type: string } | null;
    contentTemplate: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    arrows: boolean;
    autoplay: boolean;
    autoplaySpeed: number | null;
    dots: boolean;
    draggable: boolean;
    fade: boolean;
    infinite: boolean;
    pauseOnHover: boolean;
    pauseOnDotsHover: boolean;
    speed: number | null;
    vertical: boolean;
    currentSlide: string;
    beforeChange: {} | null;
    afterChange: {} | null;
}
