import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="flex h-20 w-full items-center bg-transparent px-6 sm:px-14 md:px-20">
      <div className="flex w-full flex-col items-center justify-between gap-8 py-8 text-center  md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
        <span>©2023 Muh. Irfan Arfah</span>
        <div className="flex gap-8">
          <a
            href="https://github.com/ippankbro"
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Github"
          >
            <GithubIcon className="text-teal-600 transition-colors duration-150 hover:text-tera-500 dark:text-teal-400 dark:hover:text-white" />
          </a>
          <a
            href="https://instagram.com/ippankbro"
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Instagram"
          >
            <InstagramIcon className="text-teal-600 transition-colors duration-150 hover:text-tera-500 dark:text-teal-400 dark:hover:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/m-irfan-arfah-9202a8234/"
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Linkedin"
          >
            <LinkedinIcon className="text-teal-600 transition-colors duration-150 hover:text-tera-500 dark:text-teal-400 dark:hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
