import Popup from 'reactjs-popup';
import './Popup.css'

const ViewDetails = ({ data }) => {
  return (
    <Popup trigger={<button>View Details</button>} position="right center">
      {
        close => (<div>
          <div className="popup overflow-scroll">
            <div className="popup_header">
              <h1 className="popup_title">{data.name}</h1>
              <h1 className="popupclose_btn" onClick={close}>&times;</h1>
            </div>
            <div className="details">
              <div className='font-bold'>Description :</div>
              <p>{data.description}</p>
              <div className='font-bold'>Prize :</div>
              <p>{data.prize ? 'Yes' : 'No'}</p>
              <div className='font-bold'>Event type :</div>
              <p>{data.group ? 'Group' : 'Individual'}</p>
              <div className='font-bold'>Student Coordinators :</div>
              <p>{data.student1} , {data.student2}</p>
              <div className='font-bold'>Contact</div>
              <p ><a className='text-blue-500' href={`tel://${data.s1_phone}`}>{data.s1_phone}</a> , <a className='text-blue-500' href={`tel://${data.s2_phone}`}>{data.s2_phone}</a></p>
              <div className='font-bold'>Staff Coordinators :</div>
              <p>{data.staff}</p>
            </div>
          </div>
        </div >)
      }
    </Popup >
  )
}

export default ViewDetails