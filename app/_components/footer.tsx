import { Github, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div className="mt-20 p-10 bg-slate-500 w-full self-end">
      <div className="flex justify-around items-center">
        <Instagram size={30} />
        <Github size={30} />
        <Youtube size={30} />
      </div>
    </div>
  );
};

export default Footer;
