export default function Header({ number, text }: { number: string, text: string }) {
    return <h1 className="text-xl md:text-2xl font-bold uppercase max-sm:mb-6 font-barlowC tracking-[0.15em] text-center"><span className="pr-6 text-[rgb(255,255,255,0.5)]">{number}</span>{text}</h1>
}