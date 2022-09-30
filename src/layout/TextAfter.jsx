export const TextAfter = ({ gap, srcs, titles, open }) => {
    return (
<>
    <img src={`./assets/${srcs}.png`} alt="" className={`${open?'wh-icon':'wh-icon-close' } `}/>
     <i className={`bi ${srcs} icon-drawer wh-icon ${open?'wh-icon':'wh-icon-close' }`} ></i>
</>
         
            
       
       
    )
}
