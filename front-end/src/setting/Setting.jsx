import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faGear } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import './Setting.css'
const Setting = () => {
    const [LANG,setLANG] = useState(false)
    const [t, i18n] = useTranslation()
    const [lang,setLang] = useState(false)
    function ScrolToTop(){
      window.scrollTo(0,0)
    }
  return (
    <div className={LANG ? "LANGG" : "LANG"}>
    <div onClick={()=>setLANG(!LANG)} className="LANG-ICON"><FontAwesomeIcon  icon={faGear} /></div>
    <div className="LANG-BTN">
      {
        LANG && <>  <div onClick={()=>setLang(!lang)}> 
        {
          lang ? <button onClick={()=>i18n.changeLanguage('en')}>En</button> : 
                 <button onClick={()=>i18n.changeLanguage('ar')}>Ar</button> 
        }
        </div> <FontAwesomeIcon onClick={ScrolToTop} className="ToTop" icon={faArrowUp} /></>
      }
    </div>
  </div>
  )
}

export default Setting