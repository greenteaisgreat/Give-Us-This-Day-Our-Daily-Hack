/*
Your team is responsible for maintaining a monetary transaction service. The transactions are tracked in a log file.

A log file is provided as a string array where each entry represents a transaction to service. 
Each transaction consists of:

• sender_user_id. Unique identifier for the user that initiated the transaction. It consists of only digits with at most 9 digits.
• recipient_user_id: Unique identifier for the user that is receiving the transaction. It consists of only digits with at most 9 digits.
• amount_of_transaction: The amount of the transaction. It consists of only digits with at most 9 digits.

The values are separated by a space. For example, "sender_user_id recipient_user_id amount_of_transaction".

Users that perform an excessive amount of transactions might be abusing the service so you have been tasked to identify 
the users that have a number of transactions over a threshold. The list of user ids should be ordered in ascending numeric value.

Example
logs = ["88 99 200", "88 99 300", "99 32 100", "12 12 15"]
threshold = 2

The transactions count for each user, regardless of role are:

ID | Transactions
99    3
88    2
12    1
32    1

There are two users with at least threshold = 2 transactions: 99 and 88. 
In ascending order, the return array is ['88', '99].

Note: In the last log entry, user 12 was on both sides of the transaction.
This counts as only 1 transaction for user 12.
*/

/**
 * 
 * @param {String[]} logs 
 * @param {Number} threshold 
 * @returns {String[]}
 */
const processLogs = (logs, threshold) => {
    const logsObj = {};
    const thresholdArr = [];

    logs.forEach(log => {
        const idArr = log.split(' ');
        const lastEl = idArr.length - 1;

        idArr.forEach((id, i, arr) => {
            if (i === lastEl || id === arr[i + 1]) null;
            else logsObj[id] ? logsObj[id]++ : logsObj[id] = 1;
        });
    });

    for (const key in logsObj) {
        if (logsObj[key] >= threshold) thresholdArr.push(key.toString());
    }

    return thresholdArr.sort((a, b) => a - b);
}

const logs = ["88 99 200", "88 99 300", "99 32 100", "12 12 15"]

console.log(processLogs(logs, 2));