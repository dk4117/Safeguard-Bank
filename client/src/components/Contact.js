import React from 'react';
import '../../src/Style/contactus.css';



const Contact = ()=>{

    const PhoneIconStyles = {
        width:"100px",
        height:"100px",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundImage: `url('./phone.png')`,
        marginInlineStart: "35%",
        backgroundColor: "#e9e8e828",
        
    };  
    
    const NewIconStyles = {
        width:"100px",
        height:"100px",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundImage: `url('./new_case.png')`,
        marginInlineStart: "35%",
        backgroundColor: " #e9e8e828",
        
    };

    const ChatIconStyles = {
        width:"100px",
        height:"100px",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundImage: `url('./chat.jpg')`,
        marginInlineStart: "35%",
        backgroundColor: " #e9e8e828",
    };
    
    return(
        <div> 
            <div className='contactUsTitle'>
                <p><b>Contact Us</b></p>
            </div>
            <div class="byPhone">
                <div style={PhoneIconStyles}></div>
                <h2>BY PHONE</h2>

                <p>(Monday to Friday, 9am to 6pm IST)</p>

                <h4>Pune Toll-Free: </h4>
                <p>1-800-180-0000 </p>

                <h4>International: </h4>
                <p>1-604-180-0780 </p>
                
            </div>
            <div class="startNewCase">
                <div style={NewIconStyles}></div>
                <h2>START A NEW CASE</h2>

                <p>Just send us your questions or concerns by starting a new case and we will give you the help you need.</p>

                <button className='starHereBtn'> START HERE</button>
                
            </div>
            <div class="liveChat">
                <div style={ChatIconStyles}></div>
                <h2>LIVE CHAT</h2>

                <p>Chat with a member of our in-house team.</p>

                <button className='startChatBtn'> START CHAT</button>
                
            </div>
            
        </div>

    );

};

export default Contact;