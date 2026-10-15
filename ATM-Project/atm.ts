import sql from "mssql";

const config = {
    user: "testcdc",
    password: "Nishanth@123",
    server: "INDBANL317",
    database: "ATMDB",
    options: {
        trustServerCertificate: true
    }
};


function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function insertCard() {
    console.log("Please Insert Your Card...");
    await sleep(2000);
    console.log("Card Inserted Successfully");
}


async function verifyPin(accountNo: number, pin: number) {
    const result = await new sql.Request()
        .input("accountNo", sql.BigInt, accountNo)
        .input("pin", sql.Int, pin)
        .query(`
            SELECT *
            FROM ATMAccounts
            WHERE AccountNo=@accountNo
            AND Pin=@pin
        `);
    if (result.recordset.length > 0) {
        console.log("PIN Verified");
        return true;
    }
    console.log("Invalid PIN");
    return false;
}

async function checkBalance(accountNo: number) {
    const result = await new sql.Request()
        .input("accountNo", sql.BigInt, accountNo)
        .query(`
            SELECT Balance
            FROM ATMAccounts
            WHERE AccountNo=@accountNo
        `);
    console.log("Current Balance:", result.recordset[0].Balance);
}

async function deposit(accountNo: number, amount: number) {
    await new sql.Request()
        .input("accountNo", sql.BigInt, accountNo)
        .input("amount", sql.Decimal(10,2), amount)
        .query(`
            UPDATE ATMAccounts
            SET Balance = Balance + @amount
            WHERE AccountNo=@accountNo
        `);
    console.log(`Deposited ₹${amount}`);
}

async function withdraw(accountNo: number, amount: number) {
    const result = await new sql.Request()
        .input("accountNo", sql.BigInt, accountNo)
        .query(`
            SELECT Balance
            FROM ATMAccounts
            WHERE AccountNo=@accountNo
        `);
    const balance = result.recordset[0].Balance;
    if(balance >= amount){
        await new sql.Request()
            .input("accountNo", sql.BigInt, accountNo)
            .input("amount", sql.Decimal(10,2), amount)
            .query(`
                UPDATE ATMAccounts
                SET Balance = Balance - @amount
                WHERE AccountNo=@accountNo
            `);
        console.log(`Withdrawal Successful : ₹${amount}`);
    }
    else{
        console.log("Insufficient Balance");
    }
}

async function atm() {
    try {
        await sql.connect(config);
        await insertCard();
        const accountNo = 1001;
        const pin = 1234;
        const verified = await verifyPin(accountNo,pin);
        if(!verified){
            return;
        }
        await sleep(1000);
        console.log("\nBalance Inquiry");
        await checkBalance(accountNo);
        await sleep(1000);
        console.log("\nDepositing Money");
        await deposit(accountNo,2000);
        await sleep(1000);
        console.log("\nWithdrawing Money");
        await withdraw(accountNo,1000);
        await sleep(1000);
        console.log("\nFinal Balance");
        await checkBalance(accountNo);
        console.log("\nTransaction Successful");
        console.log("Please Collect Your Card");
    }
    catch(error){
        console.log(error);
    }
}
atm();
 
 