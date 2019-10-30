import React from 'react';
import img1 from './../../public/images/slide9/wx.png'

const Slide1 = (props) => {
  const {curPage} = props && props.props.month
  return (
    <div>
      <div className='slide8'>
        <p className={`${curPage==8?'animated fadeInUp':'title animated fadeOutUp'}`}>如果您还想了解国佳财富更多的动态信息，</p>
        <p  className={`${curPage==8?'animated fadeInUp':'title animated fadeOutUp'}`}>请关注我们的 <span>国佳财富服务号</span></p>
        <img src={img1} alt='' className={`${curPage==8?'animated fadeInUp':'title animated fadeOutUp'}`} />
      </div>
    </div>
  );
};

Slide1.propTypes = {
};

export default Slide1;
