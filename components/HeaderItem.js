function HeaderItem({ Icon, title }) {
  return (
    <div className="group flex flex-col cursor-pointer items-center w-12 sm:w-20 hover:text-white">
      <Icon className="h-7 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
    </div>
  )
}
export default HeaderItem;