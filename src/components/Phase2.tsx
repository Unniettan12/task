import { useState } from "react";
import Form from "./Form";

const Phase2: React.FC = () => {
  const [tab, setTab] = useState<String>("Button");

  const bgcolor =
    tab === "Button"
      ? "absolute bottom-10 left-1/4 right-1/4 md:bottom-auto md:left-auto md:right-auto md:relative md:w-1/2 flex justify-center items-center flex-col"
      : "absolute bottom-0 top-0 left-0 right-0 md:bottom-auto md:top-auto md:left-auto md:right-auto md:relative md:w-1/2 flex justify-center items-center flex-col";

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
            <source src="https://media.videoask.com/transcoded/435ae671-33f0-45a4-b958-62402c2b6133/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6IjQzNWFlNjcxLTMzZjAtNDVhNC1iOTU4LTYyNDAyYzJiNjEzMyIsImV4cCI6MTY2MDI4OTg0OH0.yVSV7G8yHNBQ4_zt-Dl5rrOlyVQ67E1kFVupRy9y7OI1U-rdpK7Gr-8UYqymLBUgUWW-2O5Gf1URxkELismj_3g4npfKq8Lp9p1OuLguu-AmxSM8nQRFwNSRiXXq4A6NNogoe5dlanO0Ob6Yz7SGKg0ttKiJTpI2vn-UJ7Ru882TPQi51ELD167GmNyej7n4ASSZWAX4YrWu9xLm3D8gg4FIjQwGPOqbBCe_Eipy996JHfGhPVBTS1-dxy7qxFeHnYMK_k1A8Zd5joa7-uAA_xSjTEasNQwvRxcKswNCHOHH_iR5tEwYLhgJXw71Lx2UQgiNmBDkWD7Zf2RCthy0FCj5M8vboiTdYEdAxPZQMq5uvHFudDjfGhCE5qZ31WlR8SSu625y7f97lT0PzWUDMXuRKStSPSqr8hEZ1PrTXdc457CxbSJhcYWVBhrtGtnonNJ8DhHZjsNAyII2W2nvIObhIVi5uhGrNBm4Iunu66P83qtoTRSzcWWazMSJzlZzW7KODUikLK5-6RvQKUea-9p4yektvfZFWX2iCuQe0PCGFx3FnjvrF8gToTnvzY5n_u5nBOnKwiiq7ARq5DLp2dWk9tkjmF-b961bKJuotyMLbI_roHBXeQIKjJADv8H6U46vXqJr4UnlVfKYrq7aLfd8Ww3_UO7tsySvIRWalnQ" />
          </video>
        </div>
        <div className={bgcolor}>
          {tab === "Button" ? (
            <button
              className="w-full md:w-[17rem] lg:w-[20rem] bg-[#7D00FE] text-white flex justify-center items-center border border-transparent hover:border-[#7D00FE] rounded-lg px-5 flex flex-row py-2 m-5"
              onClick={() => {
                setTab("Form");
              }}
            >
              Download "Campaign Structure Guide"
            </button>
          ) : (
            <Form />
          )}
        </div>
      </div>
    </div>
  );
};

export default Phase2;
