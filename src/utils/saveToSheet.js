import axios from "axios";

// Your Google Apps Script Web App URL
// Get this from: Extensions → Apps Script → Deploy → Web App URL
const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbz1adtS7laSIryWN0ITDcJzSgoSEkRZPua7QKuJr1Cza0IlkqHfzquSv2NfygqlP70d/exec"; // Replace with your actual URL

/**
 * Save email to Google Sheets
 * @param {string} email - The email address to save
 * @returns {Promise} - Resolves when saved successfully
 */
export const saveEmailToSheet = async (email) => {
  // Check if URL is configured
  if (SHEET_URL === "YOUR_GOOGLE_SCRIPT_URL_HERE") {
    console.warn(
      "⚠️ Google Sheets URL not configured. Email not saved to sheet."
    );
    console.log("📧 Would have saved:", email);
    return { success: true, demo: true };
  }

  try {
    const response = await axios.post(
      SHEET_URL,
      {
        email: email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Email saved to Google Sheets:", email);
    return response.data;
  } catch (error) {
    console.error("❌ Error saving to Google Sheets:", error);
    // Don't throw error - we still want to send the email even if sheet save fails
    return { success: false, error: error.message };
  }
};

/**
 * Check if Google Sheets is configured
 */
export const isSheetsConfigured = () => {
  return SHEET_URL !== "YOUR_GOOGLE_SCRIPT_URL_HERE";
};
