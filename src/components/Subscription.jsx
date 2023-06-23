import { RiEditBoxFill } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";
import propTypes from "prop-types";
const Subscription = (props) => {
  return (
    <>
    {console.log(props)}
      <div className="w-full h-20 bg-[#f9f7f3]">
        <div className="grid grid-cols-6 p-4">
          <div>
            <div className="w-20  rounded-md">
              <img
                src="./images/sub.png"
                className="w-10 h-10 rounded-lg"
              />
            </div>
          </div>
          <div className="font mt-3 text-center">
            <h1>{props.provider}</h1>
          </div>
          <div className="font content text-center">
            <h1>{props.date}</h1>
          </div>
          <div className="font mt-3 text-center">
            <h1>{props.cycle}</h1>
          </div>
          <div className="font content text-center">
            <h1>value</h1>
            <h1>{props.value} $</h1>
          </div>
          <div className="font mt-3 text-center">
            <div className="flex gap-4">
              <div>
                <button onClick={props.updateForm}>
                  <RiEditBoxFill size={"30"} color="#5e9ba1" />
                </button>
              </div>
              <div>
                <button onClick={props.deleteSub}>
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
  value: propTypes.string,
  updateForm: propTypes.func,
  deleteSub: propTypes.func,
};
export default Subscription;
