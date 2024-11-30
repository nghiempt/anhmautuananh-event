const URL = "https://n8n.khiemfle.com/webhook/f562746a-2227-4564-b95b-2fe4224e1444";
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const getAllAccounts = async () => {
    try {
        const response = await fetch(
            URL,
            {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify({
                    "method": "ACCOUNT",
                }),
                redirect: "follow"
            }
        );
        const result = await response.json();
        return result;
    } catch (error) {
        return [];
    }
}

const getAllNumbers = async () => {
    try {
        const response = await fetch(
            URL,
            {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify({
                    "method": "NUMBER",
                }),
                redirect: "follow"
            }
        );
        const result = await response.json();
        return result;
    } catch (error) {
        return [];
    }
}

const createNewChoice = async (number: any, account: any) => {
    try {
        const response = await fetch(
            URL,
            {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify({
                    "method": "CREATE",
                    "SO_DA_CHON": `'${number}`,
                    "MA_KHACH_HANG": account?.MA_KHACH_HANG,
                    "TAI_KHOAN": account?.TAI_KHOAN,
                    "TEN_KHACH_HANG": account?.TEN_KHACH_HANG,
                    "SO_LAN_CHON": account?.SO_LAN_CHON - 1,
                }),
                redirect: "follow"
            }
        );
        const result = await response.json();
        return result;
    } catch (error) {
        return false;
    }
}

export const Service = {
    getAllAccounts,
    getAllNumbers,
    createNewChoice
}