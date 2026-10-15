"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mssql_1 = __importDefault(require("mssql"));
const config = {
    user: "testcdc",
    password: "Nishanth@123",
    server: "INDBANL317",
    database: "ATMDB",
    options: {
        trustServerCertificate: true
    }
};
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function insertCard() {
    console.log("Please Insert Your Card...");
    await sleep(2000);
    console.log("Card Inserted Successfully");
}
async function verifyPin(accountNo, pin) {
    const result = await new mssql_1.default.Request()
        .input("accountNo", mssql_1.default.BigInt, accountNo)
        .input("pin", mssql_1.default.Int, pin)
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
async function checkBalance(accountNo) {
    const result = await new mssql_1.default.Request()
        .input("accountNo", mssql_1.default.BigInt, accountNo)
        .query(`
            SELECT Balance
            FROM ATMAccounts
            WHERE AccountNo=@accountNo
        `);
    console.log("Current Balance:", result.recordset[0].Balance);
}
async function deposit(accountNo, amount) {
    await new mssql_1.default.Request()
        .input("accountNo", mssql_1.default.BigInt, accountNo)
        .input("amount", mssql_1.default.Decimal(10, 2), amount)
        .query(`
            UPDATE ATMAccounts
            SET Balance = Balance + @amount
            WHERE AccountNo=@accountNo
        `);
    console.log(`Deposited ₹${amount}`);
}
async function withdraw(accountNo, amount) {
    const result = await new mssql_1.default.Request()
        .input("accountNo", mssql_1.default.BigInt, accountNo)
        .query(`
            SELECT Balance
            FROM ATMAccounts
            WHERE AccountNo=@accountNo
        `);
    const balance = result.recordset[0].Balance;
    if (balance >= amount) {
        await new mssql_1.default.Request()
            .input("accountNo", mssql_1.default.BigInt, accountNo)
            .input("amount", mssql_1.default.Decimal(10, 2), amount)
            .query(`
                UPDATE ATMAccounts
                SET Balance = Balance - @amount
                WHERE AccountNo=@accountNo
            `);
        console.log(`Withdrawal Successful : ₹${amount}`);
    }
    else {
        console.log("Insufficient Balance");
    }
}
async function atm() {
    try {
        await mssql_1.default.connect(config);
        await insertCard();
        const accountNo = 1001;
        const pin = 1234;
        const verified = await verifyPin(accountNo, pin);
        if (!verified) {
            return;
        }
        await sleep(1000);
        console.log("\nBalance Inquiry");
        await checkBalance(accountNo);
        await sleep(1000);
        console.log("\nDepositing Money");
        await deposit(accountNo, 2000);
        await sleep(1000);
        console.log("\nWithdrawing Money");
        await withdraw(accountNo, 1000);
        await sleep(1000);
        console.log("\nFinal Balance");
        await checkBalance(accountNo);
        console.log("\nTransaction Successful");
        console.log("Please Collect Your Card");
    }
    catch (error) {
        console.log(error);
    }
}
atm();
