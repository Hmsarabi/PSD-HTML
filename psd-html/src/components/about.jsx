import React from "react";

const About = () => {
  return (
    <div>
      <div className="mx-auto px-4 py-8 h-screen">
        <div>
          <h1 className=" flex text-white text-8xl font-bold justify-center">
            ABOUT
          </h1>
        </div>
        <div>
          <h2 className="flex text-white text-light text-7xl ml-40 justify-center">
            THE COMPANY
          </h2>
        </div>
        <div className="flex flex-col-2  gap-20 justify-center mt-4 mb-2 ml-2">
          <div className="flex flex-col-2 justify-end mt-20 mb-2 ml-2">
            <div className="border-4 border-white rounded-full h-10 w-10 flex items-center justify-center mx-10"></div>
            <div className="border-4 border-white rounded-full h-10 w-10 flex items-center justify-center"></div>
          </div>
          <div className="mt-6 text-gray-400 leading-relaxed space-y-4 w-[40rem] text-justify">
            <p className="text-white mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              itaque ullam temporibus, voluptatum quos quia aliquam ratione est
              nihil, fugiat quo reprehenderit enim molestias expedita dolorum
              quisquam neque ab consequatur dolores soluta eveniet similique
              tenetur! Maxime esse suscipit incidunt. Repellat vitae, reiciendis
              dolore excepturi est incidunt facere autem nostrum, molestias
              officia ab. Cumque debitis quod incidunt qui eveniet nostrum. Id
              deleniti saepe, nobis, nam voluptatibus repellat, totam reiciendis
              error sapiente cupiditate sint accusamus. Ea cumque recusandae
              tempora illum velit repudiandae.
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              impedit aliquam saepe perspiciatis quia voluptatibus labore
              corporis atque fugit quo repellendus nostrum at rem dicta
              cupiditate obcaecati consequuntur dolorum nisi, eos voluptate
              possimus laborum quisquam nesciunt? At dolorum voluptatem commodi,
              iure magnam alias sequi doloribus dignissimos a error sunt ut
              aliquid nostrum repellat ratione, perferendis odit perspiciatis
              nemo porro corrupti quos! Libero vitae amet numquam accusamus
              molestias pariatur fuga. Aspernatur, ipsum qui quis delectus
              tenetur, molestias amet eveniet dicta harum eaque optio veniam,
              iure repudiandae illo nobis! Sed facere, tempora minima beatae
              facilis fugit consectetur ipsam reprehenderit cum voluptatem
              deserunt!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;