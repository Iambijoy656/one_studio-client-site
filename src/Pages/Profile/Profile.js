import React from "react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";


const Profile = () => {
    const { isDark, user, updateUserProfile } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form?.name?.value;
        const photoURL = form?.photoURL?.value;

        const profile = {
            displayName: name,
            photoURL: photoURL
        };
        updateUserProfile(profile)
            .then(() => {
                Swal.fire("Profile Updated Successfully!", "", "success");
                form.reset();
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Profile update filled!",
                    text: "Change the photo url.",
                });
            });
    };

    return (
        <div className='flex justify-center '>
            <div
                className='w-[85%] md:w-[70%] lg:w-[500px] border  p-4 md:p-10 my-16 shadow-lg rounded'
            >
                <h2 className="text-4xl text-center font-semibold text-sky-900 mb-7 mt-2">
                    Profile
                </h2>
                <form onSubmit={handleSubmit}>
                    <label className="block text-slate-600" htmlFor="name">
                        Full Name
                    </label>
                    <input
                        className="border-2 w-full h-9 my-4 pl-3 outline-purple-900"
                        type="text"
                        defaultValue={user?.displayName}
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        required
                    />
                    <label className="block text-slate-600" htmlFor="photoURL">
                        Photo URL
                    </label>
                    <input
                        className="border-2 w-full h-9 my-4 pl-3 outline-purple-900"
                        type="text"
                        name="photoURL"
                        defaultValue={user?.photoURL}
                        id="photoURL"
                        placeholder="Photo URL"
                        required
                    />
                    <label className="block text-slate-600" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="border-2 w-full h-9 my-4 pl-3 outline-purple-500"
                        type="email"
                        name="email"
                        defaultValue={user?.email}
                        id="email"
                        placeholder="Email"
                        readOnly
                    />
                    <button
                        className="block mx-auto bg-purple-500 px-10 py-2 text-white font-semibold mt-5 mb-5 rounded-lg"
                        type="submit"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Profile;
