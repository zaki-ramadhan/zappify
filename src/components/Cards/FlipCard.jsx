/* eslint-disable react/prop-types */
const FlipCard = (props) => {
    const {source, backfaceText, opacity, rowSpan = 'row-span-6', isSubGrid = false, linePosition} = props;

  return (
    <figure className={`flip-card relative w-full h-full group perspective-[1000px] ${rowSpan} before:${linePosition} ${isSubGrid ? "grid grid-rows-subgrid before:content-[''] before:absolute before:left-1/2 before:translate-x-1/2 before:w-[.8px] before:h-1/2 before:bg-linear-to-b before:from-slate-800/40 before:to-slate-700/0 before:-z-20" : ""}`}>
        <div className={`flip-card-content__wrp absolute ${isSubGrid ? 'row-start-1 row-span-6' : ''} w-full h-full transition-all duration-500 transform-3d group-hover:rotate-y-180`}>
            <img src={source} alt={source} className={`absolute backface-hidden w-full h-full rounded-lg ${opacity}`}></img>
            <div className='flip-card__back-face absolute inset-0 w-full h-full bg-radial-[at_0%_0%] from-slate-900 from-0% to-slate-800/50 to-80% border border-slate-700 rounded-lg backface-hidden rotate-y-180 place-content-center'>
                <p className='status__wrp text-center text-[10px] font-light p-3 box-border'>
                    {backfaceText}
                </p>
            </div>
        </div>
    </figure>
  )
}

export default FlipCard
