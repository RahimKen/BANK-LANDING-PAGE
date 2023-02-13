import Article from "./sub-components/Article";
import currency from '../assets/image-currency.jpg';
import resto from "../assets/image-restaurant.jpg";
import plane from "../assets/image-plane.jpg";
import confetti from "../assets/image-confetti.jpg";

const data = [
  {
    image : currency ,
    author : "By Clair Robinson",
    title: "Receive money in any currency with no fees" ,
    description : "The world is getting smaller and we're becoming more mobile. so why should you be forced to only receive money in a single..."
  },
  {
    image : resto ,
    author : "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description : "Our simple Budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ..."
  },
  {
    image : plane ,
    author : "By Wilson Hutton",
    title: "Take you Easybank card whereever you go",
    description : "We want you to enjoy your travels. this is why we don't charge any fees on purchases while you're abroad. We'll even show you ..."
  },
  {
    image : confetti ,
    author : "By Clair Robinson",
    title: "Our invite-only Beta accounts are now live!",
    description : "After a lot of hard work by the whole team, We're excited to launch our closed beta, it's easy to request an invite through the site ..."
  },
]

const Articles = () => {
  return (
    <div className="bg-very-light-gray w-full">
      <div className="container mx-auto p-16 flex flex-col">
        <div className="mb-6">
           <h2 className="text-3xl text-center md:text-left md:text-4xl font-semibold text-dark-blue p-4">
             Latest Articles
           </h2>
        </div>

        <div className="w-full flex-wrap flex flex-col md:flex-row items-center justify-between mx-auto ">

           {data.map((element) => <Article key={element.title} data={{...element}}/>)}

        </div>
      </div>
    </div>
  )
}

export default Articles