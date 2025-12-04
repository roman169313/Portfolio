# ⚡ QUICK SETUP - Contact Form Email

## 🎯 5-MINUTE SETUP

### 1️⃣ Sign Up
- Go to: https://www.emailjs.com/
- Click "Sign Up Free"
- Use your Gmail: roman169313@gmail.com

### 2️⃣ Add Gmail Service
- Dashboard → Email Services
- Click "Add New Service"
- Select "Gmail"
- Connect your account
- **COPY YOUR SERVICE ID** ✏️

### 3️⃣ Create Template
- Dashboard → Email Templates
- Click "Create New Template"
- Name: "Portfolio Contact"
- Content:
```
Subject: Portfolio Contact from {{from_name}}

Hello Roman,

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```
- Save
- **COPY YOUR TEMPLATE ID** ✏️

### 4️⃣ Get Public Key
- Dashboard → Account
- Under "General"
- **COPY YOUR PUBLIC KEY** ✏️

### 5️⃣ Update Code
Open: `src/components/Contact.jsx`

Find lines 27-29 and replace:

```javascript
const serviceId = 'YOUR_SERVICE_ID';      // ← Paste here
const templateId = 'YOUR_TEMPLATE_ID';    // ← Paste here
const publicKey = 'YOUR_PUBLIC_KEY';      // ← Paste here
```

### 6️⃣ TEST! 🎉
- Fill out your contact form
- Click "Send Message"
- Check your Gmail!

---

## 📍 WHERE TO PASTE IDS

File: **d:\Portfolio\src\components\Contact.jsx**  
Lines: **27-29**

Look for:
```javascript
// Replace these with your EmailJS credentials
const serviceId = 'YOUR_SERVICE_ID';      // ← HERE
const templateId = 'YOUR_TEMPLATE_ID';    // ← HERE
const publicKey = 'YOUR_PUBLIC_KEY';      // ← HERE
```

---

## ✅ WHAT YOU GET

✨ **Professional Email Delivery**
- Direct to your Gmail
- No backend needed
- 200 free emails/month

✨ **Beautiful UX**
- Success/error messages
- Loading spinner
- Auto-reset form

✨ **Mobile Ready**
- Works on all devices
- Touch-optimized
- Responsive design

---

## 🐛 TROUBLESHOOTING

**Not working?**
1. Check all 3 IDs are pasted correctly
2. No extra spaces or quotes
3. Gmail service is connected
4. Template is saved

**No email?**
- Check Gmail spam folder
- Verify template has correct email
- Check EmailJS dashboard logs

---

## 📚 FULL GUIDE

See: `EMAILJS_SETUP_GUIDE.md` for detailed instructions

---

## 🎯 SUCCESS CHECKLIST

- [ ] EmailJS account created
- [ ] Gmail connected
- [ ] Template created
- [ ] 3 IDs pasted in code
- [ ] Test email sent
- [ ] Email received ✉️

---

**That's it! Your contact form is ready! 🚀**
