import "../Banner/banner.css"
const Banner = () => {
    return (
        <div className="banner">
            <div className="flex items-center h-screen pl-8">
                <div>
                    <p className="text-white text-6xl font-bold">FIND THE <br /> FAVORITE ONE</p>
                    <p className="mt-4">
                        <input className="px-2 py-3 rounded-md" type="text" placeholder="search here..." />
                        <button className="btn btn-primary ml-2">Search</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;