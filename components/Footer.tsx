import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">@2024 EpicNextAnime</p>
      <Link 
      href='/'
      >
      </Link>

      <Image
        src="./logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <div className="flex items-center gap-6">
      <Link
      href="https://www.tiktok.com/en/"
      >
      </Link>

        <Image
          src="./tiktok.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
          
        />
        <Link
        href="https://www.instagram.com/"
        >
        </Link>
        <Image
          src="./instagram.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Link 
        href="https://twitter.com/?lang=en"
      
        >
        <Image
          src="./twitter.svg"
          alt="logo"
          width={19}
          height={19}
          
          className="object-contain"
          />
          </Link>
      </div>
    </footer>
  );
}

export default Footer;
