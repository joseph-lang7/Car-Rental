import { LuMailOpen } from "react-icons/lu";

const Form = () => {
  return (
    <form className="flex flex-col gap-5 lg:flex-1">
      <div className="flex flex-col gap-1">
        <label htmlFor="fullName" className="font-bold text-center">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Full Name"
          className="gap-2 bg-slate-200 p-3 rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-bold text-center">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          placeholder="Email"
          className="gap-2 bg-slate-200 p-3 rounded-md"
        />
      </div>
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
      <button className="h-[65px] max-w-full text-white hover:shadow-lg hover:bg-[#de462f] transition-all flex gap-2 justify-center items-center duration-300 font-bold p-3 bg-[#FA4226] rounded-sm">
        <LuMailOpen />
        Send Message
      </button>
    </form>
  );
};

export default Form;
