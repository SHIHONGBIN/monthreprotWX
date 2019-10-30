import React from 'react';
import title from './../../public/images/slide4/title.png'
import ReactEcharts from 'echarts-for-react';
import img2 from './../../public/images/slide4/imh2.png'

const Slide1 = (props) => {
  const { curPage, ajaxData } = props && props.props.month
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: "{b} : {c}%"
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '80%'],
        label: {
          normal: {
              show: false
          }
        },
        data: [{
          value: ajaxData[3] ? ajaxData[3].data2.replace('%', '') * 1 : '',
          name: '自动出借'
        },
        {
          value: ajaxData[3] ? ajaxData[3].data3.replace('%', '') * 1 : '',
          name: '手动出借'
        },
        ],
        color: [ajaxData[3] ? ajaxData[3].data1[0] : '', ajaxData[3] ? ajaxData[3].data1[1] : '']
      }
    ]
  }
  return (
    <div>
      <div className='slidebg slide3'>
        <div className={`${curPage == 3 ? 'title animated fadeInUp' : 'title animated fadeOutUp'}`}>
          <img src={title} alt='' />
        </div>
        <div className={`${curPage == 3 ? 'echart1 animated fadeInUp' : 'echart1 animated fadeOutUp'}`}>
          <ReactEcharts
            option={option}
            style={{ height: '100%' }}
          />
        <img src={img2} alt='' />
        </div>
        <div className='slideBox'>
          <div className={`${curPage == 3 ? 'slideContent animated fadeInUp' : 'slideContent animated fadeOutUp'}`}>
            <div className='l-con' dangerouslySetInnerHTML={{ __html: ajaxData[3] ? ajaxData[3].data2 : '' }}></div>
            <div className='line-v'></div>
            <div className='r-con'>
              <p>自动出借金额</p>
              <div className='money' dangerouslySetInnerHTML={{ __html: ajaxData[3] ? ajaxData[3].data4 : '0<span>元</span>' }}></div>
            </div>
          </div>
          <div className={`${curPage == 3 ? 'slideContent animated fadeInUp' : 'slideContent animated fadeOutUp'}`}>
            <div className='l-con' dangerouslySetInnerHTML={{ __html: ajaxData[3] ? ajaxData[3].data3 : '' }}></div>
            <div className='line-v'></div>
            <div className='r-con'>
              <p>手动出借金额</p>
              <div className='money' dangerouslySetInnerHTML={{ __html: ajaxData[3] ? ajaxData[3].data5 : '0<span>元</span>' }}></div>
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
