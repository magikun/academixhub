# 📧 Email Setup Guide for AcademixHub Waitlist

This guide will help you set up **real email sending** for your waitlist form using EmailJS (FREE service).

---

## 🎯 What You Get

✅ **Beautiful styled HTML emails** with your branding  
✅ **Automatic welcome emails** when users join waitlist  
✅ **Free tier**: 200 emails/month (perfect for starting out)  
✅ **No backend required** - works entirely from the browser  
✅ **Email templates** with images, colors, and links  

---

## 📋 Step-by-Step Setup

### **Step 1: Create EmailJS Account** (5 minutes)

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up Free"**
3. Create an account (use your Gmail or any email)
4. Verify your email address

---

### **Step 2: Add Email Service** (3 minutes)

1. In your EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **Gmail** (recommended) or any other email provider
4. Click **"Connect Account"** and authorize Gmail
5. **Copy the Service ID** (something like `service_abc123`)

---

### **Step 3: Create Email Template** (5 minutes)

1. Go to **"Email Templates"** in the sidebar
2. Click **"Create New Template"**
3. **Template Name**: `Waitlist Welcome`
4. In the **template editor**, paste this:

```html
Subject: 🎉 Welcome to AcademixHub Waitlist!

---

{{message_html}}
```

5. **Important Settings**:
   - **From Name**: `AcademixHub`
   - **From Email**: Your verified email (e.g., `academixhubglobal@gmail.com`)
   - **Reply To**: `{{reply_to}}`
   - **To Email**: `{{to_email}}`

6. Click **"Save"**
7. **Copy the Template ID** (something like `template_xyz789`)

---

### **Step 4: Get Public Key** (1 minute)

1. Go to **"Account"** → **"General"** in the sidebar
2. Find **"Public Key"** section
3. **Copy the Public Key** (something like `abcXYZ123456`)

---

### **Step 5: Add Keys to Your Project** (2 minutes)

1. Open `src/utils/emailConfig.js`
2. Replace the placeholder values:

```javascript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_abc123',      // ← Paste your Service ID here
  TEMPLATE_ID: 'template_xyz789',    // ← Paste your Template ID here
  PUBLIC_KEY: 'abcXYZ123456'         // ← Paste your Public Key here
}
```

3. **Save the file**

---

## ✅ Test Your Setup

1. Run your development server: `npm run dev`
2. Go to your website's homepage
3. Scroll down to the **"Join the Waitlist"** section
4. Enter your email address
5. Click **"Get Started"**
6. **Check your inbox** - you should receive a beautiful welcome email! 🎉

---

## 📧 What the Email Looks Like

The email your users will receive includes:

- 🎨 **Beautiful gradient header** with your branding colors
- ✨ **Welcome message** with emoji and styling
- 📋 **Benefits list** showing what they'll get
- 🔗 **CTA button** linking to your Telegram community
- 📱 **Social media links** (Telegram & Instagram)
- 🏢 **Professional footer** with your info

---

## 🎨 Customizing the Email

### Change Email Content

Edit `src/utils/emailTemplates.js` to customize:

- Welcome message text
- Benefits list
- Button text and links
- Colors and styling
- Images (add `<img>` tags with URLs)

### Add Your Logo

Replace the emoji (✨) with your logo image:

```html
<img src="https://your-website.com/logo.png" 
     alt="AcademixHub Logo" 
     style="width: 80px; height: 80px;" />
```

### Change Colors

Current brand colors in the email:
- **Navy**: `#0D2B4E` (primary dark)
- **Blue**: `#2F6FBF` (primary)
- **Green**: `#3E8E3A` (success)
- **Yellow**: `#F4C542` (accent)

---

## 📊 Upgrade Options (If Needed)

**Free Tier**: 200 emails/month  
**Personal Plan** ($7/month): 1,000 emails/month  
**Professional Plan** ($15/month): 10,000 emails/month  

---

## 🔧 Troubleshooting

### Email not sending?

1. Check browser console for errors
2. Verify all 3 keys are correctly copied
3. Make sure email service is connected in EmailJS dashboard
4. Check EmailJS dashboard → "Logs" to see if requests are coming through

### Email goes to spam?

1. In EmailJS, verify your domain
2. Add SPF records to your domain
3. Ask recipients to mark email as "Not Spam"

### Need help?

- EmailJS Docs: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Contact: academixhubglobal@gmail.com

---

## 🚀 You're All Set!

Your waitlist form will now send **beautiful, professional emails** to every user who signs up. The emails are:

✅ Mobile-responsive  
✅ Professionally designed  
✅ On-brand with your colors  
✅ Include all important links  
✅ Look great in all email clients  

**Happy emailing! 📧✨**

