<script lang="ts">
//   import {BigNumber, ethers } from "ethers"
//   let riddle;
//   let displayReward;
//   let guess;
//   let riddles:Riddle[];
//      import tokenABI from "./abi/tokenABI";
  
//     import type { Riddle } from "./domain/riddle";
//   async function connectWallet(){
//     const provider = new ethers.providers.Web3Provider(
//       (window as any).ethereum, "any"
//     );
//     //#TODO add abi and move to file
//     await provider.send('eth_requestAccounts', []);
//     const tokenaddress = "0xBEE6c8c2211d769076C2Bc5B4930c03fE40D4778"; //todo add tokenaddress
//     //use provider to create contract
//     const contract = new ethers.Contract(tokenaddress, tokenABI, provider);
//     const signer = await provider.getSigner(); // use this for transactions
//     riddles = await contract.getRiddles();
//     riddle = riddles[Math.floor(Math.random()*riddles.length)];
//     console.log(riddles)
//     console.log(riddle)
//     const winnableReward:BigNumber =riddle.totalBadGuessCollected
//     displayReward = winnableReward.toString();
//     console.log (displayReward)
//   }
// async function submitGuess() {
//   const provider = new ethers.providers.Web3Provider(
//       (window as any).ethereum, "any"
//     );
//     //#TODO add abi and move to file
//     await provider.send('eth_requestAccounts', []);
//     const tokenaddress = "0xBEE6c8c2211d769076C2Bc5B4930c03fE40D4778"; //todo add tokenaddress
//     const signer = await provider.getSigner(); // use this for transactions
   
//     //use provider to create contract
//     const contract = new ethers.Contract(tokenaddress, tokenABI, signer);
//     contract.guess(riddle.index, {guess})
// }
import Riddler from "./components/Riddler.svelte";
</script>

<main>

  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-lg space-y-3">
        <h1 class="text-4xl font-bold">WIN REAL FAKE ETH</h1>
      <Riddler/>
        <!-- {#if riddle}
        <div class="form-control">
          <label for ="" class="label">
            <span class="label-text">Type your guess to win {displayReward} wei.</span>
          </label>
          <label class="input-group">
            <span>{riddle.question}</span>
            <input bind:value={guess} type="text" placeholder="enter guess here" class="input input-bordered" />  
            <button on:click={submitGuess} class="btn">Submit</button>
          </label>
        </div>
        {:else}
        <button on:click={connectWallet} class="btn btn-primary">Get Started</button>
        {/if} -->
        <!-- <p class="py-6">YOU CAN WIN  ETH BY CORRECTLY ASNWERING THE RIDDLE. It costs 1 WEI to play</p>
        -->
      </div>
    </div>
  </div>
 </main>
<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>