import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Confirmation from "../../Components/Shared/Confirmation";

const AllUsers = () => {
  const [deletingUser, setDeletingUser] = useState(null);
  const closeModal = () => {
    setDeletingUser(null);
  };

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://thriftly-server.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });

  // const handleMakeAdmin = (id) => {
  //   fetch(`https://thriftly-server.vercel.app/users/admin/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       authorization: `bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.modifiedCount > 0) {
  //         toast.success("Make admin successful.");
  //         refetch();
  //       }
  //     });
  // };

  const handleDelete = (user) => {
    fetch(`https://thriftly-server.vercel.app/users/${user._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.deletedCount>0){
          toast.success(`${user.name}  Deleted Successfully`);
           refetch();
        }
      
       
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>User Role</th>
              {/* <th>Make admin</th> */}
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id} className="hover">
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                {/* <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn bg-pink-500"
                    >
                      Make Admin
                    </button>
                  )}
                </td> */}
                <td>
                  <label
                    onClick={() => setDeletingUser(user)}
                    htmlFor="confirmation-modal"
                    className="btn bg-pink-500"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {deletingUser && (
        <Confirmation
          title={`Are you sure you want to delete ${deletingUser.name} ?`}
          closeModal={closeModal}
          success={handleDelete}
          modalData={deletingUser}
        ></Confirmation>
      )}
    </div>
  );
};

export default AllUsers;
