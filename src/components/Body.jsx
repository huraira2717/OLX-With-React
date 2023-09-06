import React from "react";
import CAR from '../images/car.jpg'
import Slider from '../images/slider.jpg'
import Mobile from '../images/mobiles.png'
import House from '../images/house.png'
import Camera from '../images/camera.png'
import bikes from '../images/bikes.png'
import property from '../images/property-for-rent..png'
import CAR1 from '../images/car.png'
import Tracter from '../images/tracter.png'
import Services from '../images/services.png'
import Jobs from '../images/jobs.png'
import Animals from '../images/Animals.png'
import Furniture from '../images/furniture.png'
import Fashion from '../images/fashion.png'
import Books from '../images/books.png'
import Kids from '../images/kids.png'

import Iphone13 from '../images/iPhone13.jpg'
import Google from '../images/google.jpg'
import vivo from '../images/vivo.jpg'
import Iphone14 from '../images/Iphone14.jpg'


import car1 from '../images/car1.jpg'
import car2 from '../images/car2.jpg'
import car3 from '../images/car3.jpeg'


import Bike1 from '../images/bikes1.jpg'
import Bike2 from '../images/bike2.png'
import Bike3 from '../images/bike3.jpg'
import Bike4 from '../images/bike4.jpg'

import House1 from '../images/House1.jpg'
import House2 from '../images/house2.jpg'
import House3 from '../images/house3.jpg'
import House4 from '../images/house4.jpg'

import footcrosel from '../images/footcrosel.png'






function Body(){
    // const Arro=() =>{
    // }
    // const arr=["One","Two","three"]
    // const obj={
    //     val:"Hamza"
    // }
    // const loder=true;
    // console.log(arr)


    return(
        <>

            <div className="cont1">
            <div className="div1"> <img src={Slider} alt="" id="img2" /></div></div>
            <div className="categories">
            <div><h2>All Categories</h2></div>
            <div className="products">
                <div className="productCont">
                <img src={Mobile} alt=""  className="productImg"/>
                <h3>Mobiles</h3>
                </div>
                <div className="productCont">
                <img src={House} alt=""  className="productImg"/>
                <h3>Vehicles</h3>
                </div><div className="productCont">
                <img src={Camera} alt=""  className="productImg"/>
                <h3>Camera</h3>
                </div><div className="productCont">
                <img src={bikes} alt=""  className="productImg"/>
                <h3>Bikes</h3>
                </div><div className="productCont">
                <img src={property} alt=""  className="productImg"/>
                <h3>House for rent</h3>
                </div><div className="productCont">
                <img src={CAR1} alt=""  className="productImg"/>
                <h3>Cars</h3>
                </div><div className="productCont">
                <img src={Tracter} alt=""  className="productImg"/>
                <h3>Business Industrial</h3>
                </div><div className="productCont">
                <img src={Services} alt=""  className="productImg"/>
                <h3>Services</h3>
                </div><div className="productCont">
                <img src={Jobs} alt=""  className="productImg"/>
                <h3>Jobs</h3>
                </div>
                </div>

                <div className="product2">
                <div className="productCont">
                <img src={Animals} alt=""  className="productImg"/>
                <h3>Animals</h3>
                </div><div className="productCont">
                <img src={Furniture} alt=""  className="productImg"/>
                <h3>Furniture Decor</h3>
                </div><div className="productCont">
                <img src={Fashion} alt=""  className="productImg"/>
                <h3>Fashion Beauty</h3>
                </div><div className="productCont">
                <img src={Books} alt=""  className="productImg"/>
                <h3>Books Sports</h3>
                </div><div className="productCont">
                <img src={Kids} alt=""  className="productImg"/>
                <h3>Kids</h3>
                </div>
                </div>
            </div>


            <div className="MobilePhones">
            <div><h2>Mobile Phones</h2></div>
            <div className="meinPhones">
            <div className="phones">
                <div className="phonesCont">
                <div className="phoCont">
                    <img src={Iphone13} alt="" id="phonesImg" />
                    <h3 className="price">Rs 178,000</h3>
                    <p className="desc">Apple I phone 13 Pro 128GB this product is non pta proved </p>
                </div>
                </div>
                </div>

                <div className="phones" id="phones">
                <div className="phonesCont">
                <div className="phoCont">
                    <img src={Google} alt="" id="phonesImg" />
                    <h3 className="price">Rs 230,000</h3>
                    <p className="desc">Google pixele 17 Pro 128GB 12GB This is the one of the best</p>
                </div>
                </div>
                </div>

                <div className="phones" id="phones">
                <div className="phonesCont">
                <div className="phoCont">
                    <img src={vivo} alt="" id="phonesImg" />
                    <h3 className="price">Rs 30,999</h3>
                    <p className="desc">Vivo s1 8GB 256GB </p>
                </div>
                </div>
                </div>

                <div className="phones" id="phones">
                <div className="phonesCont">
                <div className="phoCont">
                    <img src={Iphone14} alt="" id="phonesImg" />
                    <h3 className="price">Rs 290,000</h3>
                    <p className="desc">Apple I phone 14Promax | 128GB Iphone </p>
                </div>
                </div>
                </div>


                </div>
                </div>
                


            {/* //////////////////////////////////////////////// */} 
            <div className="AllCars">
            <div><h2>CARS</h2></div>
            <div className="meincars">
            <div className="cars">
                <div className="carcont">
                <div className="typcar">
                    <img src={CAR} alt="" id="carimg" />
                    <h3 className="price">Rs 2,500,000</h3>
                    <p className="desc">Suzuki every 18/20 </p>
                </div>
                </div>
                </div>

                <div className="cars" id="cars">
                <div className="carcont">
                <div className="typcar">
                    <img src={car1} alt="" id="carimg" />
                    <h3 className="price">Rs 4,250,000</h3>
                    <p className="desc">80 series land cruiser</p>
                </div>
                </div>
                </div>

                <div className="cars" id="cars">
                <div className="carcont">
                <div className="typcar">
                    <img src={car2} alt="" id="carimg" />
                    <h3 className="price">Rs 3,040,000</h3>
                    <p className="desc">Honda city i vtec </p>
                </div>
                </div>
                </div>

                <div className="cars" id="cars">
                <div className="carcont">
                <div className="typcar">
                    <img src={car3} alt="" id="carimg" />
                    <h3 className="price">Rs 1,100,000</h3>
                    <p className="desc">Suzuki Aulto vxr 2010 modal </p>
                </div>
                </div>
                </div>  


                </div>
                </div>

             {/* //////////////////////////////////////////////////// */}

             <div className="AllBikes">
            <div><h2>BIKES</h2></div>
            <div className="meinBikes">
            <div className="cars">
                <div className="carcont">
                <div className="typcar">
                    <img src={Bike1} alt="" id="carimg" />
                    <h3 className="price">Rs 2,500,000</h3>
                    <p className="desc">Bulit 2019 modal </p>
                </div>
                </div>
                </div>

                <div className="cars" id="cars">
                <div className="carcont">
                <div className="typcar">
                    <img src={Bike2} alt="" id="carimg" />
                    <h3 className="price">Rs 4,250,000</h3>
                    <p className="desc">Kavasaki ninja H2R</p>
                </div>
                </div>
                </div>

                <div className="cars" id="cars">
                <div className="carcont">
                <div className="typcar">
                    <img src={Bike3} alt="" id="carimg" />
                    <h3 className="price">Rs 3,040,000</h3>
                    <p className="desc">KTM VT28 </p>
                </div>
                </div>
                </div>

                <div className="cars" id="cars">
                <div className="carcont">
                <div className="typcar">
                    <img src={Bike4} alt="" id="carimg" />
                    <h3 className="price">Rs 1,100,000</h3>
                    <p className="desc">Hayabusa vxr 2018 modal </p>
                </div>
                </div>
                </div>  


                </div>
                </div>


                {/* /////////////////////////////// */}
                <div className="AllBikes">
            <div><h2>Property</h2></div>
            <div className="meinBikes">
            <div className="cars">
                <div className="carcont">
                <div className="typcar">
                    <img src={House1} alt="" id="carimg" />
                    <h3 className="price">Rs 222,500,000</h3>
                    <p className="desc">HOuse in Queeta </p>
                </div>
                </div>
                </div>

                <div className="cars" id="cars">
                <div className="carcont">
                <div className="typcar">
                    <img src={House2} alt="" id="carimg" />
                    <h3 className="price">Rs 40,250,000</h3>
                    <p className="desc">Vila in lahore green town</p>
                </div>
                </div>
                </div>

                <div className="cars" id="cars">
                <div className="carcont">
                <div className="typcar">
                    <img src={House3} alt="" id="carimg" />
                    <h3 className="price">Rs 388,040,000</h3>
                    <p className="desc">Resort in islamabad</p>
                </div>
                </div>
                </div>

                <div className="cars" id="cars">
                <div className="carcont">
                <div className="typcar">
                    <img src={House4} alt="" id="carimg" />
                    <h3 className="price">Rs 75,100,000</h3>
                    <p className="desc">Banglo well furnichid in Karachi </p>
                </div>
                </div>
                </div>  
                </div>
                </div>

                <div className="lastimgDiv"><img src={footcrosel} alt="" id="lastimg"/></div>
        </>
    )
}

export default Body;