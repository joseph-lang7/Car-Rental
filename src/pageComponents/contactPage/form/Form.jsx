import Button from "./components/Button";
import Input from "./components/Input";

const Form = () => {
  return (
    <form className="flex flex-col gap-5 lg:flex-1">
      <Input content="Full Name" type="text" />
      <Input content="Email" type="Email" />
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="font-bold text-center">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          type="text"
          placeholder="Message"
          className="gap-2 bg-slate-200 p-3 rounded-md h-[300px] resize-none"
        />
      </div>
      <Button />
    </form>
  );
};

export default Form;
