import React,{useEffect} from 'react'
import "./pagenotfound.css"
import { stringify } from '@amcharts/amcharts4/.internal/core/utils/Utils';

function randomNum(){
    return Math.floor(Math.random() * 9)+1;
}

function PageNotFound(props) {
    useEffect(() => {
        var loop1,loop2,loop3,time=30, i=0, selector3 = document.querySelector('.thirdDigit'), selector2 = document.querySelector('.secondDigit'),
            selector1 = document.querySelector('.firstDigit');
            loop3 = setInterval(function()
            {
                if(i > 40)
                {
                    clearInterval(loop3);
                    selector3.textContent = "4";
                }else
                {
                    selector3.textContent = stringify(randomNum());
                    i++;
                }
            }, time);
            loop2 = setInterval(function()
            {
                if(i > 80)
                {
                    clearInterval(loop2);
                    selector2.textContent = "0";
                }else
                {
                    selector2.textContent = stringify(randomNum());
                    i++;
                }
            }, time);
            loop1 = setInterval(function()
            {
                if(i > 100)
                {
                    clearInterval(loop1);
                    selector1.textContent = "4";
                }else
                {
                    selector1.textContent = stringify(randomNum());
                    i++;
                }
            }, time);
    }, [])
            
            
    return (
        <div className="error_div">
            <div className="error">
                <div className="container-floud">
                    <div className="col-xs-12 ground-color text-center">
                        <div className="container-error-404">
                            <div className="clip"><div className="shadow"><span className="digit thirdDigit"></span></div></div>
                            <div className="clip"><div className="shadow"><span className="digit secondDigit"></span></div></div>
                            <div className="clip"><div className="shadow"><span className="digit firstDigit"></span></div></div>
                            <div className="msg">error<span className="triangle"></span></div>
                        </div>
                        <h2 className="h1">Sorry! The page you're looking for does not exist.</h2>
                        <h2 className="h1"><a href={`${props.BaseURL}/`}>{"<-Back Home"}</a></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound
