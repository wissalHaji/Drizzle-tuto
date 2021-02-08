import React, { useEffect, useState } from "react";
import { useDrizzleContext } from "./drizzle/drizzleContext";
import { connect } from "react-redux";

function App({ dataCall, account }) {
  const drizzle = useDrizzleContext();

  const [data, setData] = useState("");
  const [cacheKey, setCacheKey] = useState(null);

  useEffect(() => {
    // call the simpleStorage contract data method
    const cacheKey = drizzle.contracts.SimpleStorage.methods.data.cacheCall();
    setCacheKey(cacheKey);
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    drizzle.contracts.SimpleStorage.methods
      .setData(data)
      .send({ from: account, gas: 30400 })
      .then((receipt) => {
        console.log(receipt);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChange = (event) => {
    setData(event.target.value);
  };

  return (
    <div>
      <h1>Data in contract storage:</h1>
      {dataCall[cacheKey] && dataCall[cacheKey].value && (
        <p>{dataCall[cacheKey].value}</p>
      )}
      <form onSubmit={onSubmit}>
        <input value={data} onChange={onChange} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    dataCall: state.contracts.SimpleStorage.data,
    account: state.accounts[0],
  };
};

export default connect(mapStateToProps)(App);
