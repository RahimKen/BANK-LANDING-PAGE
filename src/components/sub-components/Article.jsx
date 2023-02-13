

const Article = ({data}) => {
  return (
    <div className="m-4 flex flex-col  space-around rounded-lg bg-white w-[250px] max-h-[374px]">
      <div className="  w-full">
        <img src={data.image} className="rounded-t-lg  max-h-[167px] w-full" />
      </div>
      
      <div>
        <p className="text-grayish-blue font-light text-xs p-2">
          {data.author}
        </p>
      </div>
      <div>
        <h2 className="text-dark-blue font-semibold text-lg p-2 hover:text-blue-cyan duration-300 cursor-pointer">
          {data.title}
        </h2>
      </div>
      <div>
        <p className="text-sm text-grayish-blue p-3">
          {data.description}
        </p>
      </div>
    </div>
  )
}

export default Article