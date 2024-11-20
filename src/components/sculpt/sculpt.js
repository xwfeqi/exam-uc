import man_1 from "./../../Images/image-from-rawpixel-id-6740096-png.png";
import man_2 from "./../../Images/image-from-rawpixel-id-6740096-png.png";
import man_3 from "./../../Images/image-from-rawpixel-id-6740096-png.png";
import man_4 from "./../../Images/image-from-rawpixel-id-6740096-png.png";
import man_5 from "./../../Images/image-from-rawpixel-id-6740096-png.png";


import "../sculpt/section.css"



const Sculpt = () => {
  return (
    <section>
      
      <div className="section_holder">
        <div className="width">
          <div className="smash_sale">
            <div className="year"></div>
          </div>

          <div className="mans_holder">
            <div className="mans">
              {[man_1, man_2, man_3, man_4, man_5].map((img, i) => (
                <div className="mns">
                  <a href="@">
                    <img
                      src={img}
                      alt=""
                      className="general_man"
                      style={{ "--man-height": `${300 + i * 30}px` }}
                    ></img>
                  </a>
                </div>
              ))}
              {[].map((img, i) => (
                <div className="mns">
                  <a href="@">
                    <img
                      src={img}
                      alt=""
                      className="general_man"
                      style={{ "--man-height": `${390 - i * 10}px` }}
                    ></img>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Sculpt;
