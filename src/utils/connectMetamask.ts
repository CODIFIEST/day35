import { ethers } from "ethers";
type EthWindow = {
    ethereum: any; //### TODO- get rid of the any type
};
async function connectMetamaskWallet() {
    const provider = new ethers.providers.Web3Provider(
        (window as any as EthWindow).ethereum
    );

    await provider.send("eth_requestAccounts", []);
    return provider;
 }
 export default connectMetamaskWallet