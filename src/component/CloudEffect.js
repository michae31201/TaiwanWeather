import React from 'react';
import '../css/CloudEffect.css';
import cloud_jp2 from '../image/cloud.jp2';
import cloud_webp from '../image/cloud.webp';
import cloud_png from '../image/cloud.png';

const CloudEffect = () => {
    return(
        <div className="cloudeffect">
            <picture className="cloud">
                <source srcSet={cloud_jp2} type="image/jp2"/>
                <source srcSet={cloud_webp} type="image/webp"/>
                <img src={cloud_png} alt={"cloud"} className="cloud-image"/>
            </picture>
            <picture className="cloud2">
                <source srcSet={cloud_jp2} type="image/jp2"/>
                <source srcSet={cloud_webp} type="image/webp"/>
                <img src={cloud_png} alt={"cloud"} className="cloud-image"/>
            </picture>
        </div>
    )
}

export default CloudEffect;
