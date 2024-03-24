import React from "react";

const Supplier = (props) => {
  return (
    <div>
      <h5>
        <b>Step 1: Supply Raw Materials</b>(Only a registered Raw Material
        Supplier can perform this step):-
      </h5>
      <form onSubmit={props.handlerSubmitRMSsupply}>
        <input
          class="form-control-sm m-3"
          type="text"
          onchange={props.handlerChangeID}
          placeholder="Enter Medicine ID"
          required
        />
        <button
          class="bg-purple-900 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          {/* w-full bg-purple-900 hover:bg-purple-700 text-white font-bold py-2 px-4 mb-6 rounded */}
          Supply
        </button>
      </form>
      <hr class="border-purple-200" />
      <br />
    </div>
  );
};

export default Supplier;
