const tokenABI = [{ "inputs": [], "stateMutability": "payable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "string", "name": "question", "type": "string" }, { "indexed": false, "internalType": "string", "name": "answer", "type": "string" }], "name": "RiddleCreated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "guesser", "type": "address" }, { "indexed": false, "internalType": "string", "name": "answer", "type": "string" }, { "indexed": false, "internalType": "uint256", "name": "rewardAmount", "type": "uint256" }], "name": "correctGuess", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "guesser", "type": "address" }, { "indexed": false, "internalType": "string", "name": "answer", "type": "string" }], "name": "wrongGuess", "type": "event" }, { "inputs": [{ "internalType": "string", "name": "question", "type": "string" }, { "internalType": "string", "name": "answer", "type": "string" }], "name": "createRiddle", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "getMinDepositAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getRiddles", "outputs": [{ "components": [{ "internalType": "string", "name": "question", "type": "string" }, { "internalType": "bytes32", "name": "answer", "type": "bytes32" }, { "internalType": "bool", "name": "isSolved", "type": "bool" }, { "internalType": "uint256", "name": "totalBadGuessCollected", "type": "uint256" }, { "internalType": "uint256", "name": "createRiddleRewardAmount", "type": "uint256" }], "internalType": "struct Riddler.Riddle[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }, { "internalType": "string", "name": "answer", "type": "string" }], "name": "guess", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
export default tokenABI