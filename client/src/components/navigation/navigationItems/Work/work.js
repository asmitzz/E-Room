import React,{ Component } from 'react';
import '../../../navigation/navigation.css';
import './work.css';
import Nav from '../../navigation';
import Image1 from '../../../../assets/Images/work-image-1.jpeg';
import Image2 from '../../../../assets/Images/work-image-2.jpeg';
import Image3 from '../../../../assets/Images/work-image-3.jpeg';

class Work extends Component{
  render(){
    return(
        <div> 
             
              <Nav type="Work"/>


              <div className="main">
                 <h2 className="display-3 text-center pt-5">Work With Us</h2>
                 <p className="pt-5">
                    Welcome to E-room, dedicated to the temporary accommodation of students and other guests ,
                    with the goal of providing a comprehensive accommodation service for people of all ages looking for an
                    inexpensive place to stay in the city of Jabalpur, with good services and personalized attention.
                    We are keen to see you made your way and are interested in a collaboration.
                    we highlight the finest hostels in Jabalpur(MP).
                 </p>
                 
                 <div className="work-img">
                    <img src={Image1} alt="hotel" className="img-1 my-5" />
                 </div>

                 <p className="pt-5">
                 In order to keep things simple and efficient, please read our guide lines before contacting us.
                 We do not work for free.
                 We do not advertise your accommodation or product for free.
                 We never sell links on our website.
                 Please get in touch when you have a sales budget and a proposal we cannot decline.
                 </p>

                 <div className="work-img">
                    <img src={Image2} alt="hotel" className="img-1 my-5" />
                 </div>

                 <h1 className="display-4 pt-5">For travelers</h1>
                 <p className="pt-3">
                      We are always keen to hear from you. Throw your hostel question at us, 
                      we will be happy to help you to find the coolest hostel
                      in town when you cannot find your desired destination in our guide.
                      The intention was to provide an accommodation option for guests traveling alone or 
                      in small groups, who had shorter stays in Barcelona and therefore different needs.
                      In this way a more personalized service would be provided including individualized information and attention.
                 </p>

                 <div className="work-img">
                    <img src={Image3} alt="hotel" className="img-1 my-5" />
                </div>
                
                <h1 className="pl-3">We are looking for people who are:</h1>
                <p>
                   <ul className="pt-2">
                     <li>Self motivated</li>
                     <li>Happy and friendly</li>
                     <li> Fun and easy-going</li>
                     <li>Enthusiastic</li>
                     <li>Patient</li>
                     <li> Organized and responsible</li>
                     <li>Proactive and creative</li>
                     <li>Speak at least two languages (Hindi and English preferred)</li>
                   </ul>
             
                </p>

              </div>
        </div>
    );
  };
};

export default Work;