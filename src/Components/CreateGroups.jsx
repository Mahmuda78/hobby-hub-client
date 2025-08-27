import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const CreateGroups = () => {
    const { user } = use(AuthContext);
    console.log(user);

    const handleAddGroup = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newGroup = Object.fromEntries(formData.entries());
        console.log(newGroup);

        
        fetch('https://hobby-hub-server-tan.vercel.app/groups', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newGroup)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Group created successfully!",
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
                }
            })
    }

    const hobbyCategories = [
        "Drawing & Painting",
        "Photography",
        "Video Gaming",
        "Fishing",
        "Running",
        "Cooking",
        "Reading",
        "Writing",
        "Singing "
    ];

    return (
        <div className='p-12 max-w-5xl mx-auto'>

            <div className='p-6 text-center space-y-4'>
                <h1 className="text-4xl md:text-6xl font-bold">Create Group</h1>
                <p className="text-lg text-gray-600">
                    Create a new hobby group by filling in the details below.
                    People can join your group and share their interests.
                </p>
            </div>


            <form onSubmit={handleAddGroup} className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                <fieldset className="fieldset bg-base-200 border rounded-box border-base-300 p-4 col-span-2">
                    <label className="label text-black font-semibold">Group Name</label>
                    <input type="text" name='groupName' className="input w-full" placeholder="Enter group name" required />
                </fieldset>

                <fieldset className="fieldset bg-base-200 border rounded-box border-base-300 p-4">
                    <label className="label text-black font-semibold">Hobby Category</label>
                    <select name="hobbyCategory" className="select w-full" required>
                        <option value="">Select a category</option>
                        {hobbyCategories.map((cat, idx) => (
                            <option key={idx} value={cat}>{cat}</option>
                        ))}
                    </select>
                </fieldset>

                <fieldset className="fieldset bg-base-200 border rounded-box border-base-300 p-4">
                    <label className="label text-black font-semibold">Max Members</label>
                    <input type="number" name='maxMembers' className="input w-full" placeholder="Max members" required />
                </fieldset>

                <fieldset className="fieldset bg-base-200 border rounded-box border-base-300 p-4">
                    <label className="label text-black font-semibold">Meeting Location</label>
                    <input type="text" name='meetingLocation' className="input w-full" placeholder="City/Area" required />
                </fieldset>

                <fieldset className="fieldset bg-base-200 border rounded-box border-base-300 p-4">
                    <label className="label text-black font-semibold">Start Date</label>
                    <input type="date" name='startDate' className="input w-full" required />
                </fieldset>

                <fieldset className="fieldset bg-base-200 border rounded-box border-base-300 p-4 col-span-2">
                    <label className="label text-black font-semibold">Image URL</label>
                    <input type="text" name='imageUrl' className="input w-full" placeholder="Group photo URL" required />
                </fieldset>

                <fieldset className="fieldset bg-base-200 border rounded-box border-base-300 p-4 col-span-2">
                    <label className="label text-black font-semibold">Description</label>
                    <textarea name='description' className="textarea w-full" placeholder="Write about the group..." required></textarea>
                </fieldset>

                <fieldset className="fieldset bg-base-200  border rounded-box border-base-300 p-4">
                    <label className="label text-black font-semibold">User Name</label>
                    <input type="text" name='userName' defaultValue={user?.displayName || ''} readOnly className="input w-ful" />
                </fieldset>

                <fieldset className="fieldset bg-base-200 border rounded-box border-base-300 p-4">
                    <label className="label text-black font-semibold">User Email</label>
                    <input type="email" name='userEmail' defaultValue={user?.email || ''} readOnly className="input w-full" />
                </fieldset>

                <div className='col-span-2'>
                    <input type="submit" className='btn  btn-outline btn-neutral w-full' value="Create Group" />
                </div>
            </form>
        </div>
    );
};

export default CreateGroups;
