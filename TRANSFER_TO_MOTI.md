# 📋 מדריך להעברת הפרויקט לחשבון של מוטי פרץ

## שלב 1: מוטי יוצר ריפו חדש

1. מוטי נכנס ל-GitHub: https://github.com
2. לוחץ על "+" למעלה ובוחר "New repository"
3. שם הריפו: `learn` (או שם אחר)
4. **לא** לסמן "Initialize with README"
5. לוחץ "Create repository"

## שלב 2: עדכון הקבצים במחשב שלך

### 2.1 עדכן את package.json

פתח את הקובץ `package.json` ושנה את השורה:

```json
"homepage": "https://motiperetz.github.io/learn",
```

(שנה `motiperetz` לשם המשתמש האמיתי של מוטי ב-GitHub)

### 2.2 אין צורך לשנות את vite.config.js

הקובץ `vite.config.js` כבר מוגדר נכון עם `base: '/learn/'`

## שלב 3: העברת הקוד לריפו של מוטי

פתח טרמינל והרץ:

```bash
cd /home/linoy/Documents/personal/examHelper

# הסר את ה-remote הישן
git remote remove origin

# הוסף את ה-remote החדש של מוטי
git remote add origin https://github.com/motiperetz/learn.git

# דחוף את הקוד
git push -u origin main
```

## שלב 4: הפעלת GitHub Pages

מוטי צריך:

1. להיכנס לריפו: https://github.com/motiperetz/learn
2. ללחוץ על **Settings**
3. בצד שמאל, ללחוץ על **Pages**
4. תחת **Source**, לבחור:
   - Branch: **`gh-pages`**
   - Folder: **`/ (root)`**
5. ללחוץ **Save**

## שלב 5: הרצת ה-Deployment הראשון

```bash
npm run deploy
```

זה יבנה את האפליקציה וידחוף אותה ל-branch `gh-pages`.

## ✅ סיימנו!

האתר יהיה זמין ב:
```
https://motiperetz.github.io/learn/
```

(החלף `motiperetz` בשם המשתמש האמיתי)

---

## 🔐 אם מוטי רוצה שהפרויקט יהיה פרטי

אפשר לשנות את הריפו ל-Private:
1. Settings → General
2. גלול למטה ל-"Danger Zone"
3. "Change repository visibility" → "Make private"

**שים לב:** GitHub Pages לא עובד עם ריפו פרטי בחשבון חינמי.

---

## 📞 צור קשר

אם יש בעיות, פנה למוטי או לדניאל לעזרה!

