import React from 'react';
import logo from './../../public/images/slide1/logo.png'
import monthtext from './../../public/images/slide1/monthtext.png'
import text from './../../public/images/slide1/text.png'
// import text2 from './../../public/images/slide1/text2.png'
const Slide1 = (props) => {
  const {curPage} = props && props.props.month
  return (
    <div>
      <div>
        <img src={logo} alt='' className={`${curPage==0?'logoImg animated fadeInUp':'logoImg animated fadeOutUp'}`} /><br />
        <img src={monthtext} alt='' className={`${curPage==0?'monthtextImg animated fadeInUp':'monthtextImg animated fadeOutUp'}`} />
        <img src={text} alt='' className={`${curPage==0?'textImg animated fadeInUp':'textImg animated fadeOutUp'}`} />
        {/* <img src={text2} alt='' className={`${curPage==0?'text2Img animated fadeInUp':'text2Img animated fadeOutUp'}`} /> */}
      </div>
    </div>
  );
};

Slide1.propTypes = {
};

export default Slide1;
