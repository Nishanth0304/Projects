let balance: number = 10000;
let enteredPin: number = 1234; 
let correctPin: number = 1234;

function insertCard(): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Card Inserted Successfully");
            resolve();
        }, 2000);
    });
}

function verifyPin(): Promise<boolean> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Verifying PIN...");

            if (enteredPin === correctPin) {
                resolve(true);
            } else {
                resolve(false);
            }
        }, 2000);
    });
}

function checkBalance(): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Available Balance =", balance);
            resolve();
        }, 1000);
    });
}

function deposit(amount: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Processing Deposit...");

            balance += amount;

            console.log("Amount Deposited Successfully");
            console.log("Updated Balance =", balance);

            resolve();
        }, 2000);
    });
}

function withdraw(amount: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Processing Withdrawal...");

            if (amount <= balance) {
                balance -= amount;

                console.log("Please Collect Your Cash");
                console.log("Transaction Successful");
                
            } else {
                console.log("Insufficient Balance");
                console.log("Transaction Failed");
            }

            resolve();
        }, 3000);
    });
}

async function atm() {
    console.log("Welcome to ATM");
    console.log("Please Insert Your Card");

    await insertCard();

    let isValidPin = await verifyPin();

    if (!isValidPin) {
        console.log("Invalid PIN");
        return;
    }

    console.log("PIN Verified");

    await checkBalance();

    await deposit(5000);

    await withdraw(3000);

    await checkBalance();

    console.log("Please Remove Your Card");
    console.log("Thank You For Using ATM");
}

atm();