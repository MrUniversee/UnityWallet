const Title = ({ title, text }) => {
  return (
    <div className="text-center mb-12">
      <h2 className=" text-4xl md:text-6xl mb-3 font-bold text-green-500 capitalize">
        {title}
      </h2>
      <p className="text-slate-600 text-lg font-medium leading-8 max-w-lg mx-auto">
        {text}
      </p>
    </div>
  )
}
export default Title
