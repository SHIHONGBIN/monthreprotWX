import React from 'react';
import img1 from './../../public/images/slide3/img1.png'
import img2 from './../../public/images/slide3/imh2.png'
import title from './../../public/images/slide3/title.png'

const Slide1 = (props) => {
  const {curPage, ajaxData} = props && props.props.month
  return (
    <div>
    <div className='slidebg slide2'>
      <div className={`${curPage==2?'title animated fadeInUp':'title animated fadeOutUp'}`}>
      <img src={title} alt='' />
      </div>
      <div className='slideBox'>
      <div className={`${curPage==2?'slideContent animated fadeInUp':'slideContent animated fadeOutUp'}`}>
            <img src={img2} alt='' />
            <p>累计成交量</p>
            <div className='line'></div>
            <div className='money' dangerouslySetInnerHTML={{__html:ajaxData[2]?ajaxData[2].data1:'0<span>元</span>'}}>
          </div>
        </div>
        <div className={`${curPage==2?'slideContent animated fadeInUp':'slideContent animated fadeOutUp'}`}>

            <img src={img1} alt='' />
 
            <p>新增成交量</p>
            <div className='line'></div>
            <div className='money' dangerouslySetInnerHTML={{__html:ajaxData[2].data2?ajaxData[2].data2:'0<span>元</span>'}}>
            </div>
        </div>
    </div>
    </div>
    </div>
  );
};

Slide1.propTypes = {
};

export default Slide1;
