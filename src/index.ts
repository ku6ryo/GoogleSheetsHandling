import { google } from "googleapis"

const SHEET_ID = "your sheet ID"
const SERVICE_ACCOUNT_EMAIL = "your service account email"
const SERVICE_ACCOUNT_PRIVATE_KEY = "your private key"

;(async () => {
  const auth = new google.auth.JWT({
    email: SERVICE_ACCOUNT_EMAIL,
    key: SERVICE_ACCOUNT_PRIVATE_KEY,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  })
  const sheet = google.sheets("v4")
  await sheet.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    auth: auth,
    range: "Sheet1",
    valueInputOption: "RAW",
    requestBody: {
      values: [["hello", "world"]]
    }
  })
})()