import React from 'react';
import user from "./images/profile.png";
import Work from './Work';
import Play from './Play';
import Study from './Study';
import Exercise from './Exercise';
import Social from './Social';
import SelfCare from './SelfCare';
import Ellipsis from './images/Ellipsis';


export default function Page() {
    return (
        <>
            <div className='main_div'>
            {/* div1 user jeremy starts */}
                <div className='div1'> 
                    <div className="user">
                        <img className='user_img' src={user} alt="user"/>

                        <p className='report'>Report for </p>
                        <h1 className='user_jeremy'>Ankush Rawat</h1>
                    </div>

                    <ul className='list'>
                        <li className='daily_list'> <a className='link_daily' href="#">Daily</a></li>
                        <li className='weekly_list'> <a className='link_weelky' href="#">Weekly</a></li>
                        <li className='monthly_list'> <a className='link_monthly' href="#">Monthly</a></li>
                        
                    </ul>
                 </div>
                 {/* div1 user jeremy ends */}

                 {/* div 2 - work starts */}
                <div className='div2'>
                     <div className='div2_inner_p_work'> 
                        <p className='unnecessary'>helldddddddddddddddddd</p>
                        <Work className="work_img" ></Work> 
                    </div> 

                    <div  className='div2_background'> 
                         <div className='work_inner_div_h4_dot'>
                             <h4 className='work'>work</h4> <p className='unnecessary'>tttttttttttttttdddddd</p>
                              <Ellipsis className="dot_3"></Ellipsis>

                         </div>
   
                        <p className='work_time'> 32 hrs</p>
                        <p className='work_time_caption'>last week - 36 hrs</p>
                    </div>
                </div>
                {/* div 2 - work ends */}

                {/* div 3 - play starts  */}
                <div className='div3'>
                 
                <div className='div2_inner_p_work'> 
                        <p className='unnecessary'>helldddddddddddddddddd</p>
                       <Play></Play>
                    </div> 

                    <div  className='div2_background'> 
                         <div className='work_inner_div_h4_dot'>
                             <h4 className='work'>Play</h4> <p className='unnecessary'>ttttttgtttttttttttdddddd</p>
                              <Ellipsis className="dot_3"></Ellipsis>

                         </div>
   
                        <p className='work_time'> 10 hrs</p>
                        <p className='work_time_caption'>last week - 6 hrs</p>
                    </div>

                </div>
                {/* div 3 - play ends  */}

                 {/* div 4- study starts  */}
                <div className='div4'> 
                
                <div className='div2_inner_p_work'> 
                        <p className='unnecessary'>helldddddddddddddddddd</p>
                     <Study></Study>
                    </div> 

                    <div  className='div2_background'> 
                         <div className='work_inner_div_h4_dot'>
                             <h4 className='work'>Study</h4> <p className='unnecessary'>tttttttttttttttdddddd</p>
                              <Ellipsis className="dot_3"></Ellipsis>

                         </div>
   
                        <p className='work_time'> 4 hrs</p>
                        <p className='work_time_caption'>last week - 7 hrs</p>
                    </div>

                </div>
                {/* div 4- study ends */}

                 {/* div 5 - excersice starts  */}
                <div className='div5'>
                
                <div className='div2_inner_p_work'> 
                        <p className='unnecessary'>helldddddddddddddddddd</p>
                      <Exercise></Exercise>
                    </div> 

                    <div  className='div2_background'> 
                         <div className='work_inner_div_h4_dot'>
                             <h4 className='work'>Exercise</h4> <p className='unnecessary'>tttttttttttdddddd</p>
                              <Ellipsis className="dot_3"></Ellipsis>

                         </div>
   
                        <p className='work_time'> 4 hrs</p>
                        <p className='work_time_caption'>last week - 5 hrs</p>
                    </div>

                 </div>
                   {/* div 5 - excersice ends */}

                  {/* div 6 - social starts  */}
                <div className='div6'>
                
                <div className='div2_inner_p_work'> 
                        <p className='unnecessary'>helldddddddddddddddddd</p>
                     <Social></Social>
                    </div> 

                    <div  className='div2_background'> 
                         <div className='work_inner_div_h4_dot'>
                             <h4 className='work'>Social</h4> <p className='unnecessary'>tttttttttttttttdddddd</p>
                              <Ellipsis className="dot_3"></Ellipsis>

                         </div>
   
                        <p className='work_time'> 5 hrs</p>
                        <p className='work_time_caption'>last week - 10 hrs</p>
                    </div>
                
                </div>
                 {/* div 6 - social ends  */}

                 {/* div 7 -selfcare starts  */}
                <div className='div7'>
                
                <div className='div2_inner_p_work'> 
                        <p className='unnecessary'>helldddddddddddddddddd</p>
                     <SelfCare></SelfCare>
                    </div> 

                    <div  className='div2_background'> 
                         <div className='work_inner_div_h4_dot'>
                             <h4 className='work'>Self Care</h4> <p className='unnecessary'>ttttttttttdddddd</p>
                              <Ellipsis className="dot_3"></Ellipsis>

                         </div>
   
                        <p className='work_time'> 2 hrs</p>
                        <p className='work_time_caption'>last week - 2 hrs</p>
                    </div>
                
                 </div>
                 {/* div 7 -selfcare ends */}
                

            </div>
        </>
    )
}
