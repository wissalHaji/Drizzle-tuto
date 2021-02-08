import React from "react";
import { connect } from "react-redux";

const LoadingContainer = ({ web3, accounts, initialized, children }) => {
  if (initialized) {
    if (web3.status === "failed") {
      return (
        <main className="container loading-screen">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>⚠️</h1>
              <h3>
                Please use the Chrome/FireFox extension MetaMask, or dedicated
                Ethereum browsers, and make sure to connect one of your accounts
                to the dapp.
              </h3>
            </div>
          </div>
        </main>
      );
    }

    if (web3.status === "initialized" && Object.keys(accounts).length === 0) {
      return (
        <main className="container loading-screen">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>🦊</h1>
              <h3>
                <strong>{"We can't find any Ethereum accounts!"}</strong>
                Please check and make sure Metamask or your browser Ethereum
                wallet is pointed at the correct network and your account is
                unlocked.
              </h3>
            </div>
          </div>
        </main>
      );
    }

    if (web3.status === "initialized") {
      return children;
    }
  }

  return "Loading...";
};

const mapStateToProps = (state) => {
  return {
    web3: state.web3,
    accounts: state.accounts,
    initialized: state.drizzleStatus.initialized,
  };
};

export default connect(mapStateToProps)(LoadingContainer);
