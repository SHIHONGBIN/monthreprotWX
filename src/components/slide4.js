import React from 'react';
import img1 from './../../public/images/slide5/img1.png'
import img2 from './../../public/images/slide5/img2.png'
import img3 from './../../public/images/slide5/img3.png'
import img4 from './../../public/images/slide5/img4.png'
import title from './../../public/images/slide5/title.png'

const Slide1 = (props) => {
  const {curPage, ajaxData} = props && props.props.month
  return (
    <div>
       <div  className={`${curPage!=0?'animated fadeIn darkbgFadein':''}`}></div>
    <div className='slidebg slide4'>
      <div className={`${curPage==4?'title animated fadeInUp':'title animated fadeOutUp'}`}>
      <img src={title} alt='' />
      </div>
      <div className='slideBox'>
      <div className={`${curPage==4?'slideContent animated fadeInUp':'slideContent animated fadeOutUp'}`}>
        <div className='l-con'>
            <img src={img1} alt='' /></div>
            <div className='r-con'>
            <p>累计赚取收益</p>
            <div className='line'></div>
            <div className='money' dangerouslySetInnerHTML={{__html:ajaxData[4].data1?ajaxData[4].data1:'0<span>元</span>'}}>
            </div>
          </div>
        </div>
        <div className={`${curPage==4?'slideContent animated fadeInUp':'slideContent animated fadeOutUp'}`}>
        <div className='l-con'>
            <img src={img2} alt='' /></div>
            <div className='r-con'>
            <p>{ajaxData[0]?ajaxData[0].month:''}月新增收益</p>
            <div className='line'></div>
            <div className='money' dangerouslySetInnerHTML={{__html:ajaxData[4].data2?ajaxData[4].data2:'0<span>元</span>'}}>
            </div>
          </div>
        </div>
        <div className={`${curPage==4?'slideContent animated fadeInUp':'slideContent animated fadeOutUp'}`}>
        <div className='l-con'>
            <img src={img3} alt='' /></div>
            <div className='r-con'>
            <p>{ajaxData[0]?ajaxData[0].month:''}月收益的用户人群</p>
            <div className='line'></div>
            <div className='money' dangerouslySetInnerHTML={{__html:ajaxData[4].data3?ajaxData[4].data3:'0<span>人</span>'}}>
            </div>
          </div>
        </div>
        <div className={`${curPage==4?'slideContent animated fadeInUp':'slideContent animated fadeOutUp'}`}>
        <div className='l-con'>
            <img src={img4} alt='' /></div>
            <div className='r-con'>
            <p>{ajaxData[0]?ajaxData[0].month:''}月人均收益金额</p>
            <div className='line'></div>
            <div className='money' dangerouslySetInnerHTML={{__html:ajaxData[4].data4?ajaxData[4].data4:'0<span>元</span>'}}>
            </div>
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
