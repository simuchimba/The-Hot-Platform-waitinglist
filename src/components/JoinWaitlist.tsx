import BackroundArt from "assets/BackroundArt";
import Logo from "assets/Logo";
import Component20 from "components/Component20";
import BackgroundVector3 from "assets/BackgroundVector3";
import BackroundArt1 from "assets/BackroundArt1";
import Group7 from "assets/Group7";
import Instagram from "assets/Instagram";
import Twitter from "assets/Twitter";
import Facebook from "assets/Facebook";
import Discord from "assets/Discord";
import "./JoinWaitlist.css";
import 'bootstrap/dist/css/bootstrap.css';


export default function JoinWaitlist() {
    return (
        <div>

            <div className="bg p-2 row bg-dark" style={{margin: 0}}>
                <div className="col-12" p-2>
                    <img className="logo" src="https://drive.google.com/uc?export=download&id=1gJdSNqFB1pnfHpjY2qrBIN-_VcUwMODa"/>
                </div>
            </div>
            <div className="row row-1  py-5 px-3 bg-dark text-white gap-3 gap-md-0" style={{margin: 0}}>
                <div className="col-md-6">
                    <img
                        src="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/05c2a85753fb287af11eb19b3f2aa3d05ad8c960.webp"
                        className="img img-fluid" style={{borderRadius: "10px"}}/>
                </div>
                <div className="col-md-6 m-auto">
                    <div className="header">
                        <h5>A step to a new career transformation</h5> 
                        <p className="h1 text-center">
                            Ignite your<br/> business for <br/> change</p> <br></br>
                            <p className="h4 text-center">
                            Build, Network and Grow<br/> to transform your <br/> career today</p>
                        <p className="text-center fs-6 texto">
                            <br/>
                            Join the waitlist to enjoy premium features for free.
                        </p>
                        <br/> <a href="https://forms.gle/FnoVDiye1MpAU2Bx6">
                        <div className="text-center">
                            <button className="btn btn-warning">Join Waitlist</button>
                        </div></a>

                    </div>
                </div>
            </div>

            <div className="row-2 px-5 py-5 ">
            <h5 className="fw-semibold">Build and Manage All In One Place </h5>
            <p className="">
                    Use <b>The HotPlatform</b> to connect with your community, network with professionals for insights and create stunning designs to attract recruiters.
                    <br/> 
                </p> 
            <br/>
            
                
                <p className="">
                ✔ Portfolio feature to flaunt your work and skills to impress hirers
                    <br/> <br></br>
                    ✔ Smart design to create stunning visuals to showcase your expertise with a few clicks
                    <br/> <br></br>

                    ✔ Connecting you with employers who appreciate your talents
                    <br/> <br></br>

                    ✔ Stay ahead in the business world with valuable insights and inspiration
                    <br/> <br></br>

                    
                </p>


            </div>


            <div className="row-3 bg-warning py-5 px-5">

                <div className="row-3-heading m-auto">
                    <h2 className="text-center fw-semibold">
                        Choose Your Account and Start Your Journey <i className="bi bi-facebook text-white"></i>
                    </h2>
                </div>
                <br></br>


                <h5>
                    Social Account
                    <br/>
                </h5>

                <p>
                    Connect with peers and share your journey.
                    <br/>
                </p>

                <br/>

                <h5>
                    Professional Account
                    <br/>
                </h5>

                <p>
                    Showcase your skills and network with professionals.
                    <br/> <br></br>
                </p>


                <h5>
                    Business Account
                    <br/>
                </h5>

                <p>
                    Grow your brand, access powerful tools, and connect with potential partners.
                    <br/> <br></br>
                </p>
                <br/>
                <div className="black-box bg-dark">
                    <h4 className="text-center text-white">
                        Join our waitlist now and be part of this resolution
                    </h4><br/>
                    <div className="text-center">
                        <button className="btn btn-warning text-white "
                                onClick={() => window.location.href = 'https://forms.gle/FnoVDiye1MpAU2Bx6'}>Join
                            waitlist
                        </button>
                    </div>
                </div>

            </div>
            <div className="row-4 bg-dark text-white text-center py-3">
                <div>

                    <div className="hp">
                    <a href="#"> <Group7/> </a>
                    </div>


                    <p>
                    Ignite your
business for
change with The HotPlatform
                    </p>
                </div>
                <br/>
                <div className="d-flex justify-content-center gap-2 ">
                <div className="join-waitlist-group-427318860x">
            <div className="join-waitlist-ellipse-968x">
          <a href="#">   <Instagram className="join-waitlist-instagram-1" /> </a> 
            </div>
          </div>
          <div className="join-waitlist-group-427318859x">
            <div className="join-waitlist-ellipse-969x">
            <a href="#">      <Twitter className="join-waitlist-twitter-1" /> </a>
            </div>
          </div>
          <div className="join-waitlist-group-427318858x">
            <div className="join-waitlist-ellipse-970x">
            <a href="#">    <Facebook className="join-waitlist-facebook-1" /> </a>
            </div>
          </div>
          <div className="join-waitlist-group-427318857x">
            <div className="join-waitlist-ellipse-971x">
            <a href="#">    <Discord className="join-waitlist-discord-1" /> </a>
            </div>
          </div>
                </div>
                <br/>
            </div>
        </div>
    );
}




