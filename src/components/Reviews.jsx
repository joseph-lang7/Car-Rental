import Container from "./Container";
import { FaQuoteRight } from "react-icons/fa";
import profilePic1 from "/profilePictures/profile1.jpg";
import profilePic2 from "/profilePictures/profile2.jpg";
const Reviews = () => {
  return (
    <Container>
      {/* Container */}
      <div className="flex justify-center">
        <div className="max-w-[1500px]">
          {/* Text Container */}
          <div className="flex flex-col text-center gap-2 mb-5">
            <h3 className="font-bold text-2xl">
              Don&apos;t Take Our Word For It!
            </h3>
            <h2 className="font-bold text-4xl text-center">
              Client&apos;s Testimonials
            </h2>
            <p className="text-slate-500">
              Uncover the uplifting difference we&apos;ve made in our
              clients&apos; lives through their heartfelt testimonials.
              They&apos;ve not only experienced our top-notch service and
              outstanding results but are also excited to share their glowing
              experiences with you. Dive in now and see why you should join our
              satisfied clientele on the website!
            </p>
          </div>
          {/* Reviews Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Review 1 */}
            <div className="bg-slate-100 p-5 flex flex-col gap-4 text-center">
              <p>
                &quot;We rented a car from this website and had an amazing
                experience! The booking was easy and the rental rates were very
                affordable.&quot;
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <img
                    className="w-[90px] h-[90px] rounded-full"
                    src={profilePic1}
                    alt="Customer profile picture"
                  />
                </div>
                <div>
                  <p>John Doe</p>
                  <p className="italic">San Francisco, CA</p>
                </div>
                <FaQuoteRight size={40} className="text-[#FA4226]" />
              </div>
            </div>
            {/* Review 2 */}
            <div className="bg-slate-100 p-5 flex flex-col gap-4 text-center">
              <p>
                &quot;The car was in awesome shape and really added to our trip.
                I definitely recommend this car rental website!&quot;
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <img
                    className="w-[90px] h-[90px] rounded-full"
                    src={profilePic2}
                    alt="Customer profile picture"
                  />
                </div>
                <div>
                  <p>Olivia Johnson</p>
                  <p className="italic">Sacramento, CA</p>
                </div>
                <FaQuoteRight size={40} className="text-[#FA4226]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Reviews;
