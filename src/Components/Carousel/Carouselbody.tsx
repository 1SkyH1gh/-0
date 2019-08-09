import * as React from 'react'
import {FunctionComponent} from "react";
import {Carousel} from "react-responsive-carousel";
import testAva from './Carousel.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CarouselStyle.css'
import {AllSettings} from "../Settings/AllSettings";
import '../Settings/SettingsStyles.css'
export interface CarouselbodyProps {

}

export const Carouselbody:FunctionComponent<CarouselbodyProps>=()=>{
    return(
        <div className="Carousel">
            <div className="NewsCarousel">Any news</div>
            <div className="actuallyFriendsCarousel">
                maybe you know his?
            </div>
            <div className="newsMusic">
                Thats track can liked you
            </div>
             <AllSettings/>
        </div>
    )
}