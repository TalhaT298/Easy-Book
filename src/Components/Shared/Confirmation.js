import React from 'react';

const Confirmation = ({title,message,closeModal,modalData, success}) => {
    return (
        <div>
        



<input type="checkbox" id="confirmation-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="py-4">{message}</p>
    <div className="modal-action">
      <label onClick={()=>success(modalData)} htmlFor="confirmation-modal" className="btn bg-pink-600 text-white">Delete</label>
      <button onClick={closeModal} className='btn btn-outline'>Cancel</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Confirmation;