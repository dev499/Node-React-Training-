import React from 'react';
import Card from './Card'

function CardList(props) {
  return (
    <div>
        <h2><b/>Courses</h2>
    <Card image="http://www.phpsupport.co/wp-content/uploads/2016/05/How-to-install-Node-JS.png"
    head="The Complete Node Js Course"
    description="David Grey"
    rating='4 ★★★★✩ (332,999)'
    price='₹3,499'
    link="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/"
    />
    <Card image="https://w7.pngwing.com/pngs/1007/564/png-transparent-java-script-logo-javascript-web-development-logo-script-text-computer-programming-internet.png"
    head="Javascript The Complete Guide 2022"
    description="Paul"
    rating='3 ★★★✩✩ (112,999)'
    price='₹3,499'
    link="https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/"
    />
    <Card image="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg"
    head="Complete HTML Guide For Beginners"
    description="Audrey"
    rating='5 ★★★★★ (11,111)'
    price='₹3,499'
    link="https://www.udemy.com/course/modern-html-css-from-the-beginning/"
    />
    <Card image="https://nimishprabhu.com/wp-content/uploads/2021/07/react-logo.png"
    head="Complete React Developer In 2022"
    description="Andrew"
    rating='5 ★★★★★ (89,111)'
    price='₹3,499'
    link="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/"
    />
    </div>
  )
}

export default CardList