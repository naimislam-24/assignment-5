import Logo from "../assets/logo-text.png";

export default function Nav() {
  return (
    <>
      <div className="sticky top-0 z-50 flex justify-between container mx-auto mt-8 bg-white">
        <img src={Logo} alt="Logo Img" />
        <ul className="flex gap-6 items-center">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-6">
          <button className="">Sign In</button>
          <button className="bg-[#D91B7E] py-2 px-6 rounded-2xl text-red-50">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
