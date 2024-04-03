// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract KuVt {
    address public Admin;
    struct User {
        string name; 
        string username;
        bytes32 passwordHash;
        string email;
        uint256 nik;
        address walletAddress;
        bool isVerified;
    }

    struct DataPaslon {
        uint noUrut;
        string ketua;
        string wakil;
        string visi;
        string misi;
        uint256 voteCount; // Tambahkan voteCount untuk menghitung jumlah pemilihan
    }

    // Tambahkan struct baru untuk menyimpan pemilihan pengguna
    struct UserVote {
        uint paslonNo;
        bool hasVoted;
    }

    mapping(address => User) public users;
    mapping(bytes32 => address) public userAddressesByHash;
    mapping(bytes32 => bool) public usedUsernames;
    mapping(bytes32 => bool) public usedNiks;
    mapping(address => bool) public pendingUsers;
    mapping(string => bool) public pendingUsernames;

    mapping (uint => DataPaslon) public Paslon;
    DataPaslon[] public PaslonData;

    // Tambahkan mapping untuk menyimpan pemilihan pengguna
    mapping(address => UserVote) public userVotes;

    uint256 public totalVerifiedUsers;
    uint256 public addedUsersByAdmin;

    User[] public dataUser;
    User[] public reqData;

    event addDataPaslon(uint indexed noUrut, string ketua, string wakil, string visi, string misi);
    event UserRegistered(address indexed userAddress, string username, string email, bool isVerified, uint256 nik, address walletAddress);
    event UserLoggedIn(address indexed userAddress, bytes32 identifierHash);
    event UserVoted(address indexed userAddress, uint indexed paslonNo);

    modifier onlyAdmin() {
        require(msg.sender == Admin, "Only the contract Admin can call this function");
        _;
    }

    constructor() {
        Admin = msg.sender;
    }

    function encryptNik(uint256 _nik) internal pure returns (bytes32) {
        return sha256(abi.encodePacked(_nik));
    }

    // Fungsi signUp diperbarui untuk memasukkan data name pengguna
    function signUp(
        string memory _name, // Menambahkan parameter _name
        string memory _username,
        string memory _password,
        string memory _email,
        uint256 _nik
    ) public {
        require(users[msg.sender].walletAddress == address(0), "User already registered");

        bytes32 usernameHash = sha256(bytes(_username));
        bytes32 passwordHash = sha256(bytes(_password));
        bytes32 encryptedNik = encryptNik(_nik);
        require(!usedUsernames[usernameHash], "Username already taken");
        require(!usedNiks[encryptedNik], "NIK already registered");

        users[msg.sender] = User({
            name: _name,
            username: _username,
            passwordHash: passwordHash,
            email: _email,
            nik: _nik,
            walletAddress: msg.sender,
            isVerified: false
        });

        usedUsernames[usernameHash] = true;
        usedNiks[encryptedNik] = true;
        pendingUsers[msg.sender] = true;

        reqData.push(users[msg.sender]);

        userVotes[msg.sender] = UserVote(0, false); // Set pemilihan awal pengguna menjadi paslon nomor 0 dan belum memilih

        // Update userAddressesByHash
        userAddressesByHash[usernameHash] = msg.sender;

        // Update pendingUsernames mapping
        pendingUsernames[_username] = true;

        emit UserRegistered(msg.sender, _username, _email, false, _nik, msg.sender);
    }

    // Fungsi addUser diperbarui untuk memasukkan data name pengguna
    function addUser(address _userAddress, string memory _name, string memory _username, string memory _password, string memory _email, uint256 _nik) public onlyAdmin {
        require(users[_userAddress].walletAddress == address(0), "User already registered");

        bytes32 usernameHash = sha256(bytes(_username));
        bytes32 passwordHash = sha256(bytes(_password));
        bytes32 encryptedNik = encryptNik(_nik);
        require(!usedUsernames[usernameHash], "Username already taken");
        require(!usedNiks[encryptedNik], "NIK already registered");

        users[_userAddress] = User({
            name: _name, // Menyimpan nilai name
            username: _username,
            passwordHash: passwordHash,
            email: _email,
            nik: _nik,
            walletAddress: _userAddress,
            isVerified: false
        });

        usedUsernames[usernameHash] = true;
        usedNiks[encryptedNik] = true;
        pendingUsers[_userAddress] = true;

        dataUser.push(users[_userAddress]);

        userAddressesByHash[usernameHash] = _userAddress;

        addedUsersByAdmin += 1;

        emit UserRegistered(_userAddress, _username, _email, false, _nik, _userAddress);
    }

    function verifyUserByUsername(string memory _username) public onlyAdmin {
        bytes32 usernameHash = sha256(bytes(_username));
        address userAddress = userAddressesByHash[usernameHash];
        require(userAddress != address(0), "User not found");
        require(pendingUsers[userAddress], "User is not pending verification");
        // Mark the user as verified
        users[userAddress].isVerified = true;
        // Remove the user from pendingUsers
        delete pendingUsers[userAddress];
        // Add the user to dataUser only if verified
        if(users[userAddress].isVerified) {
            dataUser.push(users[userAddress]);
            // Increment the total verified users count
            totalVerifiedUsers++;
        }
    }

    function login(string memory _identifier, string memory _password) public {
        require(users[msg.sender].walletAddress != address(0), "User not registered");
        require(users[msg.sender].isVerified, "User not verified");

        bytes32 identifierHash = sha256(bytes(_identifier));

        require(
            (identifierHash == sha256(bytes(users[msg.sender].username))) ||
            (identifierHash == encryptNik(users[msg.sender].nik)),
            "Incorrect username or NIK"
        );

        require(sha256(bytes(_password)) == users[msg.sender].passwordHash, "Incorrect password");

        emit UserLoggedIn(msg.sender, identifierHash);
    }

    function viewAllUsers() external view returns (uint256 totalUsers) {
        totalUsers = totalVerifiedUsers + addedUsersByAdmin;
    }

    function getAllUser() public view returns (User[] memory) {
        return dataUser;
    }
    function addPaslon(uint _noUrut, string memory _candidateKetua, string memory _wakil, string memory _visi, string memory _misi) public onlyAdmin {
        DataPaslon memory newPaslon = DataPaslon({
            noUrut: _noUrut,
            ketua: _candidateKetua,
            wakil: _wakil,
            visi: _visi,
            misi: _misi,
            voteCount: 0 // Set awal voteCount menjadi 0
        });

        PaslonData.push(newPaslon);

        emit addDataPaslon(_noUrut, _candidateKetua, _wakil, _visi, _misi);
    }

    function votePaslon(uint _paslonNo) public {
        require(users[msg.sender].isVerified, "User not verified");
        require(_paslonNo > 0 && _paslonNo <= PaslonData.length, "Invalid paslon number");
        require(!userVotes[msg.sender].hasVoted, "User has already voted");

        PaslonData[_paslonNo - 1].voteCount++; // Tambahkan satu suara untuk paslon yang dipilih
        userVotes[msg.sender].paslonNo = _paslonNo;
        userVotes[msg.sender].hasVoted = true;

        emit UserVoted(msg.sender, _paslonNo);
    }

    function getPaslon() public view returns (DataPaslon[] memory){
        return PaslonData;
    }

    function getReqUser() public onlyAdmin view returns (User[] memory){
        return reqData;
    }

    function getVoteResults() public view returns (uint[] memory) {
    uint[] memory results = new uint[](PaslonData.length);
    
    for(uint i = 0; i < PaslonData.length; i++) {
        results[i] = PaslonData[i].voteCount;
    }
    
    return results;
}

}