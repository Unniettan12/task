import Form from "./Form";
import { useState } from "react";

const Phase3: React.FC = () => {
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
            <source src="https://media.videoask.com/transcoded/e8762b7e-7699-495d-a72c-24ea32902eea/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6ImU4NzYyYjdlLTc2OTktNDk1ZC1hNzJjLTI0ZWEzMjkwMmVlYSIsImV4cCI6MTY2MDI4OTg0OH0.YLhQxpUOFmgUfFkg07LIdKLgGRkxeBATOAXfEWh7_Mh2CYfkZ39Cg5EExfX4bokAEx_IxGfDBGJDuOGuTCs6TL2YbiiNBSpv9ipsQN2WqRwsaKj8jVZagfS-VD7RfFy9Xj0vbzbwgmJ1tgHtipldy0rERDX4qzEAH0NN50wnoc1-NNY6IoJx43IReKBCYhxX_WWaeXD4ueWH-wXFq27d9mfS1VgEbZsjJRvtg46WZ8yASWLP4aU8gQrI0lAeDGuIfe8BuvJgNgUGmkZQMliWgazOVq40MBFjxK-NCqR9iwomkRiE1xwBJHtrA2YE9d_hS0StWi3xQjQ00J_4CqAlA34_N3_3Qiu42CI3BYQcwdbBIc7mAKVKN3BbGeLTH3VGgv_lX0_KqnVk7w1BUN039ZL4hW6BKazIkzx012LojkcWxfdZP0T9wB43TfHXcLxOtRF0Ovl-Tuxy2vUOPjxUQxic0iCobi2hIYoJJqZer1qLqysBnIxUENp7Ns1kj-3BP1CwzoNQL1Rwyqph_PuuWWwxt021iW8F_g7Bxnb5twVNW7tRY9YF8jkr_BlhFGg9kXJzqsmhTxZhWzExxZX4V-NhIbXeSVMayY2YVDetoDCEcRFK0wT8yxb02tCXyRHZ9U0vwqaVnhFjdJB71TkSnwBn4En050s1uJBhWeTcdeE" />
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
              Sign up for free webinar
            </button>
          ) : (
            <Form />
          )}
        </div>
      </div>
    </div>
  );
};

export default Phase3;
