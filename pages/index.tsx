import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

import NoUserStoryLogo from "@/public/nouserstory.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>No User Story</title>
        <meta
          name="description"
          content="Building good products, not user stories."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/nouserstory.png" type="image/png" />
      </Head>
      <div className="px-4 flex justify-center items-center h-screen mx-auto bg-gray-200 text-center">
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={NoUserStoryLogo}
            alt="No User Story Logo"
            width={200}
            height={200}
            className="rounded-lg"
          />
          <div className="mt-8">Building good products, not user stories.</div>
          <div className="mt-4 flex gap-5">
            <Link
              href="https://newsletter.nouserstory.com/"
              className="text-red-600 hover:text-red-800 active:text-red-900"
            >
              Newsletter
            </Link>
            <Link
              href="https://anchor.fmno-user-story/"
              className="text-red-600 hover:text-red-800 active:text-red-900"
            >
              Podcast
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
