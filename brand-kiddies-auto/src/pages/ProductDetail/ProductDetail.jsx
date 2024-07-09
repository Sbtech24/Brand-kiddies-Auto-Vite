import React from "react";
import producar from "/product/productCar.svg";
import black1 from "/product/black1.svg";
import black2 from "/product/black2.svg";
import black3 from "/product/black3.svg";
import black4 from "/product/black4.svg";
import right1 from "/product/right1.svg";
import right2 from "/product/right2.svg";
import right3 from "/product/right3.svg";
import right4 from "/product/right4.svg";
import "./productDetail.css"
import CountButton from "../../components/CountButton/CountButton";

const ProductDetail = () => {
  return (
    <div className="main-container">
      <div className="prod-container">
        <div className="prod-left">
          <div className="top">
            <img src={producar} alt="" />
          </div>
          <div className="bottom">
            <img src={black1} alt="" />
            <img src={black2} alt="" />
            <img src={black3} alt="" />
            <img src={black4} alt="" />
          </div>
        </div>
        <div className="prod-right">
          <div>
            <h4>Mercedes Benz 12V, battery operated ride</h4>
            <div className="rating">
              ★★★★☆<span>(54)</span>
            </div>
            <div className="prod-price">
              <p className="prod-price">$101.00</p>
              <span className="prod-span">$101.00</span>
            </div>
          </div>
          <div>
            <h4>Colour: Mercedes Benz Cls-Black</h4>
            <img src={right1} alt="" />
            <img src={right2} alt="" />
            <img src={right3} alt="" />
            <img src={right4} alt="" />
          </div>
          <div>
           <CountButton/>
            <div>
            <p>only 10 items leftDon't miss it</p>
            </div>
          </div>
          
          <div>
            <button className="prod-button">Buy this Item</button>
            <button className="prod-button alt-button">Add to Cart</button>
          </div>

          <div className="pro-p-container">
            <div>
                <img src="" alt="" />
                <p className="pro-p">chat</p>
            </div>

            <div>
            <img src="" alt="" />
            <p className="pro-p">Wishlist</p>
            </div>

            <div>
            <img src="" alt="" />
            <p className="pro-p">Share</p>
            </div>
          </div>
        </div>
      </div>

      {/* bootom section */}
      <div>
        <div>
          <div>
            <button>Description</button>
            <button>Review</button>
            <button>Best Seller</button>
          </div>
          <div>
            <h3>Product Description</h3>
            <ul>
                <li> <p><span className="sp1">【REALISTIC AND STYLISH】</span>Our officially-licensed mercedes benz
                     kids car is scaled down to the ideal size for kids’
                      driving mode. This colorful and streamlined toy will undoubtedly 
                      become a favorite among children due to its eye-catching appearance. 
                      We are dedicated to ensuring your children receive an authentic driving experience.
                      The size of this toddler car is 23.6" x 40.7" x 20", making it great for toddlers above 12 Months old.
                      </p>
                </li>
                <li>
                <p>
                <span span className="sp1">【HIGH PERFORMANCE AND SAFETY DESIGN】</span>
                    Our kids ride on toys is equipped with the bright LED lights, MP3 multifunctional player, built-in music, voltage display, USB and AUX connectors, volume adjustment, double modes (music and radio), TF card slot, and the horn. This kids electric car allows to play your favorite music, stories and broadcasting to create an enjoyable riding atmosphere </p>

                </li>
                <li> <p> <span span className="sp1">【DUALCONTROL MODE</span>】This ride on car with remote control allows your kids to drive this 12 volt Mercedes Benz car independently with the steering wheel and pedal. Or parents can use the 2.4G remote control to safely guide them when your kid learns to drive it.</p>

                </li>
                <li>
                    <p> <span span className="sp1">【SAFETY DRIVING ON】</span>This kids electric vehicles made of a non-toxic, durable, non-chipping plastic with rounded edges. Equipped with a big seat with belt which allows comfortable and safe driving experience.Wheels designed with knobby tread and spring suspension are nonslip, wear-resistant, explosion-proof, and shockproof, ensuring smooth and comfortable riding on both flat and tough terrains. </p>

                </li>
                <li>
                    <p>
                    <span span className="sp1">【PERFECT GIFTS & AFTER-SALE GUARANTEED】</span>
                    LITTLE BROWN BOX toddler electric car well-packaged,it is a good choice to be served as boys or girls' birthday gifts or Christmas gifts. All Little Brown Box toys meet the standard of ASTM (American Society for Testing and Materials). If any reason you are not completely satisfied with this kids ride on car toys, please contact us for a replacement or full refund.
                    </p>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

// Product Description
// 
// 
// 
// 
// 
// Product Dimensions- 40.7 x 23.58 x 20 inches (103.4 x 59.9 x 50.8 cm)Item
// Weight-61 pounds (27.45 kg)
// Country of Origin-China
// Manufacturer recommended-age 0 - 3 years
// Batteries-1 12V batteries required. (included)
// Manufacturer-CHIZHOU KUAILEDA TOYS CO.,LTD
// Date First Available-2021-04-15 02:12:31
