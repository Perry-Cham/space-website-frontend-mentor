"use client"
import { Dispatch, SetStateAction, useState } from "react"

const data = [
    {
        "name": "Moon",
        "images": {
            "png": " /destination/image-moon.png",
            "webp": " /destination/image-moon.webp"
        },
        "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "distance": "384,400 km",
        "travel": "3 days"
    },
    {
        "name": "Mars",
        "images": {
            "png": " /destination/image-mars.png",
            "webp": " /destination/image-mars.webp"
        },
        "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        "distance": "225 mil. km",
        "travel": "9 months"
    },
    {
        "name": "Europa",
        "images": {
            "png": " /destination/image-europa.png",
            "webp": " /destination/image-europa.webp"
        },
        "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        "distance": "628 mil. km",
        "travel": "3 years"
    },
    {
        "name": "Titan",
        "images": {
            "png": " /destination/image-titan.png",
            "webp": " /destination/image-titan.webp"
        },
        "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        "distance": "1.6 bil. km",
        "travel": "7 years"
    }
]

export default function () {
    const [destination, setDestination] = useState("moon");

    const getImageSrc = (dest: string) => {
        const r = data.find(d => d.name.toLowerCase() === dest)
        console.log(r, r?.images.webp)
        return r?.images.webp.trim();
    }

    const foo = (dest: string) => {
        console.log(dest)
        setDestination(dest);
    }

    return <section className="p-[15vh] bg-[url('/destination/background-destination-desktop.jpg')] min-h-screen bg-cover">
        <h1 className="text-2xl font-bold uppercase mb-40">01. Pick your destination</h1>
        <div className="grid grid-cols-[2fr_1fr]">

            <div className="items-center">
                {data.map(d => (<img key={d.name} className={`${destination.toLowerCase() == d.name.toLowerCase() ? "block" : "hidden"}`} src={d.images.webp}/>))}
            </div>

            <div className="flex flex-col items-center">
                <Navigation currentDest={destination} changeDestination={foo} />
                {data.map((dest) => (<article key={dest.name} className={`${dest.name.toLowerCase() == destination.toLowerCase() ? "block" : "hidden"}`}>
                    <h2 className="text-8xl uppercase my-8">{dest.name}</h2>
                    <p>{dest.description}</p>
                    <hr className="my-6"></hr>
                    <div className="flex space-x-9 uppercase">
                        <div>
                            <p>Avg. Distance</p>
                            <p className="text-3xl mt-4">{dest.distance}</p>
                        </div>

                        <div>
                            <p>Est. Travel Time</p>
                            <p className="text-3xl mt-4">{dest.travel}</p>
                        </div>
                    </div>
                </article>))}
            </div>
        </div>
    </section>
}



function Navigation({changeDestination, currentDest}:{changeDestination: (arg: string) => void, currentDest: string}) {
    return <nav className="w-full py-4">
        <ul className="flex space-x-4 items-center uppercase">
            {data.map(dest => (<li key={dest.name} className={`cursor-pointer ${(currentDest.toLowerCase() === dest.name.toLowerCase()) && "border-white border-b-2"}`} onClick={() => {
                console.log(changeDestination);
                changeDestination(dest.name)
            }}>
                {dest.name}
            </li>))}
        </ul>
    </nav>
}