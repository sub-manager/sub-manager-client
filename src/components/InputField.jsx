import propTypes from "prop-types";

const InputField = (props) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm">
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeHolder}
        onChange={props.onChange}
        className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
      />
    </div>
  );
};

InputField.propTypes = {
  label: propTypes.string,
  type: propTypes.string,
  name: propTypes.string,
  placeHolder: propTypes.string,
  onChange: propTypes.func,
};
export default InputField;
