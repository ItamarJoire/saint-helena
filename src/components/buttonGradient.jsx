export function ButtonGradient({name, from, to, mt}){
  const buttonClass = `font-['Bungee'] mt-${mt} text-xl shadow-md font-medium rounded-lg px-6 py-3 bg-gradient-to-r from-${from} to-${to} text-white hover:opacity-90 duration-200`
  
  return(
    <button className={buttonClass}>
      {name}
    </button>
  )
}