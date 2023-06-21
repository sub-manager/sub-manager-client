import { RiEditBoxFill } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";
import propTypes from "prop-types";
const Subscription = (props) => {
  return (
    <>
      <div className="w-full h-20 bg-[#f9f7f3]">
        <div className="grid grid-cols-6 p-4">
          <div>
            <div className="w-20 h-32 rounded-md">
              <img
                src="https://variety.com/wp-content/uploads/2019/02/netflix-logo-originals.jpg?w=640"
                className="w- h-15 rounded-lg"
              />
            </div>
          </div>
          <div className="font mt-3 text-center">
            <h1>{props.provider}</h1>
          </div>
          <div className="font content text-center">
            <h1>Renews</h1>
            <h1>{props.date}</h1>
          </div>
          <div className="font mt-3 text-center">
            <h1>{props.cycle}</h1>
          </div>
          <div className="font content text-center">
            <h1>Price</h1>
            <h1>{props.price} </h1>
          </div>
          <div className="font mt-3 text-center">
            <div className="flex gap-4">
              <div>
                <button>
                  <RiEditBoxFill size={"30"} color="#5e9ba1" />
                </button>
              </div>
              <div>
                <button>
                  <TiDelete size={"30"} color="#ef4444" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Subscription.propTypes = {
  provider: propTypes.string,
  date: propTypes.string,
  cycle: propTypes.string,
  price: propTypes.string,
};
export default Subscription;
