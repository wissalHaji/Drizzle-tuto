// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract SimpleStorage {
    string public data = "hello";
    event DataChanged(string indexed data);

    function setData(string calldata _data) external {
        data = _data;
        emit DataChanged(_data);
    }
}
