# ⚡ Quick Start - Email Setup (5 Minutes)

## 🎯 Goal
Enable real email sending for your waitlist form with **styled HTML emails**.

---

## 🚀 Setup in 3 Steps

### 1️⃣ Create EmailJS Account
👉 Go to: [https://www.emailjs.com/](https://www.emailjs.com/)  
- Sign up (free)
- Verify email

### 2️⃣ Get Your Keys
In EmailJS dashboard:
1. **Add Email Service** → Connect Gmail → Copy **Service ID**
2. **Create Template** → Name it "Waitlist Welcome" → Copy **Template ID**
3. **Account Settings** → Copy **Public Key**

### 3️⃣ Add Keys to Project
Open `src/utils/emailConfig.js` and replace:

```javascript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_xxx',    // ← Your Service ID
  TEMPLATE_ID: 'template_xxx',  // ← Your Template ID  
  PUBLIC_KEY: 'xxxxxxx'         // ← Your Public Key
}
```

**That's it!** ✅

---

## ✅ Test It

1. Run: `npm run dev`
2. Go to homepage → "Join the Waitlist"
3. Enter your email
4. Check your inbox! 📧

---

## 📧 What You Get

✨ **Beautiful HTML email** with:
- Gradient header with your brand colors
- Welcome message with emoji
- Benefits list
- CTA button to Telegram
- Social media links  
- Professional footer

**200 free emails/month** on free tier!

---

## 📖 Need More Details?

See `EMAIL_SETUP_GUIDE.md` for:
- Detailed step-by-step instructions
- Customization options
- Adding your logo
- Troubleshooting
- Upgrading options

---

## 🎨 Quick Customization

**Change email text**: Edit `src/utils/emailTemplates.js`  
**Add logo**: Replace emoji with `<img>` tag  
**Change colors**: Update hex codes in template

---

**Questions?** academixhubglobal@gmail.com

