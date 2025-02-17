/* eslint-disable react/prop-types */

const Avatar = (props) => {
    const { source, size = 'size-9', outlineColor = 'outline-slate-800' } = props;

    return (
        <img src={source} className={`${size} bg-[#374151] -ms-2 rounded-full outline-2 ${outlineColor}`}/>
    )
}

export default Avatar
