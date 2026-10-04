"use client"
import { useState } from "react"

interface CrewMember {
    id?: number,
    name: string,
    images: Record<string, string>
    role: string,
    bio: string,
}
let data: CrewMember[] = [
    {
        "name": "Douglas Hurley",
        "images": {
            "png": " /crew/image-douglas-hurley.png",
            "webp": " /crew/image-douglas-hurley.webp"
        },
        "role": "Commander",
        "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
        "name": "Mark Shuttleworth",
        "images": {
            "png": " /crew/image-mark-shuttleworth.png",
            "webp": " /crew/image-mark-shuttleworth.webp"
        },
        "role": "Mission Specialist",
        "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
        "name": "Victor Glover",
        "images": {
            "png": " /crew/image-victor-glover.png",
            "webp": " /crew/image-victor-glover.webp"
        },
        "role": "Pilot",
        "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
        "name": "Anousheh Ansari",
        "images": {
            "png": " /crew/image-anousheh-ansari.png",
            "webp": " /crew/image-anousheh-ansari.webp"
        },
        "role": "Flight Engineer",
        "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
]
//data = data.map((d,i) => d.id = i)

export default function () {
    const [member, setMember] = useState("Douglas Hurley")
    return <section className="p-[15vh] bg-[url('/crew/background-crew-desktop.jpg')] bg-cover min-h-screen">
        <h1 className="heading"><span>02</span> Meet The Crew</h1>
        <div className="grid grid-cols-[1fr_2fr]">
            <div className="flex justify-between flex-col">
                {data.map(d => (<article className={`${member.toLowerCase() == d.name.toLowerCase() ? "block" : "hidden"}`}>
                    <h3 className="text-xl uppercase">{d.role}</h3>
                    <h4 className="text-4xl uppercase my-4">{d.name}</h4>
                    <p className="">{d.bio}</p>
                </article>))}

                <nav>
                    <ul className="w-3xs flex justify-center items-center space-x-6 ">
                        <li onClick={() => setMember("Douglas Hurley")} className="crew-btn"></li>
                        <li onClick={() => setMember("Mark Shuttleworth")} className="crew-btn"></li>
                        <li onClick={() => setMember("Victor Glover")} className="crew-btn"></li>
                        <li onClick={() => setMember("Anousheh Ansari")} className="crew-btn"></li>
                    </ul>
                </nav>
            </div>

            <div>
                <div className="">
                    {data.map(d => (<img key={d.name} className={`h-[550px] ml-20 ${member.toLowerCase() == d.name.toLowerCase() ? "block" : "hidden"}`} src={d.images.webp.trim()} />))}
                </div>
            </div>

        </div>
    </section>
}