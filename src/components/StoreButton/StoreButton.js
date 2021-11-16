import React from 'react';
import appStore from '../../assets/imgs/appStore.png';
import googlePlay from '../../assets/imgs/googlePlay.png';
import './button.css'

const StoreButton = ({
  store,
  url,
  title,
}) => {

  return (
    <div className="buttonWrap">
        <a 
          className="storeButton"
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          title={title} 
          style={{background: store == 'ios' ? `url("${appStore}") 0% 0% / contain no-repeat` : `url("${googlePlay}") 0% 0% / contain no-repeat`}} 
          data-nsfw-filter-status="swf">
            &nbsp;
        </a>
    </div>
  );
}

export default StoreButton;