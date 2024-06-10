import React from "react";

const About = () => {
  return (
    <div>
      <div className="mx-40 px-4 py-10">
        
        <div>
          <h1 className=" flex text-white text-9xl font-bold justify-center">
            ABOUT
          </h1>
        </div>
        <div>
          <h2 className="flex text-white text-light text-8xl ml-40 justify-center">
            THE COMPANY
          </h2>
        </div>
        <div className="flex flex-col-2  gap-10 justify-center mt-10 mb-2">
          <div className="grid grid-cols-2 justify-end mt-10 mb-2 ml-32">
            <div className="border-4 border-white rounded-full h-10 w-10 flex items-center justify-center mx-4"></div>
            <div className="border-4 border-white rounded-full h-10 w-10 flex items-center justify-center"></div>
          </div>
          <div className="mt-6 text-gray-400 leading-relaxed space-y-4 w-[30rem] text-justify">
            <p className="text-white mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              itaque ullam temporibus, voluptatum quos quia aliquam ratione est
              nihil, fugiat quo reprehenderit enim molestias expedita dolorum
              quisquam neque ab consequatur dolores soluta eveniet similique
              tenetur! Maxime esse suscipit incidunt. Repellat vitae, reiciendis
              dolore excepturi est incidunt facere autem nostrum, molestias
              officia ab. Cumque debitis quod incidunt qui eveniet nostrum. Id
              deleniti saepe, nobis, nam voluptatibus repellat, totam reiciendis
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
              iure repudiandae illo nobis! Sed facere, tempora minima beatae.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white py-10 bg-opacity-90 ">
      <div className="flex justify-center my-9 text-9xl py-10"><span className="font-bold">DESIGN</span><span className=" font-light ml-4">APPROACH</span></div>
        <div className=" flex container w-3/4 mx-auto justify-center ">
          <div className="grid grid-cols-2 gap-32 w-[48rem] text-justify">
            <div>
              <h1 className="text-3xl font-bold">001</h1>
              <h1 className="text-4xl text-slate-500">INTENTIONAL</h1>
              <h1 className="text-4xl text-slate-500">RESEARCH</h1>
              <div className="flex gap-4 ml-4 mt-4">
                <div className="border-4 border-black h-6 w-6 rounded-full"></div>
                <div className="border-4 border-black h-6 w-6 rounded-full"></div>
              </div>
              <p className="text-black ml-4 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia dolorum totam inventore fugiat natus perferendis culpa
                quis accusamus facilis maxime quidem explicabo eveniet illo
                autem, fugit enim, incidunt cum, praesentium iusto eos? Adipisci
                reiciendis corrupti blanditiis voluptate error, eveniet beatae.
              </p>
            </div>
            <div >
            <div>
              <h1 className="text-black text-3xl font-bold">002</h1>
              <h1 className="text-blac text-4xl text-slate-500">DIGITAL</h1>
              <h1 className="text-4xl text-slate-500">SOLUTION</h1>
            </div>
              <div className="flex gap-4 ml-4 mt-4">
                <div className="border-4 border-black h-6 w-6 rounded-full"></div>
                <div className="border-4 border-black h-6 w-6 rounded-full"></div>
              </div>
              <p className="ml-4 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia dolorum totam inventore fugiat natus perferendis culpa
                quis accusamus facilis maxime quidem explicabo eveniet illo
                autem, fugit enim, incidunt cum, praesentium iusto eos? Adipisci
                reiciendis corrupti blanditiis voluptate error, eveniet beatae.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-7xl pt-40"> 
                <h3>Collaborate. Create. Innovate.</h3>
              </div>
              <div className="flex justify-center text-7xl text-slate-300 pb-40"> 
                <h3>Collaborate. Create. Innovate.</h3>
              </div>
      </div>
    </div>
  )
};

export default About;
