import propTypes from "prop-types";
const FormButton = (props) => {
  return (
    <button className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
      {props.text}
    </button>
  );
};

FormButton.propTypes = {
  text: propTypes.string,
};

export default FormButton;
