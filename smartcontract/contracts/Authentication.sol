// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Authentication {
    address public Admin;

    struct User {
        bytes32 usernameHash;
        bytes32 passwordHash;
        string email;
        bool isRegistered;
    }

    mapping(address => User) public users;

    event UserRegistered(address indexed userAddress, bytes32 usernameHash, string email);
    event UserLoggedIn(address indexed userAddress, bytes32 usernameHash);

    modifier onlyAdmin() {
        require(msg.sender == Admin, "Only the contract Admin can call this function");
        _;
    }

    constructor() {
        Admin = msg.sender;
    }

    function signUp(string memory _username, string memory _password, string memory _email) public {
        require(!users[msg.sender].isRegistered, "User already registered");

        bytes32 usernameHash = sha256(bytes(_username));
        bytes32 passwordHash = sha256(bytes(_password));

        users[msg.sender] = User({
            usernameHash: usernameHash,
            passwordHash: passwordHash,
            email: _email,
            isRegistered: true
        });

        emit UserRegistered(msg.sender, usernameHash, _email);
    }

    function login(string memory _identifier, string memory _password) public {
        require(users[msg.sender].isRegistered, "User not registered");

        bytes32 identifierHash = sha256(bytes(_identifier));

        require(
            (identifierHash == users[msg.sender].usernameHash) ||
            (identifierHash == sha256(bytes(users[msg.sender].email))),
            "Incorrect username or email"
        );

        require(sha256(bytes(_password)) == users[msg.sender].passwordHash, "Incorrect password");

        emit UserLoggedIn(msg.sender, identifierHash);
    }

    function addUser(address _userAddress, string memory _username, string memory _password, string memory _email) public onlyAdmin {
        require(!users[_userAddress].isRegistered, "User already registered");

        bytes32 usernameHash = sha256(bytes(_username));
        bytes32 passwordHash = sha256(bytes(_password));

        users[_userAddress] = User({
            usernameHash: usernameHash,
            passwordHash: passwordHash,
            email: _email,
            isRegistered: true
        });

        emit UserRegistered(_userAddress, usernameHash, _email);
    }

    function getUserData() public view returns (bytes32 usernameHash, bytes32 passwordHash, string memory email, bool isRegistered) {
        User storage user = users[msg.sender];
        return (user.usernameHash, user.passwordHash, user.email, user.isRegistered);
    }
}
