import React from "react";

const About = () => {
  return (
    <div>
      <div className="mx-auto px-4 py-8 bg-black h-screen">
        <div>
          <h1 className=" flex text-white text-5xl font-bold justify-center">
            ABOUT
          </h1>
        </div>
        <div>
          <h2 className="flex text-white text-4xl ml-20 justify-center">
            THE COMPANY
          </h2>
        </div>
        <div className=" container flex flex-col3">
            <div>
                <div>
                    
                </div>
            </div>
            <div className="mt-6 text-gray-400 leading-relaxed space-y-4 w-[40rem] text-justify">
              <p className="text-white mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
                itaque ullam temporibus, voluptatum quos quia aliquam ratione
                est nihil, fugiat quo reprehenderit enim molestias expedita
                dolorum quisquam neque ab consequatur dolores soluta eveniet
                similique tenetur! Maxime esse suscipit incidunt. Repellat
                vitae, reiciendis dolore excepturi est incidunt facere autem
                nostrum, molestias officia ab. Cumque debitis quod incidunt qui
                eveniet nostrum. Id deleniti saepe, nobis, nam voluptatibus
                repellat, totam reiciendis error sapiente cupiditate sint
                accusamus. Ea cumque recusandae tempora illum velit repudiandae.
              </p>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                impedit aliquam saepe perspiciatis quia voluptatibus labore
                corporis atque fugit quo repellendus nostrum at rem dicta
                cupiditate obcaecati consequuntur dolorum nisi, eos voluptate
                possimus laborum quisquam nesciunt? At dolorum voluptatem
                commodi, iure magnam alias sequi doloribus dignissimos a error
                sunt ut aliquid nostrum repellat ratione, perferendis odit
                perspiciatis nemo porro corrupti quos! Libero vitae amet numquam
                accusamus molestias pariatur fuga. Aspernatur, ipsum qui quis
                delectus tenetur, molestias amet eveniet dicta harum eaque optio
                veniam, iure repudiandae illo nobis! Sed facere, tempora minima
                beatae facilis fugit consectetur ipsam reprehenderit cum
                voluptatem deserunt!
              </p>
            </div>

        </div>
      </div>
      <div className="mx-auto px-4 py-20 bg-white h-screen ">
        <div>
          <h1 className="text-8xl text-bold justify-center flex">
            <span className="font-bold">DESIGN</span>  <span className="font-light ml-3">APPROACH</span>
          </h1>
        </div>
        <div className="m-10 grid grid-cols-2 gap-4">
            <div className=" flex justify-">
                <h1 className="text-3xl font-bold">001</h1>
            </div>
            <div>
                <h1>002</h1>
            </div>

        </div>
      </div>
    </div>
  );
};

export default About;
