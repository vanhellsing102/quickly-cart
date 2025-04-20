import IndustryUpdate from "./IndustryUpdate";
import NewProductRealiz from "./NewProductRealiz";
import ShoppingTips from "./ShoppingTips";
import UserGuides from "./UserGuides";

const Blogs = () => {
    return (
        <div className='mt-7 space-y-10'>
            <ShoppingTips></ShoppingTips>
            <NewProductRealiz></NewProductRealiz>
            <IndustryUpdate></IndustryUpdate>
            <UserGuides></UserGuides>
        </div>
    );
};

export default Blogs;