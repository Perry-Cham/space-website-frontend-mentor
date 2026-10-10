"use client"
import { useState } from "react"
const data = [
    {
        "name": "Launch vehicle",
        "images": {
            "portrait": " /technology/image-launch-vehicle-portrait.jpg",
            "landscape": " /technology/image-launch-vehicle-landscape.jpg"
        },
        "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
        "name": "Spaceport",
        "images": {
            "portrait": " /technology/image-spaceport-portrait.jpg",
            "landscape": " /technology/image-spaceport-landscape.jpg"
        },
        "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
        "name": "Space capsule",
        "images": {
            "portrait": " /technology/image-space-capsule-portrait.jpg",
            "landscape": " /technology/image-space-capsule-landscape.jpg"
        },
        "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
]

export default function () {
    const [stage, setStage] = useState("Launch Vehicle")
    return <section className="py-[15vh] md:pl-[15vh] min-h-screen bg-cover bg-[url('/technology/background-technology-desktop.jpg')]">
        <h1 className="heading max-sm:text-center">03. Space Launch 101</h1>

        <div className="flex flex-col md:grid md:grid-cols-[1fr_3fr_4fr] gap-8 min-h-[55vh] md:[grid-template-areas:'nav_main_img']">

            <div className="[grid-area:img]">
                <img className="max-sm:w-full md:h-full" src={data.find(i => i.name.toLowerCase() === stage.toLowerCase())?.images.landscape.trim()} />
            </div>

            <nav className="flex flex-col justify-center [grid-area:nav]">
                <ul className="flex md:flex-col justify-center md:space-y-4 space-x-4">
                    <li onClick={() => setStage("launch vehicle")} className={`nav-btn ${stage.toLowerCase() == "launch vehicle" && "bg-white text-black font-bold"}`}>1</li>
                    <li onClick={() => setStage("spaceport")} className={`nav-btn ${stage.toLowerCase() == "spaceport" && "bg-white text-black font-bold"}`}>2</li>
                    <li onClick={() => setStage("space capsule")} className={`nav-btn ${stage.toLowerCase() == "space capsule" && "bg-white text-black font-bold"}`}>3</li>
                </ul>
            </nav>



            <div className="flex flex-col justify-center [[grid-area:main] max-sm:text-center">
                <h2 className="text-xl md:text-3xl uppercase">The Terminology</h2>
                {data.map(d => (<article className={`${stage.toLowerCase() === d.name.toLowerCase() ? "grid" : "hidden"}`}>
                    <div >
                        <h3 className="text-2xl md:text-4xl uppercase my-4">{d.name}</h3>
                        <p className="px-8">{d.description}</p>
                    </div>
                </article>))}
            </div>



        </div>
    </section>
}