import React, { Component } from 'react';
import neu from './downArrow.png';

class Header extends Component {	
	
	render() {
		<div className="topDiv">
			<a href="slide();" id="topLink" ><img src="images/downArrow.png" className="img-responsive" alt="Down Arrow"/></a>
		</div>
	}
}

function slide(){
		$('html,body').animate({
        scrollTop: $(".row").offset().top},
        'slow');
	
		document.getElementById("divBox").style.marginTop = "100px";
	}

export default Header;