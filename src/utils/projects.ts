import { link } from "fs";

export const projects = [
  {
    title: "Shopping Cart",
    description:
      "The shopping cart is being built with React, Next.js, TailwindCSS, Typescript, PostgreSQL, and Prisma, and it is deployed in Vercel.",
    images: ["shoppingcart.png", ""],
    link: "https://shopping-cart-mcgc.vercel.app/",
  },
  {
    title: "Mexico 68",
    description:
      "I helped to build the REST API, which was made with Laravel Framework and a MySQL database, and it was deployed in EC2 from AWS.",
    images: ["m68.png", ""],
    link: "https://m68.mx/",
  },
  {
    title: "",
    description: `I made this redesign with, the site is from a company whose name is fonyou, it send products from Telcel, which is an important company in Mexico,
     In this company i used technologies like React, Next.js, javascript and TailwindCSS. We use Gitlab, jenkins, docker, jubernetes and GCP for the CI/CD`,
    images: ["telcel.jpg", ""],
    link: "/",
  },

  {
    title: "Tasks",
    description: `
Task manager, connected to a RESTFULL API that I created, deployed in vercel as well, 
Front developed with Nextjs and the API with Node JS, it is a monolithic API, layered architecture, patterns to highlight are singleton, dependency injection and facade.`,
    images: ["tasks.png", ""],
    link: "https://todo-list-tasks.vercel.app/",
  },
];
