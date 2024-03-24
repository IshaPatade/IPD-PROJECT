import React from "react";

const Retailer = (props) => {
  return (
    <div>
      <h5>
        <b>Step 4: Retail</b>(Only a registered Retailer can perform this
        step):-
      </h5>
      <form onSubmit={props.handlerSubmitManufacturing}>
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
          Retail
        </button>
      </form>
      <hr class="border-purple-200" />
      <br />
      {/* -------------- */}
      <h5>
        <b>Step 5: Mark as sold</b>(Only a registered Retailer can perform this
        step):-
      </h5>
      <form onSubmit={props.handlerSubmitManufacturing}>
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
          Sold
        </button>
      </form>
      <hr class="border-purple-200" />
      <br />
    </div>
  );
};

export default Retailer;
