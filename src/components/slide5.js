import React from 'react';
import img1 from './../../public/images/slide6/img1.png'
import img2 from './../../public/images/slide6/img2.png'
import title from './../../public/images/slide6/title.png'

const Slide1 = (props) => {
  const {curPage, ajaxData} = props && props.props.month
  return (
    <div>
       <div  className={`${curPage!=0?'animated fadeIn darkbgFadein':''}`}></div>
    <div className='slidebg slide2'>
      <div className={`${curPage==5?'title animated fadeInUp':'title animated fadeOutUp'}`}>
      <img src={title} alt='' />
      </div>
      <div className='slideBox'>
      <div className={`${curPage==5?'slideContent animated fadeInUp':'slideContent animated fadeOutUp'}`}>
            <img src={img2} alt='' />
            <p>{ajaxData[0]?ajaxData[0].month:''}月借款人已还本金</p>
            <div className='line'></div>
            <div className='money' dangerouslySetInnerHTML={{__html:ajaxData[5].data1?ajaxData[5].data1:'0<span>元</span>'}}>
          </div>
        </div>
        <div className={`${curPage==5?'slideContent animated fadeInUp':'slideContent animated fadeOutUp'}`}>

            <img src={img1} alt='' />
 
            <p>{ajaxData[0]?ajaxData[0].month:''}月借款人已还利息</p>
            <div className='line'></div>
            <div className='money' dangerouslySetInnerHTML={{__html:ajaxData[5].data2?ajaxData[5].data2:'0<span>元</span>'}}>
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
