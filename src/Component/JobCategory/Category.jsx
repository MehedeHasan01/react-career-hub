

const Category = ({image,  title, subTile}) => {
    return (
        <div className='bgColor rounded-lg'>
            <div className='py-10 pl-10'>
                <div className='p-3 rounded-lg bgColorCategory w-fit'>
                    <img src={image} alt="" />
                    </div>
                <h1 className='mt-8 mb-1 text-[#474747] text-xl  font-extrabold'>{title}</h1>
                <p className='text-[#A3A3A3]'>{subTile}</p>
            </div>
        </div>
    );
};

export default Category;