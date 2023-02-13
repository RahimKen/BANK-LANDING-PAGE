import Feature from "./sub-components/Feature"
import iconOnline from "../assets/icon-online.svg"
import iconBudgeting from "../assets/icon-budgeting.svg"
import iconOnBoarding from "../assets/icon-onboarding.svg"
import iconApi from "../assets/icon-api.svg"

const data = [
  {
    icon : iconOnline ,
    title : "Online Banking",
    description : "Our modern web and mobile applicationsallow you to keep track of your finances wherever you are in the world"
  },
  {
    icon : iconBudgeting ,
    title : "Simple Budgeting",
    description : "See exatly where your money goes each month. Receive notifiations when you are close to hitting your limits."
  },
  {
    icon : iconOnBoarding ,
    title : "Fast Onbroading",
    description : "We don't do branches. Open your accounts in minutes online and start taking control of your finances right away."
  },
  {
    icon : iconApi ,
    title : "Open Api",
    description : "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier. "
  }
]
const Features = () => {
  return (
    <div className="bg-light-gray w-full">
      <div className="container mx-auto p-16 flex flex-col">
        <div className="mb-6">
           <h2 className="text-4xl text-center md:text-left md:text-4xl font-semibold text-dark-blue p-4">
             Why Choose EasyBank ?
           </h2>

           <p className="text-grayish-blue md:text-left p-2 text-center">
             We leverage Open Banking to turn your bank account into your financial hub. <br/>
             Control your finances like never before.
           </p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center  justify-between ">

           {data.map((element) => <Feature key={element.title} data={{...element}}/>)}

        </div>
      </div>
    </div>
  )
}

export default Features