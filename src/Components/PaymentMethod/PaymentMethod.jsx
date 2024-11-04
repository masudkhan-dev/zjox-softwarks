import Marquee from "react-fast-marquee";
import pm1 from "../../../public/assets/payment-method-1.png";
import pm2 from "../../../public/assets/payment-method-2.png";
import pm3 from "../../../public/assets/payment-method-3.png";
import pm4 from "../../../public/assets/payment-method-4.png";
import pm5 from "../../../public/assets/payment-method-5.png";
import pm6 from "../../../public/assets/payment-method-3.png";
import pm7 from "../../../public/assets/payment-method-4.png";
import pm8 from "../../../public/assets/payment-method-2.png";

const PaymentMethod = () => {
  return (
    <div className="-mt-8 z-30 relative">
      <div className="container mx-auto px-3 lg:px-0 -mt-8 ">
        <div className="bg-white shadow-lg px-3 rounded-lg">
          <Marquee>
            <div className="flex items-center gap-x-8  px-2 py-4">
              {[pm1, pm2, pm3, pm4, pm5, pm6, pm7, pm8].map((payment, index) => (
                <figure key={index} className="w-full">
                  <img
                    src={payment}
                    alt={`payment method ${index + 1}`}
                    className="w-20 md:w-40 h-auto" 
                  />
                </figure>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
