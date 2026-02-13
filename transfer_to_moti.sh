#!/bin/bash

# 🔄 סקריפט להעברת הפרויקט לחשבון של מוטי פרץ

echo "🚀 מתחיל העברה לחשבון של מוטי פרץ..."
echo ""

# בדוק אם הוזן שם משתמש
if [ -z "$1" ]; then
    echo "❌ שגיאה: לא הוזן שם משתמש!"
    echo ""
    echo "שימוש:"
    echo "  ./transfer_to_moti.sh USERNAME"
    echo ""
    echo "דוגמה:"
    echo "  ./transfer_to_moti.sh motiperetz"
    echo ""
    exit 1
fi

MOTI_USERNAME=$1
REPO_NAME="learn"

echo "📝 פרטים:"
echo "  שם משתמש: $MOTI_USERNAME"
echo "  שם ריפו: $REPO_NAME"
echo "  כתובת: https://github.com/$MOTI_USERNAME/$REPO_NAME"
echo ""

# שאל אישור
read -p "❓ האם הפרטים נכונים? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ בוטל על ידי המשתמש"
    exit 1
fi

echo ""
echo "1️⃣ מעדכן את package.json..."

# עדכן את package.json
sed -i "s|\"homepage\": \"https://.*\"|\"homepage\": \"https://$MOTI_USERNAME.github.io/$REPO_NAME\"|" package.json

if [ $? -eq 0 ]; then
    echo "   ✅ package.json עודכן בהצלחה"
else
    echo "   ❌ שגיאה בעדכון package.json"
    exit 1
fi

echo ""
echo "2️⃣ מעדכן את ה-remote..."

# הסר remote ישן
git remote remove origin 2>/dev/null

# הוסף remote חדש
git remote add origin "https://github.com/$MOTI_USERNAME/$REPO_NAME.git"

if [ $? -eq 0 ]; then
    echo "   ✅ Remote עודכן ל: https://github.com/$MOTI_USERNAME/$REPO_NAME.git"
else
    echo "   ❌ שגיאה בעדכון remote"
    exit 1
fi

echo ""
echo "3️⃣ עושה commit לשינויים..."

git add package.json
git commit -m "Update homepage for transfer to $MOTI_USERNAME account"

echo ""
echo "4️⃣ דוחף לריפו החדש..."

git push -u origin main

if [ $? -eq 0 ]; then
    echo "   ✅ הקוד נדחף בהצלחה!"
else
    echo "   ❌ שגיאה בדחיפה. וודא שמוטי כבר יצר את הריפו ב-GitHub"
    echo "   מוטי צריך:"
    echo "   1. להיכנס ל: https://github.com/new"
    echo "   2. ליצור ריפו בשם: $REPO_NAME"
    echo "   3. לא לסמן 'Initialize with README'"
    exit 1
fi

echo ""
echo "✅ ההעברה הושלמה בהצלחה!"
echo ""
echo "📋 השלבים הבאים למוטי:"
echo ""
echo "1. הפעל GitHub Pages:"
echo "   - היכנס ל: https://github.com/$MOTI_USERNAME/$REPO_NAME/settings/pages"
echo "   - תחת Source, בחר: Branch = gh-pages, Folder = / (root)"
echo "   - לחץ Save"
echo ""
echo "2. הרץ deployment ראשון:"
echo "   npm run deploy"
echo ""
echo "3. האתר יהיה זמין ב:"
echo "   🌐 https://$MOTI_USERNAME.github.io/$REPO_NAME/"
echo ""
echo "🎉 בהצלחה!"

