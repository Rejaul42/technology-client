
const AddProduct = () => {
    return (
        <div className="bg-base-100 shadow-lg p-8">
            <form>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="email" placeholder="Name" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand name</span>
                            </label>
                            <input type="email" placeholder="Brand name" name="brandName" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <input type="email" placeholder="Type" name="type" className="input input-bordered" />
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="email" placeholder="Rating" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="email" placeholder="Price" name="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <input type="email" placeholder="Short description" name="description" className="input input-bordered" />
                        </div>
                    </div>

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="email" placeholder="Photo URL" name="name" className="input input-bordered" />
                </div>
                <div className="text-center mt-4">
                    <button className=" w-2/4 bg-green-600 text-white py-3 rounded-lg font-medium">Add Item</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;