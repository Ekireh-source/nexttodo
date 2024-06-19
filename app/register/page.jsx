import CustomLayout from "@components/nested-layout";


const RegisterPage = () => {
    return(
        <div>
            <form method="">
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <button type="submit" className="btn btn-wide">Wide</button>
            </form>
        </div>
)
};


// Use the custom layout for the register page
RegisterPage.getLayout = function getLayout(page) {
    return (
        <CustomLayout>
            {page}
        </CustomLayout>
    );
};





export default RegisterPage;
