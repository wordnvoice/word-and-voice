export type Book = {
  title: string;
  subtitle?: string;
  author?: string;
  language?: string;
  category?: "Bible" | "Devotional" | "Christian Book" | "Worship";
  image: string;
  amazonUrl?: string;
  kindleUrl?: string;
  featured?: boolean;
};

export const featuredBook: Book = {
  title: "Where Grace Rests",
  subtitle: "A 30 Day Devotional of Scripture, Poetry and Prayer",
  category: "Devotional",
  image: "/images/books/where-grace-rests.jpg",
  amazonUrl: "https://www.amazon.in/dp/B0FQ2T73YC",
  featured: true,
};

export const recommendedBooks: Book[] = [
  {
    title: "Grace for the Moment",
    subtitle:
      "Inspirational Thoughts for Each Day of the Year: 1: Inspirational Thoughts for Each Day of the Year (A 365-day Devotional)",
    author: "Max Lucado",
    language: "English",
    category: "Devotional",
    image: "/images/books/grace-for-the-moment.jpg",
    amazonUrl: "https://link.amazon/B02hjBgdW",
    kindleUrl: "https://link.amazon/B0ipVLx33",
  },

  {
    title: "Grace for the Moment Volume II",
    subtitle:
      "More Inspirational Thoughts for Each Day of the Year (A 365-Day Devotional)",
    author: "Max Lucado",
    language: "English",
    category: "Devotional",
    image: "/images/books/grace-for-the-moment-volume-ii.jpg",
    amazonUrl: "https://link.amazon/B0gHt3i2E",
  },

  {
    title: "Anxious for Nothing (Young Readers Edition)",
    subtitle: "Living Above Anxiety and Loneliness",
    author: "Max Lucado",
    language: "English",
    category: "Devotional",
    image: "/images/books/anxious-for-nothing.jpg",
    amazonUrl: "https://link.amazon/B05MhzTvJ",
  },

  {
    title: "You Are Never Alone",
    subtitle: "Trust in the Miracle of God's Presence and Power",
    author: "Max Lucado",
    language: "English",
    category: "Christian Book",
    image: "/images/books/you-are-never-alone.jpg",
    amazonUrl: "https://link.amazon/B07HnPhBP",
    kindleUrl: "https://link.amazon/B0ipVLx33",
  },

  {
    title: "Just Like Jesus",
    subtitle: "A Heart Like His",
    author: "Max Lucado",
    language: "English",
    category: "Christian Book",
    image: "/images/books/just-like-jesus.jpg",
    amazonUrl: "https://link.amazon/B0aNS2Soh",
    kindleUrl: "https://link.amazon/B00K9Mz2Q",
  },

  {
    title: "He Chose the Nails",
    subtitle: "What God Did to Win Your Heart",
    author: "Max Lucado",
    language: "English",
    category: "Christian Book",
    image: "/images/books/he-chose-the-nails.jpg",
    amazonUrl: "https://link.amazon/B0hLKvWEs",
    kindleUrl: "https://link.amazon/B08lDAEdp",
  },

  {
    title: "Prayer",
    subtitle: "Experiencing Awe and Intimacy with God",
    author: "Tim Keller",
    language: "English",
    category: "Christian Book",
    image: "/images/books/prayer.jpg",
    amazonUrl: "https://link.amazon/B0fOO4iYO",
    kindleUrl: "https://link.amazon/B0eh7DT3O",
  },

  {
    title: "The Reason for God",
    subtitle: "Belief in an Age of Scepticism",
    author: "Tim Keller",
    language: "English",
    category: "Christian Book",
    image: "/images/books/the-reason-for-god.jpg",
    amazonUrl: "https://link.amazon/B06HtFWQE",
    kindleUrl: "https://link.amazon/B0bbWAnrm",
  },

  {
    title: "The Prodigal God",
    subtitle: "Recovering the Heart of the Christian Faith",
    author: "Tim Keller",
    language: "English",
    category: "Christian Book",
    image: "/images/books/the-prodigal-god.jpg",
    amazonUrl: "https://link.amazon/B02hJh3rF",
    kindleUrl: "https://link.amazon/B0fHxWUf4",
  },

  {
    title: "Counterfeit Gods",
    subtitle:
      "When the Empty Promises of Love, Money and Power Let You Down",
    author: "Tim Keller",
    language: "English",
    category: "Christian Book",
    image: "/images/books/counterfeit-gods.jpg",
    amazonUrl: "https://link.amazon/B0bkygulR",
    kindleUrl: "https://link.amazon/B0ixMY0YE",
  },

  {
    title: "Mere Christianity",
    author: "C.S. Lewis",
    language: "English",
    category: "Christian Book",
    image: "/images/books/mere-christianity.jpg",
    amazonUrl: "https://link.amazon/B00wF71wN",
  },

  {
    title: "NKJV Study Bible",
    language: "English",
    category: "Bible",
    image: "/images/books/nkjv-study-bible.jpg",
    amazonUrl: "https://link.amazon/B09NRSl9b",
  },

  {
    title: "Study Bible — ESV",
    author: "Crossway",
    language: "English",
    category: "Bible",
    image: "/images/books/esv-study-bible.jpg",
    amazonUrl: "https://link.amazon/B04dVAYaq",
  },

  {
    title: "NIV Life Application Study Bible",
    subtitle: "Third Edition, Personal Size (Leatherlike, Berry)",
    author: "Tyndale House Publishers",
    language: "English",
    category: "Bible",
    image: "/images/books/niv-life-application-study-bible.jpg",
    amazonUrl: "https://link.amazon/B0cOiu4me",
  },

  {
    title:
      "NKJV Gift and Award Bible, Leather-Look, Burgundy, Red Letter, Comfort Print",
    author: "Thomas Nelson",
    language: "English",
    category: "Bible",
    image: "/images/books/nkjv-gift-award-bible.jpg",
    amazonUrl: "https://link.amazon/B0bDUq8pQ",
  },

  {
    title: "ESV Church Bible (Black)",
    author: "Crossway",
    language: "English",
    category: "Bible",
    image: "/images/books/esv-church-bible-black.jpg",
    amazonUrl: "https://link.amazon/B05kJfvPT",
  },

  {
    title: "NIV Gift and Award Bible",
    author: "Zondervan",
    language: "English",
    category: "Bible",
    image: "/images/books/niv-gift-award-bible.jpg",
    amazonUrl: "https://link.amazon/B04Ce1WIt",
  },

  {
    title: "NLT Premium Value Thinline Bible",
    subtitle:
      "Filament Enabled Edition (Leatherlike, Bouquet Teal)",
    author: "Tyndale",
    language: "English",
    category: "Bible",
    image: "/images/books/nlt-premium-value-thinline-bible.jpg",
    amazonUrl: "https://link.amazon/B05S6EnBD",
  },

  {
    title: "The Holy Bible — Hindi BSI",
    subtitle:
      "Semi Compact Edition containing Old and New Testament",
    author: "BSI",
    language: "Hindi",
    category: "Bible",
    image: "/images/books/holy-bible-hindi-bsi.jpg",
    amazonUrl: "https://link.amazon/B0ezxfxzQ",
  },

  {
    title: "Pavitra Bible Hindi O.V.",
    subtitle:
      "Re-Edited New Updated Cover containing Old and New Testament",
    author: "God's Word",
    language: "Hindi",
    category: "Bible",
    image: "/images/books/hindi-ov-bible.jpg",
    amazonUrl: "https://link.amazon/B07BpSnfP",
  },

  {
    title: "Illustrated Hindi Holy Bible",
    subtitle:
      "Old and New Testament | Easy-to-Read Version | Hardbound Study Bible with References",
    author: "World Bible Translation Center",
    language: "Hindi",
    category: "Bible",
    image: "/images/books/illustrated-hindi-holy-bible.jpg",
    amazonUrl: "https://link.amazon/B00cMTC3A",
  },

  {
    title: "ESV Hindi Diglot Bible",
    subtitle:
      "Royal Brown Regular Yapp — Old and New Testament",
    author: "God's Word",
    language: "Hindi/English",
    category: "Bible",
    image: "/images/books/esv-hindi-diglot-bible.jpg",
    amazonUrl: "https://link.amazon/B08Qr1xeE",
  },

  {
    title: "Telugu Holy Bible O.V.-N.F BSI Version",
    subtitle: "Containing Old and New Testament",
    author: "God's Word",
    language: "Telugu",
    category: "Bible",
    image: "/images/books/telugu-holy-bible.jpg",
    amazonUrl: "https://link.amazon/B03gSseyr",
  },

  {
    title: "Holy Bible Tamil — Medium Size",
    subtitle: "With Index",
    language: "Tamil",
    category: "Bible",
    image: "/images/books/holy-bible-tamil-medium-size.jpg",
    amazonUrl: "https://link.amazon/B0gIoiOis",
  },

  {
    title: "Malayalam Bible Large Font",
    subtitle: "Premium Leathersoft Black Cover",
    language: "Malayalam",
    category: "Bible",
    image: "/images/books/malayalam-bible-large-font.jpg",
    amazonUrl: "https://link.amazon/B0f9bBXtv",
  },

  {
    title: "Kannada Holy Bible",
    subtitle:
      "Flexibound Edition with Red Side Edges | Complete Old & New Testament",
    author: "The Bible Society of India",
    language: "Kannada",
    category: "Bible",
    image: "/images/books/kannada-holy-bible.jpg",
    amazonUrl: "https://link.amazon/B0d0kwbBQ",
  },

  {
    title: "Bengali Holy Bible",
    subtitle:
      "Flexibound Edition with Red Side Edges | Complete Old & New Testament",
    author: "The Bible Society of India",
    language: "Bengali",
    category: "Bible",
    image: "/images/books/bengali-holy-bible.jpg",
    amazonUrl: "https://link.amazon/B0hsLVSbv",
  },

  {
    title: "Marathi Reference Bible",
    subtitle:
      "Re-Edited 2021 | Direct Translation from Hebrew and Greek",
    author: "God's Word",
    language: "Marathi",
    category: "Bible",
    image: "/images/books/marathi-reference-bible.jpg",
    amazonUrl: "https://link.amazon/B0a2AOooa",
  },

  {
    title: "Holy Bible Punjabi O.V.",
    subtitle: "Red Edge | Old and New Testament",
    author: "BSI",
    language: "Punjabi",
    category: "Bible",
    image: "/images/books/punjabi-holy-bible.jpg",
    amazonUrl: "https://link.amazon/B0ghcoIPf",
  },

  {
    title: "Assamese Reference Bible O.V.",
    subtitle: "Red Edge | Old and New Testament",
    author: "BSI",
    language: "Assamese",
    category: "Bible",
    image: "/images/books/assamese-reference-bible.jpg",
    amazonUrl: "https://link.amazon/B00j41hJD",
  },

  {
    title: "Christian Holy Worship Songs",
    subtitle:
      "Pavitra Geetawali Stuti Aradhna ke Geet — Praise and Worship Christian Songs Collection",
    language: "Hindi & English",
    category: "Worship",
    image: "/images/books/christian-holy-worship-songs.jpg",
    amazonUrl: "https://link.amazon/B0fkq7QTl",
  },

  {
    title: "Abhishikth Geeton Ki Mala",
    subtitle: "Hindi Hardcover Christian Book",
    author: "Ankur Narula",
    language: "Hindi",
    category: "Worship",
    image: "/images/books/abhishikth-geeton-ki-mala.jpg",
    amazonUrl: "https://link.amazon/B0a0nL3yL",
  },

  {
    title: "The Christian Songbook",
    subtitle: "Praise and Worship Lyrics",
    author: "Eric Gichira",
    language: "English",
    category: "Worship",
    image: "/images/books/the-christian-songbook.jpg",
    kindleUrl: "https://link.amazon/B0b5W7i33",
  },
];