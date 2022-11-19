import React from "react";
import "./UserRules.css";
const UserRules = () => {
  return (
    <>
      <h2 className="heading">
        Some of the important rules and regulations that every user need to
        follow:
      </h2>
      <ol className="lists">
        <li>
          You can easily return your product however you have to provide the
          delivery charge.
        </li>
        <li>You can not buy the out of stock products.</li>
        <li>
          The customer can cancel the order until the product is dispatched or
          the service is provided.
        </li>
        <li>
          If the seller accepts the order placed by the customer, it shall be
          deemed as contract and the duties as of contract shall be created.
        </li>
        <li>
          You will find more new features in our website very soon. Our
          developers team are working hard to make it as efficient as possible.
        </li>
        <li>You should behave politely to the delivery person.</li>
        <li>
          The delivery charge is free if your shopping cost is more than
          Rs10000.
        </li>
      </ol>
    </>
  );
};

export default UserRules;
