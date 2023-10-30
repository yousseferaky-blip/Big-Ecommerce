import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import   './../website/product/Product.css'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Pagination = ({Pages,currentPage,setCurrentPage}) => {

    const GeneratePage = []
    for(let i=1; i<=Pages ;i++){
        GeneratePage.push(i)
    }
  return (
    <>
       
    <div  className='Pagination'>
         <button 
             disabled={currentPage == 1}
             onClick={()=>setCurrentPage(prev=>prev-1)}
             className='page prev'>
            <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        {GeneratePage.map(page =>
                <div onClick={()=>setCurrentPage(page)}
                    key={page}
                    className={currentPage == page ? 'page activee': 'page'}>
                    {page}
                </div>
            )}
    <button 
            disabled={currentPage == Pages}
            onClick={()=>setCurrentPage(prev=>prev+1)} 
            className='page next'>
            <FontAwesomeIcon icon={faArrowRight} />
    </button>
    </div>
    </>)
}

export default Pagination