import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../../assets/json/butt.json'

const lottie = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

  return (
    <div>
      <div className="loader-relative" data-aos="zoom-out" data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
        <div className="loader">
          <Lottie options={defaultOptions}
            height={100}
            width={100} />
        </div>
      </div>
    </div>
  )
}

export default lottie
