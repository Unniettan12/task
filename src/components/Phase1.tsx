interface props {
  setPhase: React.Dispatch<React.SetStateAction<Number>>;
}

const Phase1: React.FC<props> = ({ setPhase }) => {
  return (
    <div className="flex flex-cols w-full">
      <div className="flex flex-rows relative">
        <div className="md:w-1/2">
          <video
            className="min-h-screen max-w-full md:w-full object-cover"
            controls
            height="screen"
            width="100%"
          >
            <source src="https://media.videoask.com/transcoded/dabd0292-cf99-40ba-a12a-245a279b31dc/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6ImRhYmQwMjkyLWNmOTktNDBiYS1hMTJhLTI0NWEyNzliMzFkYyIsImV4cCI6MTY2MDI3NDk4M30.r8J0NyQiQLA71N-p_0WFx_f45w1QYNjdQKtmTgSK6-XHtVUJbz0hC4_hOl3EQFGMxcNVTadUeDSGhPeJs1nkVLAB6YOC69RxNqIQ3AQlih-5ogkOJ7nxcAKN3VWoGJw9e69JGLvcKskWCz9RtHsXQKswE70q1gSoQMJITvRG5RhM1lfd4E7tlYZkXU_Y0VtJJ7un8J3F1IbYCnHa1wrIFw-QAch9zOqt6GoScuvM6xF9pUdq7ZXey0hdESEnyLDeKKoIyZWccSYjpBcbqyu6YWOl-IT67CKwbEbU4lDjCh9euMkVSbSIrWbcvE1mx_BdKntIdqCW8yqM9s42U8DcE2yT7hcO4iNsWAN1yftigGB90s9wqHJ0re2NgkekDlSX-ubicCBpJacIQNHHAYRdfaWYs9txR_aH3UsgmiI3Jj6_8XD7LrDJvBYNdKa7aZygz7x4uCihisevBNGZgz2SgbvX0lXe5Tx2Fe6L8lQ-jmM6unrLFSWl4HoT9NQMfh3khK02GQNVrUy6KhL7-0WR0TTwzuuAnZWJp2XY0Z2AbGRXRg4c2Wr2xHQnbWg2HrgSDworE1xoePftCAQWNpXhMXNTJS4SVqPsvdO6uZcBsNHEG3ECpvvAAhOph3Jp9V9EJVx6kEkHkAXCB2SAF_165cdXiKySoOi0YPg2MwQ6gZ4" />
          </video>
        </div>
        <div className="absolute bottom-10 left-1/4 right-1/4 md:bottom-auto md:left-auto md:right-auto md:relative md:w-1/2 flex justify-center items-center flex-col">
          <button
            className="whitespace-nowrap w-full md:w-[17rem] lg:w-[20rem] bg-black/50 md:bg-[#E7E7E7] border border-transparent hover:border-[#7D00FE] rounded-full px-5 flex flex-row py-2 m-5"
            onClick={() => {
              setPhase(2);
            }}
          >
            <div className="flex bg-[#7D00FE] text-white rounded-full w-[1.5rem] px-3 py-1 justify-center items-center">
              A
            </div>
            <div className="px-2 text-white md:text-black ">
              Campaign structure
            </div>
          </button>
          <button
            className="w-full md:w-[17rem] lg:w-[20rem] bg-black/50 md:bg-[#E7E7E7] border border-transparent hover:border-[#7D00FE] rounded-full px-5 flex flex-row py-2 m-5"
            onClick={() => {
              setPhase(3);
            }}
          >
            <div className="flex bg-[#7D00FE] text-white rounded-full w-[1.5rem] px-3 py-1 justify-center items-center">
              B
            </div>

            <div className="px-2 text-white md:text-black">
              Learn Facebook basics
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Phase1;
