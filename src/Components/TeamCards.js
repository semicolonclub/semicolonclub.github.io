import React from 'react';
import '../Styles/TeamCards.css';
import pic1 from "../assets/harshit.png";
import pic2 from "../assets/anurag.png";
import pic3 from "../assets/aryan.png";
import pic4 from "../assets/koshan.png";
import pic5 from "../assets/dh.png";
import pic6 from "../assets/prathmesh.png";
import pic8 from "../assets/navneet.png";
import pic9 from "../assets/jitu.png";
import pic10 from "../assets/aniket.png";
import pic11 from "../assets/priyanshu.png";
import pic12 from "../assets/sid.png";
import pic13 from "../assets/jameel.png";
import pic14 from "../assets/kzoya.png";
import pic15 from "../assets/prince.png";
import pic16 from "../assets/ashish.png";
import pic17 from "../assets/aman.png";
import pic18 from "../assets/ujjwal.png";
import pic19 from "../assets/rishav.png";
import pic20 from "../assets/harsh.png";
import pic21 from "../assets/yash.png";
import pic22 from "../assets/shasmeen.png";
import pic23 from "../assets/teja.png";
import pic24 from "../assets/arya.png";
import { Link } from 'react-router-dom';




function Team() {
    const members = [
      {
        name: "Harshit Singh",
        branch: "ELE",
        team: "Operations Team member",
        image: pic1,
        mail: "mailto:harshit_2020bele021@nitsri.ac.in",
        git: "",
        link: "http://linkedin.com/in/harshit-singh-132959201",
      },
      {
        name: "Anurag Yadav",
        branch: "IT",
        team: "Content & Creative Team member",
        image: pic2,
        mail: "mailto:anurag_2020bece078@nitsri.ac.in",
        git: "https://github.com/devgenixx",
        link: "https://www.linkedin.com/in/anurag-yadav-devgenix/",
      },
      {
        name: "Aryan Bral",
        branch: "MEC",
        team: "Operations Team member",
        image: pic3,
        mail: "mailto:aryan_2020bmec032@nitsri.net ",
        git: "http://github.com/Aryan-bral/Aryan-bral",
        link: "https://www.linkedin.com/in/aniket-chandele-751955201/",
      },
      {
        name: "Koshan Qari",
        branch: "MEC",
        team: "Operations Team member",
        image: pic4,
        mail: "mailto:koshan_2020bmme004@nitsri.ac.in",
        git: "https://github.com/koshanqari",
        link: "https://www.linkedin.com/in/koshan-qari-2a54211bb",
      },
      {
        name: "Dhairyashil Hasbe",
        branch: "MEC",
        team: "Content & Creative Team member",
        image: pic5,
        mail: "mailto:Dhairyashil_2020Bmec031@nitsri.ac.in",
        git: "",
        link: "https://www.linkedin.com/in/dhairyashil-hasbe-673871198",
      },
      {
        name: "Prathamesh Shinde",
        branch: "CHEM",
        team: "Content & Creative Team member",
        image: pic6,
        mail: "mailto:shinde_2020bche090@nitsri.ac.in",
        git: "",
        link: "",
      },
      {
        name: "Navneet Kumar",
        branch: "CIV",
        team: "Operations Team member",
        image: pic8,
        mail: "mailto:navneet_2020bciv128@nitsri.ac.in",
        git: "",
        link: "https://www.linkedin.com/in/navneet-kumar-b97bb4221",
      },
      {
        name: "Jitendra Kumar Singh",
        branch: "CIV",
        team: "Operations Team member",
        image: pic9,
        mail: "mailto:jitendrakumarsingh20022002@gmail.com",
        git: "",
        link: "",
      },
      {
        name: "Aniket Chandele",
        branch: "CSE",
        team: "Operations Team member",
        image: pic10,
        mail: "mailto:aniket_2020bcse051@nitsri.ac.in",
        git: "https://github.com/Aniket-ac-ig",
        link: "https://www.linkedin.com/in/aniket-chandele-751955201/",
      },

      {
        name: "Priyanshu Kumar",
        branch: "CIV",
        team: "Operations Team member",
        image: pic11,
        mail: "mailto:priyanshu_2020bciv178@nitsri.net",
        git: "",
        link: "https://www.linkedin.com/in/priyanshu-kumar-031748221",
      },
      {
        name: "Sidharth Singh",
        branch: "MME",
        team: "Operations Team member",
        image: pic12,
        mail: "mailto:siddharth_2020bmme098@nitsri.ac.in",
        git: "",
        link: "https://www.linkedin.com/in/siddharth-singh-rajput-b5a755236",
      },
      {
        name: "Jameel Kaisar Khan",
        branch: "IT",
        team: "Technical Team member",
        image: pic13,
        mail: "mailto:jameel_2020bite001@nitsri.ac.in",
        git: "https://github.com/JameelKaisar",
        link: "https://www.linkedin.com/in/jameelkaisar",
      },

      {
        name: "Zoya Khatry",
        branch: "CSE",
        team: "Technical Team member",
        image: pic14,
        mail: "mailto:zoya_2020bcse086@nitsri.ac.in",
        git: "https://github.com/Zoyakhatry1",
        link: "https://www.linkedin.com/in/zoya-khatry/",
      },
      {
        name: "Prince Garg",
        branch: "MME",
        team: "Technical Team member",
        image: pic15,
        mail: "mailto:prince_2020bmme099@nitsri.ac.in",
        git: "https://github.com/princegarg2808",
        link: "https://www.linkedin.com/in/prince-garg-58a780203",
      },
      {
        name: "Aashish Kumar Nayak",
        branch: "MEC",
        team: "Technical Team member",
        image: pic16,
        mail: "mailto:aashish_2020bmec079@nitsri.ac.in",
        git: "https://github.com/aashishkumarnayak",
        link: "https://www.linkedin.com/in/aashish-kumar-nayak-038952200/",
      },
      {
        name: "Aman Singh Bisht",
        branch: "ECE",
        team: "Technical Team member",
        image: pic17,
        mail: "mailto:aman_2020bece029@nitsri.ac.in",
        git: "https://github.com/amansinghbisht029",
        link: "https://www.linkedin.com/in/aman-singh-bisht-2020-2024-ece/",
      },
      {
        name: "Ujjwal Agnihotri",
        branch: "MME",
        team: "Technical Team member",
        image: pic18,
        mail: "mailto:ujjwal_2020bmme106@nitsri.ac.in",
        git: "https://github.com/ujjwalagni",
        link: "https://www.linkedin.com/in/ujjwal-agnihotri-64a4aa218/",
      },
      {
        name: "Rishav Pratap Singh",
        branch: "MEC",
        team: "Technical Team member",
        image: pic19,
        mail: "mailto:rishav_2020bmec102@nitsri.ac.in",
        git: "https://github.com/RishavSingh102",
        link: "https://www.linkedin.com/in/%F0%9D%9A%81%F0%9D%9A%92%F0%9D%9A%9C%F0%9D%9A%91%F0%9D%9A%8A%F0%9D%9A%9F-%F0%9D%99%BF%F0%9D%9A%9B%F0%9D%9A%8A%F0%9D%9A%9D%F0%9D%9A%8A%F0%9D%9A%99-%F0%9D%9A%82%F0%9D%9A%92%F0%9D%9A%97%F0%9D%9A%90%F0%9D%9A%91-412738200/",
      },
      {
        name: "Harsh Singh",
        branch: "ELE",
        team: "Technical Team member",
        image: pic20,
        mail: "mailto:harsh_2020bele080@nitsri.ac.in",
        git: "https://github.com/harsh-nitsgr",
        link: "https://www.linkedin.com/in/harshsinggh/",
      },
      {
        name: "Yash Shukla",
        branch: "ELE",
        team: "Technical Team member",
        image: pic21,
        mail: "mailto:yash_20btech20@nitsri.ac.in",
        git: "https://github.com/yashshukla07",
        link: "https://www.linkedin.com/in/yash-shukla-7260531a2/",
      },
      {
        name: "Shasmeen Shora",
        branch: "CHEM",
        team: "PR & Advisory Team member",
        image: pic22,
        mail: "mailto:shasmeen_2020bche052@nitsri.ac.in",
        git: "",
        link: "",
      },
      {
        name: "Vemula Theja",
        branch: "CSE",
        team: "PR & Advisory Team member",
        image: pic23,
        mail: "mailto:vemula_2020bcse061@nitsri.ac.in",
        git: "",
        link: "https://www.linkedin.com/in/theja-vemula-4a1151239",
      },
      {
        name: "Abhishek Kumar Arya",
        branch: "CIV",
        team: "PR & Advisory Team member",
        image: pic24,
        mail: "mailto:abhishek_2020bciv136@nitsri.ac.in",
        git: "",
        link: "https://www.linkedin.com/in/abhishek-kumar-37258a1b3",
      },
    ];
  return(
    <div>
         <div className='Team'><h1>Team</h1></div>
   
    <div class="container">
     {members.map((element,index)=>{
        const pic = element.image;
        return (
            <div key={index} class="card">
        <div class="content">
            <div class="imgBx">
                <img src={element.image}/>
            </div>
            <div class="contentBx">
                <h4>{element.name}</h4>
                <h6 class="branchContent">({element.branch})</h6>
                <h5>{element.team}</h5>
            </div>
            <div class="sci">
                <a href={element.link}><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href={element.git}><i class="fa fa-github" aria-hidden="true"></i></a>
                <a href={element.mail}><i class="fa fa-envelope" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>
        )
     })}
    
    {/* <div class="card">
        <div class="content">
            <div class="imgBx">
                <img src={pic1} alt=""/>
            </div>
            <div class="contentBx">
                <h4>Name</h4>
                <h5>Team</h5>
            </div>
            <div class="sci">
            <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-github" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="content">
            <div class="imgBx">
                <img src={pic1} alt=""/>
            </div>
            <div class="contentBx">
                <h4>Name</h4>
                <h5>Team</h5>
            </div>
            <div class="sci">
            <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-github" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="content">
            <div class="imgBx">
                <img src={pic1} alt=""/>
            </div>
            <div class="contentBx">
                <h4>Name</h4>
                <h5>Team</h5>
            </div>
            <div class="sci">
            <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-github" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="content">
            <div class="imgBx">
                <img src={pic1} alt=""/>
            </div>
            <div class="contentBx">
                <h4>Name</h4> 
                <h5>Team</h5>
            </div>
            <div class="sci">
            <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-github" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="content">
            <div class="imgBx">
                <img src={pic1} alt=""/>
            </div>
            <div class="contentBx">
                <h4>Name</h4>
                <h5>Team</h5>
            </div>
            <div class="sci">
               
            
                <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-github" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>


    <div class="card">
        <div class="content">
            <div class="imgBx">
                <img src={pic1} alt=""/>
            </div>
            <div class="contentBx">
                <h4>Name</h4>
                <h5>Team</h5>
            </div>
            <div class="sci">
            <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-github" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>

    
    <div class="card">
        <div class="content">
            <div class="imgBx">
                <img src={pic1} alt=""/>
            </div>
            <div class="contentBx">
                <h4>Name</h4>
                <h5>Team</h5>
            </div>
            <div class="sci">
            <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-github" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>


    */}

</div>
</div>
      )
} 

export default Team
