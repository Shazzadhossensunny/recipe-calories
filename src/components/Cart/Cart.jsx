export default function Cart({ carts, handleDelete, cooking }) {
  return (
    <div className="border border-[#28282833] rounded-2xl pb-28">
      {/* want to cook */}
      <div className="max-w-full lg:max-w-[350px] mx-auto text-center mt-8">
        <h3 className="text-[#282828] text-2xl font-semibold">
          Want to cook: {carts.length}
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
            {carts.map((cart, index) => {
              return (
                <tr key={cart.recipe_id} className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{cart.recipe_name}</td>
                  <td>{cart.preparing_time}</td>
                  <td>{cart.calories}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(cart)}
                      className="bg-[#0BE58A] py-2 px-4 rounded-full text-[#150B2B] text-base font-medium"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* current cooking */}
      <div className="max-w-full lg:max-w-[350px] mx-auto text-center mt-8">
        <h3 className="text-[#282828] text-2xl font-semibold">
          Currently cooking: {cooking.length}
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
            {cooking.map((cook, index) => {
              return (
                <tr key={cook.recipe_id} className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{cook.recipe_name}</td>
                  <td>{cook.preparing_time}</td>
                  <td>{cook.calories}</td>
                </tr>
              );
            })}
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
