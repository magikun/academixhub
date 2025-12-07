# 📊 Save Waitlist Emails to Google Sheets - Setup Guide

Automatically save every email to a Google Sheet for free!

---

## 🎯 What You'll Get

✅ **Automatic email collection** - Every signup saved to Google Sheets  
✅ **Timestamp tracking** - Know when people signed up  
✅ **100% Free** - No paid services needed  
✅ **Easy to export** - Download as CSV anytime  
✅ **Real-time updates** - Instant data sync

---

## 📋 Step-by-Step Setup (10 minutes)

### **Step 1: Create Your Google Sheet**

1. Go to [https://sheets.google.com](https://sheets.google.com)
2. Click **"+ Blank"** to create new spreadsheet
3. Name it: **"AcademixHub Waitlist"**
4. In Row 1, add these headers:

```
| A        | B          | C       |
|----------|------------|---------|
| Email    | Date       | Time    |
```

---

### **Step 2: Create Google Apps Script**

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    var email = data.email;

    // Get current date and time
    var now = new Date();
    var date = Utilities.formatDate(now, "GMT+6", "yyyy-MM-dd");
    var time = Utilities.formatDate(now, "GMT+6", "HH:mm:ss");

    // Add the data to the sheet
    sheet.appendRow([email, date, time]);

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ result: "success", email: email })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ result: "success", message: "GET request received" })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Save** (disk icon)
5. Name the project: **"Waitlist Webhook"**

---

### **Step 3: Deploy as Web App**

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **"Web app"**
4. Configure:
   - **Description**: Waitlist Email Collector
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Authorize** the app (click "Authorize" → Select your account → Click "Advanced" → "Go to Waitlist Webhook" → "Allow")
7. **Copy the Web App URL** - it looks like:
   ```
   https://script.google.com/macros/s/ABC123.../exec
   ```
8. **Save this URL!** You'll need it in the next step

---

### **Step 4: Add URL to Your Code**

1. Open the file: `src/utils/saveToSheet.js`
2. Find this line:
   ```javascript
   const SHEET_URL = "YOUR_GOOGLE_SCRIPT_URL_HERE";
   ```
3. Replace with your actual URL from Step 3:
   ```javascript
   const SHEET_URL = "https://script.google.com/macros/s/YOUR_ID_HERE/exec";
   ```
4. **Save the file!**

---

## ✅ That's It! Now Test:

1. Go to your website
2. Fill out the waitlist form
3. Submit your email
4. **Check your Google Sheet** - you should see a new row with:
   - Email address
   - Date
   - Time

---

## 📊 What Happens Now

**Every time someone joins your waitlist:**

1. ✅ **Email saved to Google Sheets** (instant)
2. ✅ **Welcome email sent** via EmailJS
3. ✅ **Success message** shown on website
4. ✅ **Confetti animation** 🎉

---

## 🎨 Your Google Sheet Will Look Like:

```
| Email               | Date        | Time     |
|---------------------|-------------|----------|
| john@example.com    | 2024-12-04  | 14:23:15 |
| jane@example.com    | 2024-12-04  | 15:45:32 |
| mike@example.com    | 2024-12-05  | 09:12:08 |
```

---

## 📥 Exporting Your List

**To download your waitlist:**

1. Open your Google Sheet
2. Click **File** → **Download** → **CSV**
3. Now you have all emails in a file!

**Or copy-paste:**

- Select all emails in column A
- Copy (Ctrl+C)
- Paste into any document

---

## 🔧 Advanced Features (Optional)

### **Add More Columns**

Want to track more info? Add columns in your sheet:

- Column D: `Source` (where they signed up from)
- Column E: `Browser` (what browser they used)
- Column F: `Country` (their location)

Then update the Apps Script to save more data!

### **Email Notifications**

Want an email when someone signs up? Add this to your Apps Script:

```javascript
// After appending the row, add:
MailApp.sendEmail({
  to: "your-email@gmail.com",
  subject: "🎉 New Waitlist Signup!",
  body: "New email: " + email,
});
```

### **Duplicate Prevention**

Don't want duplicate emails? Add this check:

```javascript
// Before appending, add:
var existingEmails = sheet.getRange(2, 1, sheet.getLastRow()).getValues();
var emailExists = existingEmails.some((row) => row[0] === email);

if (emailExists) {
  return ContentService.createTextOutput(
    JSON.stringify({ result: "duplicate", email: email })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

---

## 🆘 Troubleshooting

### **"Authorization required" error?**

- Go back to Apps Script
- Click Deploy → Manage Deployments
- Click Edit (pencil icon)
- Make sure "Who has access" is set to **"Anyone"**
- Save and get new URL

### **Emails not appearing in sheet?**

1. Check browser console (F12) for errors
2. Make sure you copied the correct URL
3. Try the Apps Script's "Test" button
4. Check if sheet is the first tab (or update script to use correct tab)

### **Need to change which sheet?**

In Apps Script, change:

```javascript
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
```

---

## 💡 Why This Solution?

✅ **100% Free** - No paid services  
✅ **No backend needed** - Google handles everything  
✅ **Unlimited storage** - Google Sheets can handle thousands of emails  
✅ **Easy to use** - Everyone knows spreadsheets  
✅ **Exportable** - Download as CSV anytime  
✅ **Real-time** - Updates instantly  
✅ **Reliable** - Google's infrastructure

---

## 🎯 Alternative Options

If you prefer other solutions:

### **Option 2: Airtable** (Free tier: 1,200 records)

- Beautiful interface
- More features than Google Sheets
- API available
- [https://airtable.com](https://airtable.com)

### **Option 3: Notion** (Free)

- Nice database views
- Can embed forms
- Good for small lists
- [https://notion.so](https://notion.so)

### **Option 4: CSV Download**

- Store in browser localStorage
- User clicks "Download List" button
- Simple but limited

---

## ✅ You're All Set!

Now you have:

- ✅ Emails automatically saved to Google Sheets
- ✅ Welcome emails sent via EmailJS
- ✅ Easy access to your waitlist
- ✅ Ability to export anytime

**Your waitlist is now production-ready! 🚀**
