import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types'
import './IndexPage.scss'
import './../../public/css/animate.css'
import Slider from 'react-slick'
import Slide0 from './../components/slide0'
import Slide1 from './../components/slide1'
import Slide2 from './../components/slide2'
import Slide3 from './../components/slide3'
import Slide4 from './../components/slide4'
import Slide5 from './../components/slide5'
import Slide6 from './../components/slide6'
import Slide7 from './../components/slide7'
import Slide8 from './../components/slide8'
import arrowUp from './../../public/images/arrowup.png'
import {ActivityIndicator}  from 'antd-mobile'
import tree from './../../public/images/tree.png'
import train from './../../public/images/train.png'
import lg from './../../public/images/lg.png'
import brige from './../../public/images/brige.png'



class IndexPage extends React.Component {
  // static PropTypes = {
  //   month: PropTypes.object
  // }
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    document.body.addEventListener('touchmove', function (e) {
      e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
    }, {passive: false});
  }
  render() {
    var {curPage, isOnload} = this.props.month
    var {dispatch} = this.props
    const settings = {
      dots: true,
      infinite: false,
      vertical: true,
      verticalSwiping: true,
      speed: 500,
      slidesToShow: 1,
      initialSlide: 0,
      slidesToScroll: 1,
      afterChange: () =>
        this.setState(state => ({ updateCount: state.updateCount + 1 }),()=>dispatch({type:'month/changeCurPage', payload:{curPage:this.state.slideIndex}})),
      beforeChange: (current, next) => this.setState({ slideIndex: next })
    };

    return (
      <div className='normal'>
        {isOnload?
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div className={`swiper-slide animated ${this.state?curPage==0?'fadeIn':'fadeOut':''}`}><Slide0 props={this.props} /></div>
          <div className={`swiper-slide animated ${this.state?curPage==1?'fadeIn':'fadeOut':'fadeOut'}`}><Slide1 props={this.props} /></div>
          <div className={`swiper-slide animated ${this.state?curPage==2?'fadeIn':'fadeOut':'fadeOut'}`}><Slide2 props={this.props} /></div>
          <div className={`swiper-slide animated ${this.state?curPage==3?'fadeIn':'fadeOut':'fadeOut'}`}><Slide3 props={this.props} /></div>
          <div className={`swiper-slide animated ${this.state?curPage==4?'fadeIn':'fadeOut':'fadeOut'}`}><Slide4 props={this.props} /></div>
          <div className={`swiper-slide animated ${this.state?curPage==5?'fadeIn':'fadeOut':'fadeOut'}`}><Slide5 props={this.props} /></div>
          <div className={`swiper-slide animated ${this.state?curPage==6?'fadeIn':'fadeOut':'fadeOut'}`}><Slide6 props={this.props} /></div>
          <div className={`swiper-slide animated ${this.state?curPage==7?'fadeIn':'fadeOut':'fadeOut'}`}><Slide7 props={this.props} /></div>
          <div className={`swiper-slide animated ${this.state?curPage==8?'fadeIn':'fadeOut':'fadeOut'}`}><Slide8 props={this.props} />
          <div className={`${curPage==8?'btn animated fadeInUp':'btn animated fadeOutUp'}`} onTouchEnd={e => this.slider.slickGoTo(0)}>返回首页</div>
          </div>
        </Slider>
       :<ActivityIndicator>...loading</ActivityIndicator>}
       {curPage==8?'':<img src={arrowUp} className='arowUpImg' alt='' onClick={e => this.slider.slickGoTo(curPage-(-1))}/>}
        {/* <canvas id='canvas'></canvas> */}
        <img src={lg} alt='' className={`indeximg2 animated fadeInUp`} />
        <img src={train} alt='' className={`indeximg3 animated fadeInUp`} />
        <img src={tree} alt='' className={`indeximg4 animated fadeInUp`} />
        <img src={brige} alt='' className={`indeximg5 animated fadeInUp`} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    month: state.month
  }
}

export default connect(mapStateToProps)(IndexPage);
