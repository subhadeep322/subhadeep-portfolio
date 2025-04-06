export const MobileMenu = ({menuOpen, setMenuOpen}) => {

return(
<div className={`fixed top-0 left-0 w-full bg-[rgba(12,11,11,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>

    <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-gray-300 text-3xl focus:outline-none cursor-pointer" aria-label="Close menu">
        &times;
    </button >

    <a className="flex flex-col text-xl font-semibold">
    <a href="#home" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "hover:opacity-80 translate-y-0" : "opacity-0 translate-y-5"}`}>Home</a>
    <a href="#projects" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "hover:opacity-80 translate-y-0" : "opacity-0 translate-y-5"}`}>Projects</a>
    <a href="#about" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "hover:opacity-80 translate-y-0" : "opacity-0 translate-y-5"}`}>About</a>
    <a href="#contact" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "hover:opacity-80 translate-y-0" : "opacity-0 translate-y-5"}`}>Contact</a>
    </a>

</div>

)

}