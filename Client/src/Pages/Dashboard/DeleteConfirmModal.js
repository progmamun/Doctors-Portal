import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
  const [name, email] = deletingDoctor;

  const handleDelete = () => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Doctor: ${name} is deleted successfully`);
          setDeletingDoctor(null);
          refetch();
        }
      });
  };
  return (
    <>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <button
              onClick={() => handleDelete(email)}
              className="btn btn-xs btn-error"
            >
              Delete
            </button>
            <label htmlFor="delete-confirm-modal" className="btn btn-xs">
              cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteConfirmModal;
