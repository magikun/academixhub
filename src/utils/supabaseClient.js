import { createClient } from "@supabase/supabase-js";

// Get these from: Supabase Dashboard → Settings → API
const SUPABASE_URL = "https://yvvuxclqgrwvatxopajl.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2dnV4Y2xxZ3J3dmF0eG9wYWpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4NTM4ODYsImV4cCI6MjA4MDQyOTg4Nn0.spgPMcyoV5SDHRRv1CK6CvQjTtb9672spxpMhkkcG1w";

// Create Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Save email to PostgreSQL database (via Supabase)
 */
export const saveEmailToDatabase = async (email) => {
  // Debug: Log configuration status
  console.log("🔍 Checking Supabase configuration...");
  console.log("URL configured:", SUPABASE_URL !== "YOUR_SUPABASE_URL");
  console.log(
    "Key configured:",
    SUPABASE_ANON_KEY !== "YOUR_SUPABASE_ANON_KEY"
  );

  // Check if configured
  if (
    SUPABASE_URL === "YOUR_SUPABASE_URL" ||
    SUPABASE_ANON_KEY === "YOUR_SUPABASE_ANON_KEY"
  ) {
    console.warn("⚠️ Supabase not configured. Email not saved to database.");
    console.log("📧 Would have saved:", email);
    return { success: true, demo: true };
  }

  console.log("✅ Supabase configured! Attempting to save email...");

  try {
    // Insert email into database
    const { data, error } = await supabase
      .from("waitlist")
      .insert([
        {
          email: email,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      throw error;
    }

    console.log("✅ Email saved to PostgreSQL database:", email);
    return { success: true, data: data };
  } catch (error) {
    console.error("❌ Error saving to database:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Check if database is configured
 */
export const isDatabaseConfigured = () => {
  return (
    SUPABASE_URL !== "YOUR_SUPABASE_URL" &&
    SUPABASE_ANON_KEY !== "YOUR_SUPABASE_ANON_KEY"
  );
};

/**
 * Get all emails from database (for admin use)
 */
export const getAllEmails = async () => {
  try {
    const { data, error } = await supabase
      .from("waitlist")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return { success: true, emails: data };
  } catch (error) {
    console.error("Error fetching emails:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Get total count of emails
 */
export const getEmailCount = async () => {
  try {
    const { count, error } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    if (error) throw error;
    return { success: true, count: count };
  } catch (error) {
    console.error("Error getting count:", error);
    return { success: false, error: error.message };
  }
};
