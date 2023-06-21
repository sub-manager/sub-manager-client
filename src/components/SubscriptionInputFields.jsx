import propTypes from "prop-types";

const SubscriptionInputField = (props) => {
  return (
    <input
          className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
          name={props.name}
          type={props.type}
          placeholder={props.placeHolder}
          onChange={props.onChange}
        />
  );
};

SubscriptionInputField.propTypes = {
  providerName: propTypes.string,
  type: propTypes.string,
  name: propTypes.string,
  placeHolder: propTypes.string,
  onChange: propTypes.func,
};
export default SubscriptionInputField;