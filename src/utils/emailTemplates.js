// HTML Email Templates for AcademixHub

export const getWelcomeEmailHTML = (userEmail) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to AcademixHub</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #F5F3EF;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        
        <!-- Main Container -->
        <table role="presentation" style="width: 600px; max-width: 100%; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
          
          <!-- Header with Gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #0D2B4E 0%, #2F6FBF 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 800;">
                🎉 Welcome to AcademixHub!
              </h1>
              <p style="margin: 10px 0 0; color: #ffffff; font-size: 16px; opacity: 0.9;">
                You're now on the waitlist for our next tournament
              </p>
            </td>
          </tr>
          
          <!-- Hero Image/Icon Section -->
          <tr>
            <td style="padding: 40px 30px 20px; text-align: center; background-color: #F5F3EF;">
              <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #3E8E3A, #F4C542); border-radius: 50%; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 40px;">
                ✨
              </div>
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 0 40px 30px; color: #0D2B4E;">
              <h2 style="color: #0D2B4E; font-size: 24px; margin: 0 0 15px;">
                What's Next?
              </h2>
              <p style="color: #0D2B4E; opacity: 0.8; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                Thank you for joining AcademixHub! You've been added to our exclusive waitlist for the upcoming tournament.
              </p>
              
              <!-- Benefits Box -->
              <table role="presentation" style="width: 100%; background-color: #F5F3EF; border-radius: 12px; padding: 20px; margin: 20px 0;">
                <tr>
                  <td>
                    <h3 style="color: #3E8E3A; font-size: 18px; margin: 0 0 15px;">
                      🎯 What You'll Get:
                    </h3>
                    <ul style="color: #0D2B4E; opacity: 0.8; font-size: 15px; line-height: 1.8; margin: 0; padding-left: 20px;">
                      <li>Early access to tournament registration</li>
                      <li>Exclusive updates about challenges and prizes</li>
                      <li>Access to mentorship opportunities</li>
                      <li>Networking with fellow innovators</li>
                      <li>Resources to prepare for the competition</li>
                    </ul>
                  </td>
                </tr>
              </table>
              
              <p style="color: #0D2B4E; opacity: 0.8; font-size: 16px; line-height: 1.6; margin: 20px 0;">
                We'll send you an email as soon as registration opens. In the meantime, follow us on social media to stay connected!
              </p>
            </td>
          </tr>
          
          <!-- CTA Button -->
          <tr>
            <td style="padding: 0 40px 40px; text-align: center;">
              <table role="presentation" style="margin: 0 auto;">
                <tr>
                  <td style="background: linear-gradient(135deg, #3E8E3A, #2F6FBF); border-radius: 12px; padding: 15px 35px;">
                    <a href="https://t.me/+NfgWEYGdCDVhMTYy" style="color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 600; display: inline-block;">
                      Join Our Telegram Community →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Social Links -->
          <tr>
            <td style="padding: 30px 40px; background-color: #F5F3EF; border-top: 1px solid #e0e0e0;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="text-align: center;">
                    <p style="color: #0D2B4E; opacity: 0.7; font-size: 14px; margin: 0 0 15px;">
                      Connect with us:
                    </p>
                    <table role="presentation" style="margin: 0 auto;">
                      <tr>
                        <td style="padding: 0 10px;">
                          <a href="https://t.me/+NfgWEYGdCDVhMTYy" style="color: #2F6FBF; text-decoration: none; font-size: 14px;">
                            Telegram
                          </a>
                        </td>
                        <td style="padding: 0 10px;">
                          <a href="https://www.instagram.com/academixhubglobal/" style="color: #2F6FBF; text-decoration: none; font-size: 14px;">
                            Instagram
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; text-align: center; background-color: #0D2B4E;">
              <p style="color: #ffffff; opacity: 0.7; font-size: 13px; margin: 0 0 10px;">
                © ${new Date().getFullYear()} AcademixHub. All rights reserved.
              </p>
              <p style="color: #ffffff; opacity: 0.7; font-size: 12px; margin: 0;">
                Astana, Kazakhstan
              </p>
              <p style="color: #ffffff; opacity: 0.5; font-size: 11px; margin: 15px 0 0;">
                You received this email because you signed up for the AcademixHub waitlist.
              </p>
            </td>
          </tr>
          
        </table>
        
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

// Plain text version (fallback)
export const getWelcomeEmailText = (userEmail) => {
  return `
Welcome to AcademixHub!

🎉 You're now on the waitlist for our next tournament

Thank you for joining AcademixHub! You've been added to our exclusive waitlist for the upcoming tournament.

What You'll Get:
• Early access to tournament registration
• Exclusive updates about challenges and prizes
• Access to mentorship opportunities
• Networking with fellow innovators
• Resources to prepare for the competition

We'll send you an email as soon as registration opens. In the meantime, follow us on social media to stay connected!

Join Our Telegram Community: https://t.me/+NfgWEYGdCDVhMTYy
Instagram: https://www.instagram.com/academixhubglobal/

---
© ${new Date().getFullYear()} AcademixHub. All rights reserved.
Astana, Kazakhstan

You received this email because you signed up for the AcademixHub waitlist.
  `.trim()
}

