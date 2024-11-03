import { useLoaderData } from "react-router-dom";



const Gadgets = () => {

    const categories = useLoaderData();

    console.log(categories);

    return (
        <div className="container mx-auto">

            <div className="grid grid-cols-5 gap-4 mt-6" >

                <div className="col-span-1 border rounded-xl p-4">

                    <div className="p-4">
                    <p className="px-4 my-2 rounded-2xl py-2 text-center text-lg font-bold bg-[#9538E2] text-white" >All Products</p>
                        {
                           categories.map(category => (<p className="px-4 my-2 rounded-2xl py-2 text-center text-lg font-bold border-2 border-[#9538E2] text-[#9538E2]" key={category.id}>{category.category}</p>)) 
                        }
                    </div>
                </div>

                
                <div className="col-span-4 border-2"> 
                    <p>hi</p>
                </div>

            </div>
        </div>
    );
};

export default Gadgets;
