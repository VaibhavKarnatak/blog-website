import { Button } from "flowbite-react";
/*vdo 8.16.05*/ 
export default function CallToAction() {
    return (
        <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
            <div className="flex-1 justify-center flex felx-col">
                <h2 className="text-2xl ">
                    okkk!
                </h2>
                <p className="text-gray-500 my-2">
                    Hey y0u!!
                </p>
                <Button gradientDuoTone="purpleToPink" className="rounded-tl-xl rounded-bl-none">
                    <a href="http://www.100jsprojects.com" target="_blank" rel="noopener noreferrer">
                        100 JavaScript Projects
                    </a>
                </Button>
            </div>
            <div className="p-7 flex-1">
                <img 
                    src="https://th.bing.com/th/id/OIP.2sabDttFn_g-VBO06aotggHaHa?w=600&h=600&rs=1&pid=ImgDetMain" 
                    alt="100 JavaScript Projects" 
                    className="max-w-full h-auto"
                />
            </div>
        </div>
    );
}
