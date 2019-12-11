import React from 'react';
import title from './../../public/images/slide7/title.png'
import ReactEcharts from 'echarts-for-react';

const Slide1 = (props) => {
  const {curPage, ajaxData} = props && props.props.month
  const option = {
    tooltip : {
        trigger: 'item',
        formatter: "{b}：{c}个"
    },
    series : [
        {
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:ajaxData[6]?ajaxData[6].data2.map((item, index)=> {
              return {
                value: item.value,
                name: `期限${item.name}天标` 
              }
            }):'',
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            color: ajaxData[6]?[ajaxData[6].data1[0],ajaxData[6].data1[1],ajaxData[6].data1[2],ajaxData[6].data1[3],ajaxData[6].data1[4],ajaxData[6].data1[5]]:[]
        }
    ]
};
  return (
    <div>
       <div  className={`${curPage!=0?'animated fadeIn darkbgFadein':''}`}></div>
      <div className='slidebg slide6'>
        <div className={`${curPage==6?'title animated fadeInUp':'title animated fadeOutUp'}`}>
          <img src={title} alt='' />
        </div>
        <div className={`${curPage==6?'echart1 animated fadeInUp':'echart1 animated fadeOutUp'}`}>
          <ReactEcharts 
           option={option}
           style={{ height: '100%' }}
          />
        </div>
        <div className='slideBox-wrap'>
          
            {ajaxData[6]?ajaxData[6].data2.map((item, index)=><div className='slideBox' key={index}><div className={`${curPage==6?'slideContent animated fadeInUp':'slideContent animated fadeOutUp'}`} key={index}>
              <div className='l-con'>期限{item.name}天标：{item.value}个</div>
              <div className='line-v'></div>
              <div className='r-con'>
                <div className='money'  dangerouslySetInnerHTML={{__html:item?`<span>总金额</span>${item.money?item.money:0}<span>元</span>`:''}}></div>
              </div>
              </div>
            </div>):''}
         
      </div>
    </div>
    </div>
  );
};

Slide1.propTypes = {
};

export default Slide1;
