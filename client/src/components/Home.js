import React from 'react'

export default function Home() {
    return (
        <div>
            <div style={{height: "100vh", background:"#fff9f5", position: "relative"}}>
                <div className="centered" style={{  position: "absolute", top:"50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                    <h2 style={{color:"#9b8884", fontSize: "7em", margin:0, fontFamily: 'Parisienne, cursive'}}>Goldn Serval</h2>
                    <h3 style={{color: "#9b8884", fontFamily: "EB Garamond, serif", margin: 0, margin: "-35px 0 0 -75px",fontSize:"2em"}}>Talent Aquisition Agency</h3>
                </div>

            </div>

            {/* section 2 */}
            <div  style={{background:"#fdb8b6", height:"500px"}}>
                
                <div style={{display:"inline-flex", width: "100%"}}>
<section style={{width:"50%", padding: "75px"}}>
<div>

    <div style={{width:"350px", height:"450px", background: "red"}}></div>
    <div style={{width:"250px", height: "370px", background:" yellow", position: "relative", bottom: "300px", left: "220px"}}></div>
</div>



{/* <div class="parent"> 
<div class="div1"> 1</div> 
<div class="div2"> 2</div> 
<div class="div3"> 3</div> 
</div> */}
</section>



<section className="centered" style={{width:"50%", position: "absolute", left: "50%", 
// transform: "translate(50%, 50%)
}}
>


                <div style={{height: "450px", top: 0, position: "relative"}}>
                <div className="centered" style={{  position: "absolute", top:"50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                    <h2 style={{color:"#9b8884", fontSize: "3em", margin:0, fontFamily: 'Parisienne, cursive'}}>Beauty Portfolio</h2>
                    <h3 style={{color: "#fff9f5", fontFamily: "EB Garamond, serif", fontSize:"1.3em"}}>
                    Enhance your natural beauty and be the belle of any ball. Whether you're a bride or a debutant, let your beauty shine and brighten up any occasion.
                    </h3>
                </div>

            </div>

</section>                </div>

            </div>

            {//section 3
            }

            <div className="centered" 
            style={{padding: "50px" , background:"#fff9f5"}}
            // style={{  position: "absolute", top:"50%", left: "50%", transform: "translate(-50%, -50%)"}}
            >

<h2 style={{color:"#9b8884", textAlign: "center", fontSize: "3em",fontFamily: 'Parisienne, cursive'}}>Specialties</h2>

<div style={{display:"inline-flex"}}>
                <div className="cntrboxes">

                    <div className="img1_1"></div>
                    <h3 style={{fontFamily: "EB Garamond, serif", fontSize:"1.3em"}}>Event Makeup</h3>

                        <p style={{fontFamily: "EB Garamond, serif", fontSize:"1.3em"}}>
                            Look your best and be the center of attention
                        </p>

                </div>

                <div className="cntrboxes">

<div className="img1_1"></div>
<h3 style={{fontFamily: "EB Garamond, serif", fontSize:"1.3em"}}>Hairstyling </h3>

    <p style={{fontFamily: "EB Garamond, serif", fontSize:"1.3em"}}>
    Complete your look with the right hairstyle
    </p>

</div>

<div className="cntrboxes">

<div className="img1_1"></div>
<h3 style={{fontFamily: "EB Garamond, serif", fontSize:"1.3em"}}>Photography Makeup</h3>

    <p style={{fontFamily: "EB Garamond, serif", fontSize:"1.3em"}}>
    Capture your best version with the right makeup
    </p>

</div>

</div>
                </div>



{//section 4
}

<div className="centered" 
            style={{padding: "50px" , background:"#fdb8b6"}}
            // style={{  position: "absolute", top:"50%", left: "50%", transform: "translate(-50%, -50%)"}}
            >

<h2 style={{color:"#9b8884", textAlign: "center", fontSize: "3em",fontFamily: 'Parisienne, cursive'}}>Client Reviews</h2>

<div style={{display:"inline-flex"}}>
                <div className="cntrboxes">

                    <div className="img1_1"></div>
                    <h3 style={{fontFamily: "EB Garamond, serif", fontSize:"1.3em"}}>Event Makeup</h3>

                        <p style={{fontFamily: "EB Garamond, serif", fontSize:"1.3em"}}>
                            Look your best and be the center of attention
                        </p>

                </div>

                <div className="cntrboxes">

<div className="img1_1"></div>
<h3 style={{fontFamily: "EB Garamond, serif", fontSize:"1.3em"}}>Hairstyling </h3>

    <p style={{fontFamily: "EB Garamond, serif", fontSize:"1.3em"}}>
    Complete your look with the right hairstyle
    </p>

</div>

<div className="cntrboxes">

<div className="img1_1"></div>
<h3 style={{fontFamily: "EB Garamond, serif", fontSize:"1.3em"}}>Photography Makeup</h3>

    <p style={{fontFamily: "EB Garamond, serif", fontSize:"1.3em"}}>
    Capture your best version with the right makeup
    </p>

</div>

</div>
                </div>


{//section 5
}

<div  style={{background:"#fff9f5", height:"500px"}}>
                
                <div style={{display:"inline-flex", width: "100%"
                // , flexDirection: "row-reverse"
            }}
                >
                <section className="centered" style={{width:"50%",  
}}
>
<h2 style={{color:"#9b8884", fontSize: "3em", margin:0, fontFamily: 'Parisienne, cursive'}}>Unleash Your Beauty</h2>


</section> 
<section className="centered" style={{width:"50%"}}>
<ul style={{color: "#9b8884", fontFamily: "EB Garamond, serif", fontSize:"1.3em"}}>
    <li>Address: Soemwhere blah blah</li>
</ul>



</section>
               </div>

            </div>








        </div>
    )
}
