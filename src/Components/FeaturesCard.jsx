// eslint-disable-next-line react/prop-types
const FeaturesCard = ({ image, title, text, more }) => {
  return (
    <article className="col-span-6 sm:col-span-6 mx-auto py-8 px-8 rounded-lg sm:w-full max-w-2xl shadow-sm bg-white  sm:max-w-xl">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3 className="text-2xl tracking-wider font-medium my-2">{title}</h3>
        <p className="text-slate-500 max-w-sm">{text}</p>
        {more?.map((item) => {
          return (
            <span
              className="mr-2 p-1 text-sm sm:p-2 rounded-md mt-3 text-base inline-block text-white cursor-pointer"
              key={item}
            >
              {item}
            </span>
          )
        })}
      </div>
    </article>
  )
}
export default FeaturesCard
