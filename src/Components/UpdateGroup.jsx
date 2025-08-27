import { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateGroup = () => {
    const {_id,groupName, hobbyCategorie, maxMembers, meetingLocation, startDate,imageUrl,description} = useLoaderData();
    const {user} = use(AuthContext)
    console.log(_id);
    
    
    
const handleUpdateGroup =(e)=>{
e.preventDefault();
const form = e.target;
const formData = new FormData(form);
const updateGroup = Object.fromEntries(formData);
console.log(updateGroup);

fetch(`https://hobby-hub-server-tan.vercel.app/groups/${_id}`,{
    method:'PUT',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(updateGroup)
}
 )
 .then(res =>res.json())
 .then(data =>{
    if(data.modifiedCount){
        Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Group updated successfully.",
                    showConfirmButton: false,
                    timer: 1500
                  });
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
                <h1 className="text-4xl md:text-6xl font-bold">Update Group</h1>
                
            </div>


            <form onSubmit={handleUpdateGroup} className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                <fieldset className="fieldset bg-base-300 border rounded-box border-base-300 p-4 col-span-2">
                    <label className="label text-black font-semibold">Group Name</label>
                    <input type="text" name='groupName' defaultValue={groupName} className="input w-full" placeholder="Enter group name" required />
                </fieldset>

                <fieldset className="fieldset bg-base-300 border rounded-box border-base-300 p-4">
                    <label className="label text-black font-semibold">Hobby Category</label>
                    <select name="hobbyCategory" className="select w-full" required>
                        <option defaultValue={hobbyCategorie} value="">Select a category</option>
                        {hobbyCategories.map((cat, idx) => (
                            <option key={idx} value={cat}>{cat}</option>
                        ))}
                    </select>
                </fieldset>

                <fieldset className="fieldset bg-base-300 border rounded-box border-base-300 p-4">
                    <label className="label text-black font-semibold">Max Members</label>
                    <input type="number" name='maxMembers' defaultValue={maxMembers} className="input w-full" placeholder="Max members" required />
                </fieldset>

                <fieldset className="fieldset bg-base-300 border rounded-box border-base-300 p-4">
                    <label className="label text-black font-semibold">Meeting Location</label>
                    <input type="text" name='meetingLocation' className="input w-full" defaultValue={meetingLocation} placeholder="City/Area" required />
                </fieldset>

                <fieldset className="fieldset bg-base-300 border rounded-box border-base-300 p-4">
                    <label className="label text-black font-semibold">Start Date</label>
                    <input type="date" name='startDate' className="input w-full" defaultValue={startDate} required />
                </fieldset>

                <fieldset className="fieldset bg-base-300 border rounded-box border-base-300 p-4 col-span-2">
                    <label className="label text-black font-semibold">Image URL</label>
                    <input type="text" name='imageUrl' className="input w-full" defaultValue={imageUrl} placeholder="Group photo URL" required />
                </fieldset>

                <fieldset className="fieldset bg-base-300 border rounded-box border-base-300 p-4 col-span-2">
                    <label className="label text-black font-semibold">Description</label>
                    <textarea name='description' defaultValue={description} className="textarea w-full" placeholder="Write about the group..." required></textarea>
                </fieldset>

                <fieldset className="fieldset bg-base-300  border rounded-box border-base-300 p-4">
                    <label className="label text-black font-semibold">User Name</label>
                    <input type="text" name='userName' defaultValue={user?.displayName || ''} readOnly className="input w-ful" />
                </fieldset>

                <fieldset className="fieldset bg-base-300 border rounded-box border-base-300 p-4">
                    <label className="label text-black font-semibold">User Email</label>
                    <input type="email" name='userEmail' defaultValue={user?.email || ''} readOnly className="input w-full" />
                </fieldset>

                <div className='col-span-2'>
                    <input type="submit" className='btn  btn-outline btn-neutral w-full' value="Update Group" />
                </div>
            </form>
        </div>
    );
};

export default UpdateGroup;