# 📋 EmailJS Configuration - Code Location

## 🎯 FILE TO EDIT

```
d:\Portfolio\src\components\Contact.jsx
```

## 📍 EXACT LOCATION (Lines 27-29)

```javascript
1   import React, { useState } from 'react';
2   import emailjs from '@emailjs/browser';
3   
4   const Contact = () => {
5     const [formData, setFormData] = useState({
6       name: '',
7       email: '',
8       message: '',
9     });
10  
11    const [status, setStatus] = useState({
12      submitting: false,
13      submitted: false,
14      error: null,
15    });
16  
17    const handleChange = (e) => {
18      setFormData({
19        ...formData,
20        [e.target.name]: e.target.value,
21      });
22    };
23  
24    const handleSubmit = async (e) => {
25      e.preventDefault();
26      setStatus({ submitting: true, submitted: false, error: null });
27  
28      try {
29        // ⬇️ REPLACE THESE THREE LINES ⬇️
30        // ========================================
31        const serviceId = 'YOUR_SERVICE_ID';    // 🔴 PASTE YOUR SERVICE ID HERE
32        const templateId = 'YOUR_TEMPLATE_ID';  // 🟡 PASTE YOUR TEMPLATE ID HERE
33        const publicKey = 'YOUR_PUBLIC_KEY';    // 🟢 PASTE YOUR PUBLIC KEY HERE
34        // ========================================
35  
36        const templateParams = {
37          from_name: formData.name,
38          from_email: formData.email,
39          message: formData.message,
40          to_name: 'Roman Ahmad',
41        };
```

## ✏️ EXAMPLE (After Setup)

```javascript
// ✅ CORRECTLY CONFIGURED
const serviceId = 'service_abc1234';           // ← From EmailJS Dashboard
const templateId = 'template_xyz5678';         // ← From EmailJS Dashboard
const publicKey = 'aBcDeFgHiJkLmNoPqRsT';     // ← From EmailJS Dashboard
```

## ❌ COMMON MISTAKES

### Mistake 1: Extra Quotes
```javascript
// ❌ WRONG - Extra quotes
const serviceId = '"service_abc1234"';

// ✅ CORRECT
const serviceId = 'service_abc1234';
```

### Mistake 2: Extra Spaces
```javascript
// ❌ WRONG - Spaces in ID
const serviceId = 'service_abc 1234';

// ✅ CORRECT
const serviceId = 'service_abc1234';
```

### Mistake 3: Wrong Variable Name
```javascript
// ❌ WRONG - Changed variable name
const myServiceId = 'service_abc1234';

// ✅ CORRECT - Keep original name
const serviceId = 'service_abc1234';
```

## 🔍 HOW TO FIND YOUR IDS

### 🔴 SERVICE ID
1. Go to: https://dashboard.emailjs.com/admin
2. Click on your Gmail service
3. Look for "Service ID"
4. Format: `service_xxxxxxx`

### 🟡 TEMPLATE ID
1. Go to: https://dashboard.emailjs.com/admin/templates
2. Click on your template
3. Look for "Template ID"
4. Format: `template_xxxxxxx`

### 🟢 PUBLIC KEY
1. Go to: https://dashboard.emailjs.com/admin/account
2. Under "General" section
3. Look for "Public Key"
4. Format: `aBcDeFgHiJkLmNoPqR` (20 characters)

## 📝 STEP-BY-STEP REPLACEMENT

### Step 1: Find the Lines
Use Ctrl+F (Find) and search for: `YOUR_SERVICE_ID`

### Step 2: Replace Service ID
```javascript
// Before:
const serviceId = 'YOUR_SERVICE_ID';

// After (example):
const serviceId = 'service_abc1234';
```

### Step 3: Replace Template ID
```javascript
// Before:
const templateId = 'YOUR_TEMPLATE_ID';

// After (example):
const templateId = 'template_xyz5678';
```

### Step 4: Replace Public Key
```javascript
// Before:
const publicKey = 'YOUR_PUBLIC_KEY';

// After (example):
const publicKey = 'aBcDeFgHiJkLmNoPqR';
```

### Step 5: Save the File
Press `Ctrl+S` to save

## ✅ VERIFICATION

After pasting your IDs, your code should look like:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus({ submitting: true, submitted: false, error: null });

  try {
    // ✅ Your actual IDs from EmailJS
    const serviceId = 'service_abc1234';         // Real ID
    const templateId = 'template_xyz5678';       // Real ID
    const publicKey = 'aBcDeFgHiJkLmNoPqR';     // Real Key

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Roman Ahmad',
    };

    await emailjs.send(serviceId, templateId, templateParams, publicKey);
    // ... rest of code
```

## 🎯 QUICK TEST

After updating:

1. **Save file** (Ctrl+S)
2. Go to **http://localhost:5173**
3. Navigate to **Contact** section
4. Fill form with test data
5. Click **"Send Message"**
6. Should see: ✅ "Message sent successfully!"
7. Check your Gmail for the email

## 🐛 IF IT DOESN'T WORK

### Check 1: IDs are Correct
```javascript
// IDs should start with:
service_...   // Service ID
template_...  // Template ID
// Public key is alphanumeric (no prefix)
```

### Check 2: No Syntax Errors
```javascript
// Each line should end with semicolon
const serviceId = 'service_abc1234';   // ← semicolon here
```

### Check 3: Variables Match
```javascript
// Don't change these variable names:
serviceId    // Keep exactly as is
templateId   // Keep exactly as is
publicKey    // Keep exactly as is
```

### Check 4: Browser Console
1. Press `F12` to open DevTools
2. Click "Console" tab
3. Look for any red errors
4. Check for "EmailJS Error" messages

## 📞 STILL NEED HELP?

See the full guide: **EMAILJS_SETUP_GUIDE.md**

Or watch video tutorial:
https://www.youtube.com/watch?v=dgcYOm8n8ME

---

**Remember:** Just replace 3 lines and you're done! 🚀
