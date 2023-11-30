import Category from "./Category";
import img1 from '../../assets/icons/accounts.png'
import img2 from '../../assets/icons/creative.png'
import img3 from '../../assets/icons/marketing.png'
import img4 from '../../assets/icons/chip.png'

const JobCategory = () => {
    return (
        <div className="my-32 max-w-5xl mx-auto">
            <div className="text-center mb-10">
                <h1 className="text-[#1A1919] text-5xl font-extrabold">Job Category List</h1>
                <p className="textGray mt-4 font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
                <Category
                image={img1}
                title={'Account & Finance'}
                subTile={'300 Jobs Available'}
                ></Category>

                <Category
                image={img2}
                title={'Creative Design'}
                subTile={'100+ Jobs Available'}
                ></Category>
                <Category
                image={img3}
                title={'Marketing & Sales'}
                subTile={'150 Jobs Available'}
                ></Category>
                <Category
                image={img4}
                title={'Engineering Job'}
                subTile={'224 Jobs Available'}
                ></Category>

            </div>
        </div>
    );
};

export default JobCategory;