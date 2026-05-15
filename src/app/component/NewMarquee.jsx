import React from 'react';
import Marquee from 'react-fast-marquee';

const NewMarquee = () => {
    return (
        <div>
            <Marquee pauseOnHover={true}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, vero, distinctio eum debitis quam et repellendus nemo laudantium animi quae ducimus veniam deserunt! Quos, corporis veniam mollitia quae beatae perspiciatis.</p>
            </Marquee>
        </div>
    );
};

export default NewMarquee;