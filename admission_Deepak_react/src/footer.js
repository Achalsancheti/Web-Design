import React, { Component } from 'react';
import neu from './northeasternLogo.png';

class footer extends Component {	
	
	render() {
		<div className="topDiv">
			<a href="dont();" id="topLink" ><img src="images/northeasternLogo.png" className="img-responsive" alt="Logo Arrow"/></a>
		</div>
	}
}

function slide(){
		$('html,body').animate({
        scrollTop: $(".row").offset().top},
        'slow');
	
		document.getElementById("divBox").style.marginTop = "100px";
	}

export default footer;