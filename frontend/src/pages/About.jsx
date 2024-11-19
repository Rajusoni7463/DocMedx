import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          AbOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, neque.
            Autem ipsum labore maiores dolor tenetur, vel repellendus error
            consectetur sequi illo eligendi ex dolores, quo incidunt cum
            voluptates vero?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            placeat autem veniam, delectus nihil rem earum magni, quae maiores
            quo consectetur ab veritatis voluptas dicta iure laudantium cum a
            incidunt.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            autem ipsum obcaecati aspernatur officiis laboriosam itaque sed
            unde, fugiat id eos similique optio et repellat ducimus ab eum iste
            voluptates?
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            perferendis alias commodi delectus, officia molestias dignissimos
            aperiam. Dolorum nostrum maxime alias aliquam! Quasi doloremque
            delectus minus natus deserunt totam. Maxime!
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
