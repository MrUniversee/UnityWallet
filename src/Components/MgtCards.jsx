const MgtCards = ({ id, title, desc, url }) => {
  return (
    <article className=" bg-white col-span-12 sm:col-span-6 flex flex-col sm:flex-row items-center  px-4 py-3 rounded-md shadow-sm">
      <div className="title-content">
        <h3 className="text-2xl md:4xl font-medium mb-4 tracking-wide">
          {title}
        </h3>
        <p className="text-slate-600 mb-4">{desc}</p>
      </div>
      <div>
        <img src={url} alt="" />
      </div>
    </article>
  )
}
export default MgtCards
