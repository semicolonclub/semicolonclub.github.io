import React from 'react'
import EventCard from './EventCard';
import "../Styles/EventCard.css";
import pic1 from "../assets/pic1.jpg";

var date= new Date().getTime();
console.log(date);

function EventCards() {
    const members=[{
        name:'CYPHER',
        image:pic1,
        description:'The Cipher event involves the participants attempting to decode a set of secret messages by using the hints and clues that they are provided with. 3 sets of encrypted messages will be given to the participants who will be in teams of two. Each successive message will be harder to decrypt. ',
        link:'https://www.instagram.com/p/BvpWfL3BOLa/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA== ',
        date:'07-04-2019'
      },
      {
        name:'405 NOT FOUND',
        image:pic1,
        description:'The event was a hackathon challenge based on algorithms and problems modelled on real-life situations. It was conducted in multiple rounds. Depending upon the number of participants, whether even or odd, the byes were decided accordingly.',
        date:'05-04-2019',
        link:' https://www.instagram.com/p/Bvs-0fpHy4_/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
      },
      {
        name:'EXORDIUM 2.0',
        image:pic1,
        description:'Exordium 2.O was one of the largest Technical Fest of whole Kashmir valley that was held in the year 2019 in which students from all over the Kashmir participated actively including large amount of students from NIT Srinagar.',
        date:'03-04-2019',
        link:' https://www.instagram.com/p/BvmWgkcBLvh/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
      },
      {
        name:'QUAESTIUM',
        image:pic1,
        description:'Quaesitum was an online coding event organised by Semicolon to uplift the overall coding culture within the campus students.',
        date:'10-10-2020',
        link:' https://www.instagram.com/p/CGGUvcUnu0S/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
      },
      {
        name:'SHARK TANK',
        image:pic1,
        description:'The Shark Tank NIT Srinagar event has been successfully conducted by Semicolon- The Official Coding Club of NIT Srinagar. The event was a major success with around 150+ registrations and 25+ ideas making it to the final round.Our heartiest congratulations to the top 5!',
        date:'19-02-2022',
        link:'https://www.instagram.com/p/CaJ1sPksKTB/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
      },
      {
        name:'TECHNOPHILIA',
        image:pic1,
        description:'Technophilia was a 1.5 Hour long Coding Competition comprising of 1 Easy and 2 Medium level problems based on Programming Logic and the Implementation of Data Structures & Algorithms.Winners were awarded with a Certificate, LOR and an honorary mention on the Social Media Handles of NIT Srinagar & Semicolon',
        date:'24-04-2022',
        link:'https://www.instagram.com/p/CcpF9QqLN62/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
      },
      {
        name:'ANIMEA',
        image:pic1,
        description:'Semicolon is organised an anime based event ANIMIEA on 8th Oct 2022 i.e. Saturday from 10:30am onwards based on some of the most popular Anime:Naruto, Dragon Ball, Pokemon, and many more.',
        date:'08-10-2022',
        link:'https://www.instagram.com/reel/CjZs2u_vMPW/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA== '
      },
      {
        name:'TECHSAPIENS 1.O',
        image:pic1,
        description:'SEMICOLON, the official coding club of NIT Srinagar was delighted to announce their flagship competitive programming event “TECHSAPIENS 1.0”.A semester long coding challenge for all the tech geeks, a chance to be “CODER OF THE SEMESTER” and win exciting prizes.',
        date:'28-10-2022',
        link:'https://www.instagram.com/reel/CkA1JJYJNCN/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
      },
      {
        name:'LIVE WEBINAR',
        image:pic1,
        description:'Semicolon NIT Srinagar organised a webinar on Competitive Programming and Placements by Mr. Vivek Gupta.Mr. Vivek Gupta is the founder of Algozenith, ICPC (International Collegiate Programming Contest) World finalist and an SDE at Google. Apart from this, he is a 7 star Red Coder at Code Chef.',
        date:'21-01-2023',
        link:' https://www.instagram.com/p/CnRIVYYLoq6/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
      },
      {
        name:'ORIENTATION PROGRAMME',
        image:pic1,
        description:'Semicolon, the official coding club of NIT Srinagar, conducted the orientation programme of batch 2022 on 25th of march, in the PF rooms.More than 300 students from all the respective branches showed up with keen interest to learn regarding club and also to interact with the seniors and their batchmates better. Apart from this, Semicolon conducts the orientation programme every year for all the new batches admitting here.',
        date:'25-03-2022',
        link:'https://www.instagram.com/reel/CkA1JJYJNCN/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA== '
      },
      {
        name:'EXORDIUM 3.0',
        image:pic1,
        description:'BOOST UP TechSavy’s!Exordium 3.O, organized by Semicolon, the official coding club of NIT Srinagar, is set to become the largest technical fest in the Kashmir valley. This 3-4 day event will feature a diverse range of both technical and non-technical activities, catering to a wide audience. Attendees can expect a plethora of engaging events and competitions that showcase the latest advancements in technology and foster innovation. With a focus on fostering learning, collaboration, and creativity, Exordium 3.O promises to be an exciting platform for students and enthusiasts from whole Kashmir valley to explore and showcase their talents in the field of technology.',
        date:'To be updated!',
      },
      {
        name:'EXTRACTION',
        image:pic1,
        description:'We would like to bring it to your notice thatSemicolon, the official coding club of NIT Srinagar is going to organize ‘TREASURE HUNT’ – EXTRACTION.A challenge open for all, showcase your resourcefulness, aptitude, general knowledge, and out-of-the-box thinking whole across the NIT Sri campus.',
        date:'To be updated!'
      },
      {
        name:'TECHSAPIENS 2.0',
        image:pic1,
        description:'GEAR UP Techsapiens!SEMICOLON, the official coding club of NIT Srinagar is again delighted to announce their flagship competitive programming event “TECHSAPIENS 2.0”.A semester long coding challenge for all the tech geeks, a chance to be “CODER OF THE SEMESTER”, win exciting prizes, official certificate of Semicolon and LOR.',
        date:'To be updated!'
      },
     
    ]
    return (
        <div>
        <div className='containerrr'>
            <div className="testimonials__heading">
               <h1 >Upcoming Events</h1>
            </div>
            <div className="testimonials__section">
               {members.map((element,index)=>{
                  {/* let newdate=element.date.substring(3,5)+"-"+element.date.substring(0,2)+"-"+element.date.substring(6,10);
                  console.log(newdate);
                  let date2= new Date(newdate).getTime();
                  console.log(date2);
                  let select=(date<date2);
                  console.log(select); */}
                  if(element.date==='To be updated!'){
                    return (
                    <EventCard item={element} key={index} category="upcoming"/>
                  )
                  }
               })}
           </div>
        </div>

        <div className='containerrr2'>
            <div className="testimonials__heading">
               <h1 >Past Events</h1>
            </div>
            <div className="testimonials__section">
               {members.map((element,index)=>{
                  let newdate=element.date.substring(3,5)+"-"+element.date.substring(0,2)+"-"+element.date.substring(6,10);
                  console.log(newdate);
                  let date2= new Date(newdate).getTime();
                  console.log(date2);
                  let select=(date>date2);
                  console.log(select);
                  if(select){
                    return (
                    <EventCard item={element} key={index} category="upcoming"/>
                  )
                  }
               })}
           </div>
        </div>
    </div>
      )
}

export default EventCards;
