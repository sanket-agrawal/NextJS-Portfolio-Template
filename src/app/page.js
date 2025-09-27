import ProjectsList from "./components/ProjectsList";
import TechLists from "./components/TechLists";
import About from "./components/About";
import Profile from "./components/Profile";
import Experience from "./components/Experience";

export const metadata = {
  title: "Sanket Agrawal - Software Developer",
  description: "Minimalist portfolio showcasing projects, experience, and technologies.",
  keywords: ["Sanket Agrawal", "Software Developer", "Portfolio", "Next.js", "AWS"],
  openGraph: {
    title: "Sanket Agrawal - Software Developer",
    description: "Check out my minimalist portfolio with projects & experience.",
    url: "https://sanketagrawal.com",
    siteName: "Sanket Agrawal",
    images: [
      {
        url: "https://sanketagrawal.com/profileimg.jpg", // replace with your image
        width: 1200,
        height: 630,
        alt: "Sanket Agrawal",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanket Agrawal - Software Developer",
    description: "Minimalist portfolio showcasing projects and experience.",
    images: ["https://sanketagrawal.com/profileimg.jpg"],
  },
};

export default function Home() {
    return (
        <>
            <div>
                <main className="mt-5 p-4">
                    <Profile />
                    <About />
                    <ProjectsList />
                    <TechLists />
                    <Experience />
                </main>
            </div>
        </>
    );
}
