import { it } from "node:test";
import { useAdmin } from "~/store/store";
import TableRow from "./ingredientsTable";

const categories = ["Frozen Yogurt", "Superfood", "Juices", "Smoothie"];
const tableHead = [
  "id",
  "size",
  "base",
  "Fruits",
  "dry",
  "extra",
  "calories",
  "proteins",
  "status",
];
const Ingredients = () => {
  const { category, setCategory } = useAdmin();
  const generateData = () => {
    const data = [];
    for (let i = 1; i <= 20; i++) {
      const item = {
        id: i,
        
        size: Math.floor(Math.random() * 10).toLocaleString() + " oz",
        base: ["Non-Fat Yogurt", "Almond Milk", "Coconut Water"][
          Math.floor(Math.random() * 3)
        ],
        Fruits: [
          "Strawberries",
          "Blueberries",
          "Bananas",
          "Mango",
          "Pineapple",
        ][Math.floor(Math.random() * 5)],
        dry: ["Granola", "Chia Seeds", "Almonds", "Walnuts"][
          Math.floor(Math.random() * 4)
        ],
        extra: ["Honey", "Cinnamon", "Vanilla Extract"][
          Math.floor(Math.random() * 3)
        ],
        calories: Math.floor(Math.random() * 200).toLocaleString() + " kcal",
        proteins: Math.floor(Math.random() * 10).toLocaleString() + " g",
        status: ["Available", "Sold Out"][Math.floor(Math.random() * 2)],
        category: categories[Math.floor(Math.random() * 4)],
      };
      data.push(item);
    }
    return data;
  };
  const tableData = generateData();
  console.log(tableData);
  return (
    <div className="flex h-full w-full flex-col px-5">
      <Header />
      <div className="flex flex-grow flex-col bg-white px-1 ">
        <h1 className="text-4xl">Advanced</h1>
        <div className="flex gap-4">
          {categories.map((item, index) => {
            return (
              <span
                onClick={() => {
                  setCategory(item);
                }}
                key={index}
                className={`hover:border-salt-500 w-32 rounded-lg border py-1 px-3 text-center hover:cursor-pointer ${
                  category == item ? "bg-slate-400" : ""
                }`}
              >
                {item}
              </span>
            );
          })}
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
              <tr>
                {tableHead.map((item, index) => {
                  return (
                    <th key={index} scope="col" className="border py-3">
                      <div className="flex items-center justify-between">
                        {item}
                        {item != "id" && (
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="ml-1 h-3 w-3"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 320 512"
                            >
                              <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>


            <tbody>
            {tableData.map(
              (
               item,
                index
              ) => {
                return (
                  <tr className="border-b bg-white border-gray-700 ">
                    <th
                      scope="row"
                      className="whitespace-nowrap py-4 px-2  border-b text-gray-900 "
                    >
                      {item.id}
                    </th>
                    <td className=" py-4 border">{'item.size'}</td>
                    <td className=" py-4 border">{'item.base'}</td>
                    <td className=" py-4 border">{'item.Fruits'}</td>

                    <td className=" py-4 border">{'item.dry'}</td>
                    <td className=" py-4 border">{'item.extra'}</td>
                    <td className=" py-4 border">{'item.calories'}</td>
                    <td className=" py-4 border">{'item.proteins'}</td>

                    <td className=" py-4 border text-right">
                      <a
                        href="#"
                        className={`font-medium  hover:underline  px-1 py-1 rounded-xl ${item.size=='Available'?'bg-green-600':'bg-green-600'}`}
                      >
                        {'item.status'}
                      </a>
                    </td>
                  </tr>
                );
              }
            )}
            </tbody>
          
          </table>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const { currentTab } = useAdmin();

  return (
    <div className="flex items-center  gap-2 py-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-7 w-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-7 w-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
      <p className="text-2xl">{currentTab}</p>
    </div>
  );
};

export default Ingredients;

/*  <tbody>
            {tableData.map((item,index)=>{

                return   <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {id}
                </th>
                <td className="px-6 py-4">
                    {size}
                </td>
                <td className="px-6 py-4">
                    {base}
                </td>
                <td className="px-6 py-4">
                    {fruits}
                </td>
                
                <td className="px-6 py-4">
                    {Dry}
                </td>
                <td className="px-6 py-4">
                    {Extra}
                </td>
                <td className="px-6 py-4">
                    {Calories}
                </td>
                <td className="px-6 py-4">
                    {Proteins}
                </td>
          

                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{status}</a>
                </td>
            </tr>
            })}
          
          
        </tbody> */
