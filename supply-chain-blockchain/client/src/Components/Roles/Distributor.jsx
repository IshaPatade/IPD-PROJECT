import React from "react";

const Distributor = (props) => {
  return (
    <div>
      <h5>
        <b>Step 3: Distribute</b>(Only a registered Manufacturer can perform
        this step):-
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
          Distribute
        </button>
      </form>
      <hr class="border-purple-200" />
      <br />
    </div>
  );
};

export default Distributor;
