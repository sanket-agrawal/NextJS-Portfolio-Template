import { socials } from "@/data/data";
import { about } from "@/data/data";

export default function Profile() {
    return (
        <>
            <img
                src="https://i.imgur.com/zjGPTRC.jpeg"
                className="w-[70px] h-[70px] rounded-[50%] object-cover object-center"
                alt={`${about.name}'s profile`}
            />
            <div className="flex gap-[5px] items-center mt-1">
                <h1 className="text-2xl font-semibold">{about.name}</h1>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="currentColor"
                >
                    <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z" />
                </svg>
            </div>
            <div className="mt-1.5 flex items-center gap-1">
                <p className="text-base text-base-content/60">{about.role}</p>
                {/* <p className="underline cursor-pointer text-base-content/90">
                    Solo
                </p> */}
            </div>
            <div className="flex items-center mt-3 gap-3">
                <a href={socials.github} target="_blank" rel="noopener noreferrer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-github-icon lucide-github cursor-pointer"
                    >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                </a>

                <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-twitter-icon lucide-twitter cursor-pointer"
                    >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                </a>

                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="cursor-pointer"
    >
        <path d="M19 0h-14C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5zm-11 19H5v-9h3v9zm-1.5-10.268c-.966 0-1.75-.79-1.75-1.764S5.534 5.204 6.5 5.204s1.75.79 1.75 1.764-.784 1.764-1.75 1.764zM20 19h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2V19h-3v-9h3v1.278C13.346 10.112 14.627 9 16.5 9c2.21 0 3.5 1.79 3.5 4V19z"/>
    </svg>
</a>

                <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram-icon lucide-instagram cursor-pointer"
                    >
                        <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                </a>
                               <a href={socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="cursor-pointer"
  >
    <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9-2.9-.2-7.2-.2-7.2-.2s-4.3 0-7.2.2c-.5 0-1.4.1-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.9 1.6.1 7 .2 7 .2s4.3 0 7.2-.2c.5 0 1.4-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6c0-1.6-.2-3.2-.2-3.2zM10 15V9l5 3-5 3z"/>
  </svg>
</a>



                
            </div>
        </>
    );
}
