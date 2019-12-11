import React from 'react';
import img1 from './../../public/images/slide8/img1.png'
import img2 from './../../public/images/slide8/img2.png'
import img3 from './../../public/images/slide8/img3.png'
import img4 from './../../public/images/slide8/img4.png'
import img5 from './../../public/images/slide8/img5.png'
import title from './../../public/images/slide8/title.png'

const Slide1 = (props) => {
  const {curPage, ajaxData} = props && props.props.month
  return (
    <div>
       <div  className={`${curPage!=0?'animated fadeIn darkbgFadein':''}`}></div>
      <div className='slidebg slide7'>
        <div className={`${curPage==7?'title animated fadeInUp':'title animated fadeOutUp'}`}>
          <img src={title} alt='' />
        </div>
        <div className='slideBox'>
          <div className='slideContent'>
            <div className={`${curPage==7?'s-con animated fadeInUp':'s-con animated fadeOutUp'}`}>
              <img src={img2} alt='' />
              <p>累计注册用户</p>
              <div className='line'></div>
              <div className='money' dangerouslySetInnerHTML={{__html:ajaxData[7]?ajaxData[7].data1:''}}></div>
            </div>
            <div className={`${curPage==7?'s-con animated fadeInUp':'s-con animated fadeOutUp'}`}>
              <img src={img1} alt='' />
              <p>{ajaxData[0]?ajaxData[0].month:''}月新增注册用户</p>
              <div className='line'></div>
              <div className='money' dangerouslySetInnerHTML={{__html:ajaxData[7]?ajaxData[7].data2:'0<span>人</span>'}}></div>
            </div>
          </div>
          <div className='slideContent'>
            <div className={`${curPage==7?'s-con animated fadeInUp':'s-con animated fadeOutUp'}`}>
              <img src={img3} alt='' className='only-img' />
            </div>
            <div className={`${curPage==7?'s-con s-con2 animated fadeInUp':'s-con s-con2 animated fadeOutUp'}`}>
            <p>用户注册性别占比</p>
            <div className='percent'>
              <img src={img5} alt='' />
              <div className='p-box humanNum'  data-hunmans={`${ajaxData[7]?ajaxData[7].data3:''}%`} style={{width:`${ajaxData[7]?ajaxData[7].data3:''}%`}}></div>
            </div>
            <div className='percent'>
              <img src={img4} alt='' />
              <div className='p-box p-box2 humanNum' data-hunmans={`${ajaxData[7]?ajaxData[7].data4:''}%`} style={{width:`${ajaxData[7]?ajaxData[7].data4:''}%`}}></div>
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
