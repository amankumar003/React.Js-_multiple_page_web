import React from 'react';
import { useSpring, animated } from 'react-spring';
import GifPlayer from 'react-gif-player';
import { IMAGES } from '../../../config/Images';

function ThanksMsg() {
    const props = useSpring({
        to: {
            transform: 'translateY(0)',
            opacity: 1,
        },
        from: {
            transform: 'translateY(100px)',
            opacity: 0,
        },
    });

    return (
        <animated.div style={props}>
            <div style={{
                marginTop: (window.innerHeight ||
                    document.documentElement.clientHeight ||
                    document.body.clientHeight) <= 800 ? "30%" : "5%",
                background: "white"
            }}>

                <GifPlayer autoplay={true} gif={IMAGES.THANKS} />

            </div>

        </animated.div>
    );
}
export default (ThanksMsg);
