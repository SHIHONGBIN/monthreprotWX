import React from 'react';
import { Flex, WhiteSpace } from 'antd-mobile';
import title from './../../public/images/slide2/01.png'
import img1 from './../../public/images/slide2/02.png'
import img2 from './../../public/images/slide2/03.png'


const Slide1 = (props) => {
  const {curPage, ajaxData} = props && props.props.month
  return (
    <div>
    <div className='slidebg slide1'>
      <div className={`${curPage==1?'title animated fadeInUp':'title animated fadeOutUp'}`}>
      <img src={title} alt='' />
      </div>
      <div className={`${curPage==1?'zongshu animated fadeInUp':'zongshu animated fadeOutUp'}`}>国佳财富平台截止至{ajaxData[1]?ajaxData[1].data1:''}，平台成交量超过<span>{ajaxData[1]?ajaxData[1].data2:''}</span>万元，用户收益超<span>{ajaxData[1]?ajaxData[1].data3:''}</span>万元。十月份平台顺利完成了对银行资金存管系统的全新升级，优化便捷了转账充值的操作方式，以及恢复了快捷支付充值渠道。平台一直用心经营，在服务效率、用户体验等多方面不断提升，不断优化改进。</div>
      <div className='slideBox'>
      <div className={`${curPage==1?'slideContent animated fadeInUp':'slideContent animated fadeOutUp'}`}>
          <div className='l-content'>
            <img src={img1} alt='' />
          </div>
          <div className='r-content'>
            <p>平台成交量</p>
            <div className='line'></div>
            <div className='money' dangerouslySetInnerHTML={{__html:ajaxData[1]?ajaxData[1].data4:'0<span>元</span>'}}>
            {/* 11<span>亿</span>1111<span>万</span>4449<span>元</span> */}
            </div>
          </div>
        </div>
        <div className={`${curPage==1?'slideContent animated fadeInUp':'slideContent animated fadeOutUp'}`}>
          <div className='l-content'>
            <img src={img2} alt='' />
          </div>
          <div className='r-content'>
            <p>用户收益</p>
            <div className='line'></div>
            <div className='money' dangerouslySetInnerHTML={{__html:ajaxData[1]?ajaxData[1].data5:'0<span>元</span>'}}>
            {/* 11111<span>万</span> 4441<span>元</span> */}
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
