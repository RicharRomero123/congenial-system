const formClasses =
  "form-control w-full px-3 py-1.5 text-gray-700 rounded border border-solid border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-pink-600 focus:outline-none";

export const FormElement = ({}: // type,
// label,
// placeholder,
// fieldRef,
// hasError,
{}) => {
  return (
    <div className="form-group mb-6">
      {/* <label className="block mb-2 text-sm font-bold text-gray-700">
        {" "}
        {label}{" "}
      </label>
      {type === "textarea" ? (
        <textarea
          className={formClasses}
          rows={5}
          placeholder={placeholder}
          {...fieldRef}
        />
      ) : (
        <input
          className={formClasses}
          type={type}
          placeholder={placeholder}
          {...fieldRef}
        />
      )}
      {hasError && (
        <p className="text-red-500 text-xs italic">{`${label} is required`}</p>
      )} */}
    </div>
  );
};
