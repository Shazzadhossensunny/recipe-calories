export default function Cart() {
  return (
    <div className="border border-[#28282833] rounded-2xl pb-28">
        {/* want to cook */}
      <div className="max-w-full lg:max-w-[350px] mx-auto text-center mt-8">
        <h3 className="text-[#282828] text-2xl font-semibold">
          Want to cook: 01
        </h3>
        <div className="divider"></div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-base-200">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td><button className="bg-[#0BE58A] py-2 px-4 rounded-full text-[#150B2B] text-base font-medium">Preparing</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* current cooking */}
      <div className="max-w-full lg:max-w-[350px] mx-auto text-center mt-8">
        <h3 className="text-[#282828] text-2xl font-semibold">
        Currently cooking: 02
        </h3>
        <div className="divider"></div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-base-200">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* total count */}
      <div className="p-5">
        <div className="text-[#282828CC] font-medium flex justify-end gap-4 text-left">
            <p>Total Time = </p>
            <p>Total Calories = </p>
        </div>
        <div className="text-[#282828CC] font-medium flex justify-end gap-4 text-left">
            <p>45 minutes</p>
            <p>1050 calories</p>
        </div>
      </div>
    </div>
  );
}
