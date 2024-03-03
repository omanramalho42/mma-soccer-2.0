"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconVideo
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MeteorsCardEffect } from "@/components/native/meteor-card-effect";

export default function Page () {
  return (
    <BentoGrid className="max-w-4xl m-2 p-5 mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg] bg-white", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-symbol-team bg-no-repeat bg-contain border-2 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-symbol-team-tree bg-no-repeat bg-contain border-2 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-symbol-team-two bg-no-repeat bg-contain border-2 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 sm:scale-[1] scale-[1.2] w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2 bg-tooltip-card bg-contain bg-no-repeat"
      style={{
        // background:
        //   "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full bg-model-two sm:visible invisible bg-contain bg-no-repeat bg-center w-1/3 rounded-2xl bg-white p-4 dark:bg-black flex flex-col items-center text-center justify-center"
      >
        <Image
          src="https://github.com/omanramalho42.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full border-2 h-10 w-10"
        />
        {/* <p className="sm:text-sm text-xs w-[6rem] text-center font-semibold text-neutral-500 mt-4">
          Just code in Vanilla Javascript
        </p> */}
        <p className="border text-center w-1/3 border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs w-[6rem] rounded-full px-2 py-0.5 mt-4">
          Jogador
        </p>
      </motion.div>
      <motion.div className="h-full bg-model-one bg-contain bg-no-repeat sm:scale-[1] scale-[1.4] transition-all bg-center relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black  flex flex-col items-center justify-center">
        <Image
          src="https://github.com/omanramalho42.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full border-2 h-10 w-10"
        />
        <p className="sm:text-sm invisible text-xs w-[6rem] text-center font-semibold text-neutral-500 mt-4">
          Tailwind CSS is cool, you know
        </p>
        {/* <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs w-[6rem] rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p> */}
      </motion.div>
      <motion.div
        variants={second}
        className="h-full bg-model-two sm:visible invisible bg-contain bg-no-repeat bg-center w-1/3 rounded-2xl bg-white p-4 dark:bg-black  flex flex-col items-center justify-center"
      >
        <Image
          src="https://github.com/omanramalho42.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full border-2 h-10 w-10"
        />
        {/* <p className="sm:text-sm text-xs w-[6rem] text-center font-semibold text-neutral-500 mt-4">
          I love angular, RSC, and Redux.
        </p> */}
        <p className="border text-center w-1/3 border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs w-[6rem] rounded-full px-2 py-0.5 mt-4">
          jogador
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src="https://github.com/omanramalho42.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Últimas noticías</p>
        <div className="h-6 w-6 rounded-full bg-symbol-team bg-no-repeat bg-contain flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Noticias sobre o clube",
    description: (
      <span className="text-sm">
        Fique por dentro das noticias mais relevantes.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Lives ao vivo no nosso streaming",
    description: (
      <span className="text-sm">
        Transmitiremos jogos ao vivo através da nossa ferramenta de criação de lives
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconVideo className="h-5 w-5 p-1 bg-red-600 text-white rounded-full text-neutral-500" />,
  },
  {
    title: "Tabela de jogos",
    description: (
      <span className="text-sm">
        Tabela dos próximos eventos e jogos.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Gerenciamento de jogadores",
    description: (
      <span className="text-sm">
        Análise as habilidades de cada jogador.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Titulo do último post",
    description: (
      <span className="text-sm">
        Descrição breve do último post
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
