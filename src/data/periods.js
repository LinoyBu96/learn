// תקופות מוזיקליות - מודרניזם
export const periods = [
  {
    id: 1,
    name: "רומנטיקה מאוחרת",
    years: "1850-1900",
    description: "תקופת השיא של הרומנטיקה, השפעת וגנר, התפתחות הסימפוניה והאופרה",
    color: "#8B4789",
    composers: [
      {
        name: "Richard Wagner",
        years: "1813-1883",
        importance: "מהפכן באופרה, Gesamtkunstwerk",
        works: [
          "Tristan und Isolde (1859)",
          "Der Ring des Nibelungen (1876)",
          "Parsifal (1882)"
        ]
      },
      {
        name: "Johannes Brahms",
        years: "1833-1897",
        importance: "שמרן, המשך המסורת הקלאסית",
        works: [
          "Symphony No. 4 (1885)",
          "Clarinet Quintet (1891)",
          "German Requiem (1868)"
        ]
      },
      {
        name: "Anton Bruckner",
        years: "1824-1896",
        importance: "סימפוניות מונומנטליות",
        works: [
          "Symphony No. 7 (1883)",
          "Symphony No. 8 (1887)",
          "Symphony No. 9 (1896)"
        ]
      },
      {
        name: "Gustav Mahler",
        years: "1860-1911",
        importance: "גשר לעידן המודרני",
        works: [
          "Symphony No. 1 (1888)",
          "Das Lied von der Erde (1909)",
          "Symphony No. 9 (1910)"
        ]
      }
    ],
    movements: ["וגנריזם", "ברהמסיאניזם", "סימפוניה מונומנטלית"]
  },
  {
    id: 2,
    name: "לאומיות",
    years: "1860-1920",
    description: "תנועות לאומיות במוזיקה, שימוש בפולקלור ובמוטיבים עממיים",
    color: "#2E7D32",
    composers: [
      {
        name: "Modest Musorgsky",
        years: "1839-1881",
        importance: "החמישייה הרוסית, שפה רוסית ייחודית",
        works: [
          "Boris Godunov (1869/1872)",
          "Pictures at an Exhibition (1874)",
          "Night on Bald Mountain (1867)"
        ]
      },
      {
        name: "Alexander Borodin",
        years: "1833-1887",
        importance: "החמישייה הרוסית, אוריינטליזם",
        works: [
          "Prince Igor (1890)",
          "In the Steppes of Central Asia (1880)",
          "String Quartet No. 2 (1881)"
        ]
      },
      {
        name: "Edvard Grieg",
        years: "1843-1907",
        importance: "לאומיות נורווגית",
        works: [
          "Peer Gynt (1875)",
          "Piano Concerto (1868)",
          "Lyric Pieces"
        ]
      },
      {
        name: "Béla Bartók",
        years: "1881-1945",
        importance: "נאו-פולקלוריזם, מחקר פולקלור",
        works: [
          "Romanian Dances (1915)",
          "Music for Strings, Percussion and Celesta (1936)",
          "Concerto for Orchestra (1943)"
        ]
      }
    ],
    movements: ["החמישייה הרוסית", "לאומיות סקנדינבית", "נאו-פולקלוריזם"]
  },
  {
    id: 3,
    name: "אימפרסיוניזם וסימבוליזם",
    years: "1890-1920",
    description: "שבירת הטונאליות המסורתית, צבעי תזמורת, השפעות מהמזרח",
    color: "#1976D2",
    composers: [
      {
        name: "Claude Debussy",
        years: "1862-1918",
        importance: "אימפרסיוניזם, שבירת הטונאליות",
        works: [
          "Prélude à l'après-midi d'un faune (1894)",
          "Pelléas et Mélisande (1902)",
          "La Mer (1905)",
          "Preludes (1910-1913)"
        ]
      },
      {
        name: "Alexander Scriabin",
        years: "1872-1915",
        importance: "סימבוליזם, מיסטיציזם, סינסתזיה",
        works: [
          "Le poème de l'extase (1908)",
          "Prométhée (1910)",
          "Piano Sonatas"
        ]
      }
    ],
    movements: ["אימפרסיוניזם", "סימבוליזם", "סינסתזיה"]
  },
  {
    id: 4,
    name: "וריזמו",
    years: "1890-1920",
    description: "ריאליזם באופרה האיטלקית, דרמטיות ורגשנות",
    color: "#D32F2F",
    composers: [
      {
        name: "Giacomo Puccini",
        years: "1858-1924",
        importance: "מאסטרו האופרה האיטלקית",
        works: [
          "La Bohème (1896)",
          "Tosca (1900)",
          "Madama Butterfly (1904)",
          "Turandot (1926)"
        ]
      }
    ],
    movements: ["וריזמו"]
  },
  {
    id: 5,
    name: "אקספרסיוניזם ואטונליות",
    years: "1900-1925",
    description: "שבירת הטונאליות, אטונליות חופשית, ביטוי רגשי קיצוני",
    color: "#7B1FA2",
    composers: [
      {
        name: "Arnold Schoenberg",
        years: "1874-1951",
        importance: "שבירת הטונאליות, דודקפוניה",
        works: [
          "Verklärte Nacht (1899)",
          "Pierrot Lunaire (1912)",
          "Moses und Aron (1932)",
          "A Survivor from Warsaw (1947)"
        ]
      },
      {
        name: "Alban Berg",
        years: "1885-1935",
        importance: "תלמיד שנברג, שילוב רומנטיקה ואטונליות",
        works: [
          "Wozzeck (1925)",
          "Lulu (1937)",
          "Lyrische Suite (1926)",
          "Violin Concerto (1935)"
        ]
      },
      {
        name: "Anton Webern",
        years: "1883-1945",
        importance: "תלמיד שנברג, מינימליזם",
        works: [
          "Five Pieces for Orchestra (1913)",
          "Symphony Op. 21 (1928)",
          "Variations for Piano (1936)"
        ]
      }
    ],
    movements: ["אקספרסיוניזם", "אטונליות חופשית", "בית הספר של וינה"]
  },
  {
    id: 6,
    name: "פרימיטיביזם ונאו-קלאסיציזם",
    years: "1910-1930",
    description: "חזרה למקורות, ריתמוס פראי, פשטות קלאסית",
    color: "#F57C00",
    composers: [
      {
        name: "Igor Stravinsky",
        years: "1882-1971",
        importance: "שבירת הריתמוס, סגנונות מגוונים",
        works: [
          "The Firebird (1910)",
          "Petrushka (1911)",
          "Le sacre du printemps (1913)",
          "Oedipus Rex (1927)",
          "Symphony of Psalms (1930)"
        ]
      }
    ],
    movements: ["פרימיטיביזם", "נאו-קלאסיציזם", "הבלט הרוסי"]
  },
  {
    id: 7,
    name: "מודרניזם אמריקאי",
    years: "1910-1940",
    description: "התפתחות מוזיקה אמריקאית עצמאית, ג'אז וניסויים",
    color: "#0288D1",
    composers: [
      {
        name: "Charles Ives",
        years: "1874-1954",
        importance: "חלוץ המודרניזם האמריקאי",
        works: [
          "The Unanswered Question (1908)",
          "Three Places in New England (1914)",
          "Concord Sonata (1915)"
        ]
      },
      {
        name: "George Gershwin",
        years: "1898-1937",
        importance: "שילוב ג'אז וקלאסיקה",
        works: [
          "Rhapsody in Blue (1924)",
          "An American in Paris (1928)",
          "Porgy and Bess (1935)"
        ]
      }
    ],
    movements: ["מודרניזם אמריקאי", "ג'אז סימפוני"]
  },
  {
    id: 8,
    name: "דודקפוניה וסריאליזם",
    years: "1920-1945",
    description: "שיטת 12 הצלילים, סדר קבוע של צלילים",
    color: "#5E35B1",
    composers: [
      {
        name: "Arnold Schoenberg",
        years: "1874-1951",
        importance: "ממציא הדודקפוניה",
        works: [
          "Suite for Piano Op. 25 (1923)",
          "Variations for Orchestra (1928)",
          "Piano Concerto (1942)"
        ]
      },
      {
        name: "Alban Berg",
        years: "1885-1935",
        importance: "דודקפוניה עם רגש רומנטי",
        works: [
          "Lyrische Suite (1926)",
          "Violin Concerto (1935)"
        ]
      },
      {
        name: "Anton Webern",
        years: "1883-1945",
        importance: "סריאליזם טוטאלי",
        works: [
          "Symphony Op. 21 (1928)",
          "Concerto Op. 24 (1934)"
        ]
      }
    ],
    movements: ["דודקפוניה", "סריאליזם", "בית הספר של וינה השני"]
  },
  {
    id: 9,
    name: "Gebrauchsmusik ונאו-קלאסיציזם",
    years: "1920-1940",
    description: "מוזיקה שימושית, פשטות, נגישות",
    color: "#689F38",
    composers: [
      {
        name: "Paul Hindemith",
        years: "1895-1963",
        importance: "מוזיקה שימושית, תיאוריה",
        works: [
          "Mathis der Maler (1938)",
          "Symphonic Metamorphosis (1943)",
          "Ludus Tonalis (1942)"
        ]
      }
    ],
    movements: ["Gebrauchsmusik", "נאו-קלאסיציזם גרמני"]
  },
  {
    id: 10,
    name: "מוזיקה תחת משטרים טוטליטריים",
    years: "1930-1945",
    description: "מוזיקה בתקופת הנאציזם והסטליניזם",
    color: "#424242",
    composers: [
      {
        name: "Dmitri Shostakovich",
        years: "1906-1975",
        importance: "מוזיקה תחת משטר סטליני",
        works: [
          "Symphony No. 5 (1937)",
          "Symphony No. 7 'Leningrad' (1941)",
          "Piano Trio No. 2 (1944)",
          "String Quartet No. 8 (1960)"
        ]
      },
      {
        name: "Olivier Messiaen",
        years: "1908-1992",
        importance: "מוזיקה דתית, שבוי מלחמה",
        works: [
          "Quatuor pour la fin du temps (1941)",
          "Turangalîla-Symphonie (1948)",
          "Catalogue d'oiseaux (1958)"
        ]
      }
    ],
    movements: ["ריאליזם סוציאליסטי", "מוזיקת התנגדות", "מוזיקה דתית"]
  }
];

// פונקציה לקבלת תקופה לפי שנה
export const getPeriodByYear = (year) => {
  return periods.find(period => {
    const [start, end] = period.years.split('-').map(y => parseInt(y));
    return year >= start && year <= end;
  });
};

// פונקציה לקבלת כל המלחינים מכל התקופות
export const getAllComposersFromPeriods = () => {
  const composersMap = new Map();
  
  periods.forEach(period => {
    period.composers.forEach(composer => {
      if (!composersMap.has(composer.name)) {
        composersMap.set(composer.name, {
          ...composer,
          periods: [period.name]
        });
      } else {
        const existing = composersMap.get(composer.name);
        existing.periods.push(period.name);
      }
    });
  });
  
  return Array.from(composersMap.values());
};

