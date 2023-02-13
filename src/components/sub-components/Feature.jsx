

const Feature = ({data}) => {
  return (
    <div className="m-4 p-6 flex flex-col space-around space-y-6 shadow-md rounded-sm ">
       <div className="w-14 mx-auto">
          <img src={data.icon} alt="logo" />
       </div>
       <div className="mx-auto">
          <h2 className="text-xl text-center font-semibold text-dark-blue ">
          {data.title}
          </h2>
       </div>
       <div className="mx-auto">
          <p className="text-sm text-center text-grayish-blue">
            {data.description}
          </p>
       </div>
    </div>
  )
}

export default Feature