import PropTypes from "prop-types";
const Input = ({ content, type }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="fullName" className="font-bold text-center">
        {content} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        placeholder={content}
        className="gap-2 bg-slate-200 p-3 rounded-md"
      />
    </div>
  );
};
Input.propTypes = {
  content: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
