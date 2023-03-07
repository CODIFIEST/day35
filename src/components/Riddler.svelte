<script lang="ts">
    import { BigNumber, Contract, ethers } from "ethers";
    import type { Riddle } from "../domain/riddle";
    import connectMetamaskWallet from "../utils/connectMetamask";
    import tokenABI from "../abi/tokenABI";
    let riddles: Riddle[];
    let skippedRiddles: Riddle[];
    let riddle: Riddle;
    let riddleIndex: number;
    let guess: string;
    let displayReward;
    let provider;
    let contract: ethers.Contract;
    let minDeposit: BigNumber;
    let txHash: string;
    enum Outcome {
        WIN,
        LOSE,
        NOTHING,
    }
    let outcome: Outcome = Outcome.NOTHING;
    const tokenAddress = "0xE5ABC6Afb23Fc3Ac4DC9aD2c933F3406566B8462"; //todo add tokenaddress

    async function connect() {
        provider = await connectMetamaskWallet();
        contract = new Contract(tokenAddress, tokenABI, provider.getSigner());

        riddles = await contract.getRiddles();
        riddles = riddles.filter((riddle) => !riddle.isSolved);
        riddleIndex = Math.floor(Math.random() * riddles.length);

        minDeposit = await contract.getMinDepositAmount();
        riddle = riddles[riddleIndex];
        displayReward = riddle.totalBadGuessCollected;
        console.log(riddles);
    }
    async function submitGuess() {
        const tx = await contract.guess(riddleIndex, guess, {
            value: minDeposit,
        });
        txHash = tx.hash;   
        const receipt = await tx.wait(1);  
        console.log(await receipt.events);
        (receipt.events || []).find((e) => {
            if (e.event === "correctGuess") {
                //do this
                console.log("Riddle Solved");
                outcome = Outcome.WIN;
            } else {
                outcome = Outcome.LOSE;
                console.log("wrong guess", outcome);
            }
        });  
    }
    async function skipRiddle(){
        riddles = await contract.getRiddles();
        riddles = riddles.filter((riddle) => !riddle.isSolved);
        riddleIndex = Math.floor(Math.random() * riddles.length);

        minDeposit = await contract.getMinDepositAmount();
        riddle = riddles[riddleIndex];
        displayReward = riddle.totalBadGuessCollected;
        console.log(riddles);
        txHash = "";
        outcome = Outcome.NOTHING;
    }
</script>

{#if riddle}
    <div class="form-control space-y-3">
        <label for="" class="label">
            <span class="label-text"
                >Type your guess to win {displayReward} wei.</span
            >
        </label>
        <label class="input-group">
            <span>{riddle.question}</span>
            <input
                bind:value={guess}
                type="text"
                placeholder="enter guess here"
                class="input input-bordered"
            />
            <button on:click={submitGuess} class="btn">Submit</button>
        </label>
            <button on:click={skipRiddle} class ="btn">Click for a different random riddle.</button>
    </div>
    <p class="py-6">
        YOU CAN WIN {displayReward} wei BY CORRECTLY ASNWERING THE RIDDLE. It costs
        {minDeposit} WEI to play
    </p>
    {#if txHash}
        Transaction Hash: <a
            target="_blank"
            rel="noreferrer"
            href="https://goerli.etherscan.io/tx/{txHash}">{txHash}</a
        >
    {/if}
    {#if outcome === Outcome.WIN}
      <p class="btn-success"> You WON! Answer was {guess}</p> 
    {:else if outcome === Outcome.LOSE}
     <p class ="btn-accent">  Wrong answer, try again.</p> 
    {/if}
{:else}
    <button on:click={async () => connect()} class="btn">Connect Wallet</button>
{/if}
