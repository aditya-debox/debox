import { motion } from "framer-motion";


const logos = ["kalki.png", "cai.png", "schbang.png", "nipo.png", "payworld.png"];

export default function Partners(){
    return (
        <section className= "grid grid-cols-3 sm:grid-cols-5 gap-6 p-6 max-w-5xl ">
            {logos.map((logo, i) =>(
                <img key={i} src="" alt="partner logo" className="w-full h-12 object-contain" />
            ))}
        </section>
    )
}