const Form: React.FC = () => {
  return (
    <div className="w-full h-full">
      <form
        className="bg-white p-5 w-full h-full text-xl flex flex-col items-center relative"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p className="font-semibold p-2">
          Before you go, please leave your contact details so we can get back to
          you...
        </p>
        <div className="flex flex-col w-full">
          <input
            className="m-2 p-2 border-2  border-transparent border-b-[#CFCFCF] focus:outline-none focus:border-b-black"
            type="text"
            placeholder="*Your Name"
          />
          <input
            className="m-2 p-2 border-2 border-transparent border-b-[#CFCFCF] focus:outline-none focus:border-b-black"
            type="email"
            placeholder="*Your E-mail"
          />
        </div>
        <div className="flex flex-row content-start mt-5 relative">
          <input className="absolute left-1 top-1" type="checkbox" />
          <p className="pl-5 text-sm text-[#70709E]">
            * [Sample legal text] The personal data you have provided will be
            processed by XXXXX for purposes of providing you the service. The
            legal basis of the processing is XXXXX. Your data will not be
            transferred nor assigned to third parties. You can exercise your
            right to access, rectify and delete your data, as well as the other
            rights granted by law by sending an email to XXXXX. For further
            information, please check our privacy policy XXXXX.
          </p>
        </div>

        <button
          className="bg-[#7D00FE] w-full md:w-3/4 p-4 rounded text-white absolute bottom-10"
          type="submit"
        >
          Submit your answer
        </button>
      </form>
    </div>
  );
};

export default Form;
