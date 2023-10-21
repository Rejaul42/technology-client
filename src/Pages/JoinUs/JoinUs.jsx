
const JoinUs = () => {
    return (
        <div className="mt-8">
            <div className="border bg-slate-900 text-white w-full px-40 py-16">
                <p className="text-4xl font-semibold mb-6">Join the discussion</p>
                <div className="flex justify-between">
                    <div>
                        <p>Name</p>
                        <input className="py-3 px-2 text-black rounded-md bg-base-100 input input-bordered w-96 max-w-xs " placeholder="Name" type="text" />
                    </div>
                    <div>
                        <p>Email</p>
                        <input className="py-3 px-2 text-black rounded-md bg-base-100 input input-bordered w-96 max-w-xs" placeholder="Email" type="text" />
                    </div>
                </div>
                <div className="mt-4">
                    <p>Comment</p>
                    <textarea placeholder="Comment" className="textarea text-black textarea-bordered textarea-lg w-full" ></textarea>
                </div>
                <div className="text-end mt-4">
                <button className="btn btn-secondary">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;