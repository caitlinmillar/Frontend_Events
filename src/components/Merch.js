import pic1 from "./merchImages/1.png";
import pic2 from "./merchImages/2.png";
import pic3 from "./merchImages/3.png";
import pic4 from "./merchImages/4.png";
import pic5 from "./merchImages/5.png";
import pic6 from "./merchImages/6.png";

const images = [
    {"id" : 1, "url": pic1},
    {"id" : 2, "url": pic2},
    {"id" : 3, "url": pic3},
    {"id" : 4, "url": pic4},
    {"id" : 5, "url": pic5},
    {"id" : 6, "url": pic6},
]

const Merch = ({theme}) => {

    return(
    <div className={`merch${theme}`}>
        <h1 className="header">Check out our awesome merch line</h1>
        <div className="images">
        <section class="">

        <div class="container-fluid px-0">
            <div class="row g-0">
                <div class="col-lg-6 vh-100">
                    <div class="vh-100" >
                        <img src={pic5} />
                    </div>
                </div>
                <div class="col-lg-6 vh-100">
                    <div class="vh-100">
                        <img src={pic6}/>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid px-0">
            <div class="row g-0">
                <div class="col-lg-6 vh-100 ">
                    <div class="vh-100">
                        <img src={pic1}/>
                        <img src={pic2}/>
                    </div>
                </div>
                <div class="col-lg-6 vh-100 ">
                    <div class="vh-100">
                        <img src={pic4}/>
                        <img src={pic3}/>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid px-0">
            <div class="row g-0">
                <div class={`col-lg-6 vh-100 bg-${theme}`}>
                    <div class="vh-100">
                    </div>
                </div>
                <div class={`col-lg-6 vh-100 bg-${theme}`}>
                    <div class="vh-100 ">
                    </div>
                </div>
            </div>
        </div>

</section>
        </div>
    </div>
    )
    
}

export default Merch;