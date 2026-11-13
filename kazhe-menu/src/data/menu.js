
export const menu = [
  {
    id: "coffee",
    title: "قهوه گرم",
    items: [
      {
        id: "double-espresso",
        name: "اسپرسو",
        image: "/menu-images/double-espresso.png",
        description: "۴۰ میلی‌لیتر، به همراه آب کوچک، شکلات یا کوکی ساید",
        options: [
          { label: "۳۰٪ عربیکا / ۷۰٪ روبوستا", price: 190000 },
          { label: "۵۰٪ عربیکا / ۵۰٪ روبوستا", price: 220000 },
          { label: "۸۰٪ عربیکا / ۲۰٪ روبوستا", price: 250000 },
          { label: "۱۰۰٪ عربیکا", price: 270000 },
        ],
      },
      {
        id: "americano",
        name: "آمریکانو",
        image: "/menu-images/americano.png",
        description: "",
        options: [
          { label: "۳۰٪ عربیکا / ۷۰٪ روبوستا", price: 230000 },
          { label: "۵۰٪ عربیکا / ۵۰٪ روبوستا", price: 260000 },
          { label: "۸۰٪ عربیکا / ۲۰٪ روبوستا", price: 290000 },
          { label: "۱۰۰٪ عربیکا", price: 310000 },
        ],
      },
      {
        id: "latte",
        name: "لاته",
        image: "/menu-images/latte.png",
        description: "۳۲۰ میلی‌لیتر، دبل اسپرسو، شیر فوم‌گیری شده",
        options: [
          { label: "۳۰٪ عربیکا / ۷۰٪ روبوستا", price: 290000 },
          { label: "۵۰٪ عربیکا / ۵۰٪ روبوستا", price: 330000 },
          { label: "۸۰٪ عربیکا / ۲۰٪ روبوستا", price: 370000 },
          { label: "۱۰۰٪ عربیکا", price: 400000 },
        ],
      },
      {
        id: "cortado",
        name: "کورتادو",
        image: "/menu-images/cortado.png",
        description: "۸۰ میلی‌لیتر، دبل اسپرسو، ۴۰ میلی‌لیتر شیر، شیر فوم‌گیری شده",
        options: [
          { label: "۳۰٪ عربیکا / ۷۰٪ روبوستا", price: 270000 },
          { label: "۵۰٪ عربیکا / ۵۰٪ روبوستا", price: 310000 },
          { label: "۸۰٪ عربیکا / ۲۰٪ روبوستا", price: 350000 },
          { label: "۱۰۰٪ عربیکا", price: 370000 },
        ],
      },
      {
        id: "mocha",
        name: "موکا",
        image: "/menu-images/mocha.png",
        description: "۳۲۰ میلی‌لیتر، شیر، شکلات، اسپرسو دبل، شیر فوم‌گیری شده",
        options: [
          { label: "۳۰٪ عربیکا / ۷۰٪ روبوستا", price: 340000 },
          { label: "۵۰٪ عربیکا / ۵۰٪ روبوستا", price: 380000 },
          { label: "۸۰٪ عربیکا / ۲۰٪ روبوستا", price: 420000 },
          { label: "۱۰۰٪ عربیکا", price: 440000 },
        ],
      },
    ],
  },
  {
    id: "iced-coffee",
    title: "قهوه سرد",
    items: [
      {
        id: "iced-americano",
        name: "آیس آمریکانو",
        image: "/menu-images/iced-americano.png",
        description: "۴۰۰ میلی‌لیتر، دبل اسپرسو، آب سرد، یخ",
        options: [
          { label: "۳۰٪ عربیکا / ۷۰٪ روبوستا", price: 230000 },
          { label: "۵۰٪ عربیکا / ۵۰٪ روبوستا", price: 260000 },
          { label: "۸۰٪ عربیکا / ۲۰٪ روبوستا", price: 290000 },
          { label: "۱۰۰٪ عربیکا", price: 310000 },
        ],
      },
      {
        id: "iced-latte",
        name: "آیس لاته",
        image: "/menu-images/iced-latte.png",
        description: "۵۰۰ میلی‌لیتر، دبل اسپرسو، شیر، یخ",
        options: [
          { label: "۳۰٪ عربیکا / ۷۰٪ روبوستا", price: 290000 },
          { label: "۵۰٪ عربیکا / ۵۰٪ روبوستا", price: 330000 },
          { label: "۸۰٪ عربیکا / ۲۰٪ روبوستا", price: 370000 },
          { label: "۱۰۰٪ عربیکا", price: 400000 },
        ],
      },
      {
        id: "iced-cortado",
        name: "آیس کورتادو",
        image: "/menu-images/iced-cortado.png",
        description: "",
        options: [
          { label: "۳۰٪ عربیکا / ۷۰٪ روبوستا", price: 270000 },
          { label: "۵۰٪ عربیکا / ۵۰٪ روبوستا", price: 310000 },
          { label: "۸۰٪ عربیکا / ۲۰٪ روبوستا", price: 350000 },
          { label: "۱۰۰٪ عربیکا", price: 370000 },
        ],
      },
      {
        id: "iced-mocha",
        name: "آیس موکا",
        image: "/menu-images/iced-mocha.png",
        description: "",
        options: [
          { label: "۳۰٪ عربیکا / ۷۰٪ روبوستا", price: 340000 },
          { label: "۵۰٪ عربیکا / ۵۰٪ روبوستا", price: 380000 },
          { label: "۸۰٪ عربیکا / ۲۰٪ روبوستا", price: 420000 },
          { label: "۱۰۰٪ عربیکا", price: 440000 },
        ],
      },
      {
        id: "orange-coffee",
        name: "اورنج کافی",
        image: "/menu-images/orange-coffee.png",
        description: "۴۰۰ میلی‌لیتر، ۲ شات اسپرسو، آب پرتقال طبیعی، سودا",
        options: [
          { label: "۳۰٪ عربیکا / ۷۰٪ روبوستا", price: 340000 },
          { label: "۵۰٪ عربیکا / ۵۰٪ روبوستا", price: 370000 },
          { label: "۸۰٪ عربیکا / ۲۰٪ روبوستا", price: 410000 },
          { label: "۱۰۰٪ عربیکا", price: 430000 },
        ],
      },
      {
        id: "iced-americano-soda-lemon",
        name: "آیس آمریکانو سودا",
        image: "/menu-images/iced-americano-soda-lemon.png",
        description: "۴۰۰ میلی‌لیتر، ۲ شات اسپرسو، سودا لیمو، یخ",
        options: [
          { label: "۳۰٪ عربیکا / ۷۰٪ روبوستا", price: 320000 },
          { label: "۵۰٪ عربیکا / ۵۰٪ روبوستا", price: 350000 },
          { label: "۸۰٪ عربیکا / ۲۰٪ روبوستا", price: 380000 },
          { label: "۱۰۰٪ عربیکا", price: 400000 },
        ],
      },
    ],
  },
  {
    id: "shake",
    title: "شیک",
    items: [
      {
        id: "double-chocolate-shake",
        name: "شیک دبل چاکلت",
        image: "/menu-images/double-chocolate-shake.png",
        description:
    "۵۰۰ میلی‌لیتر، شیر، بستنی شکلاتی، شکلات تلخ، سس شکلات، تکه‌های شکلات",
        price: 400000,
      },
      {
        id: "banana-chocolate-shake",
        name: "شیک موز شکلات",
        image: "/menu-images/banana-chocolate-shake.png",
        description:
    "۵۰۰ میلی‌لیتر، موز تازه، شیر، بستنی شکلاتی، سس شکلات",
        price: 470000,
      },
      {
        id: "tiramisu-shake",
        name: "شیک تیرامیسو",
        image: "/menu-images/tiramisu-shake.png",
        description: "۵۰۰ میلی‌لیتر، بستنی وانیلی، قهوه کلاسیک، بیسکویت پتی‌بور، موز",
        price: 470000,
      },
      {
        id: "lotus-shake",
        name: "شیک لوتوس",
        image: "/menu-images/lotus-shake.png",
        description: "۵۰۰ میلی‌لیتر، شیر، بستنی وانیلی، کره لوتوس، بیسکویت لوتوس، سس شکلات",
        price: 480000,
      },
      {
        id: "espresso-shake",
        name: "شیک اسپرسو",
        image: "/menu-images/espresso-shake.png",
        description: "۵۰۰ میلی‌لیتر، بستنی شیر، قهوه اسپرسو و بستنی وانیلی، یک شات قهوه ۵۰ درصد عربیکا، ۵۰ درصد روبوستا",
        price: 410000,
      },
      {
        id: "mango-shake",
        name: "شیک انبه",
        image: "/menu-images/mango-shake.png",
         description:
    "۵۰۰ میلی‌لیتر، انبه، شیر، بستنی وانیلی",
        price: 340000,
      },
      {
        id: "blackberry-shake",
        name: "شیک شاه‌توت",
        image: "/menu-images/blackberry-shake.png",
        description:
    "۵۰۰ میلی‌لیتر، شاه‌توت، شیر، بستنی وانیلی",
        price: 340000,
      },
      {
        id: "peanut-butter-shake",
        name: "شیک بادام زمینی",
        image: "/menu-images/peanut-butter-shake.png",
        description: "۵۰۰ میلی‌لیتر، کره بادام زمینی، بستنی وانیلی، شیر",
        price: 350000,
      },
    ],
  },
  {
    id: "tea",
    title: "چای و دمنوش",
    items: [
      {
        id: "tea",
        name: "چای",
        image: "/menu-images/tea.png",
        description: "",
        price: 85000,
      },
      {
        id: "green-tea",
        name: "چای سبز",
        image: "/menu-images/green-tea.png",
        description: "",
        price: 125000,
      },
      {
        id: "herbal-tea",
        name: "دمنوش",
        image: "/menu-images/relaxing-herbal-tea.png",
        description: "",
        price: 180000,
      },
    ],
  },
  {
    id: "hot-drinks",
    title: "نوشیدنی‌های گرم",
    items: [
      {
        id: "nescafe-milk",
        name: "شیر نسکافه",
        image: "/menu-images/nescafe-milk.png",
         description:
    "۲۸۰ میلی‌لیتر، شیر، قهوه فوری نسکافه، شکر",
        price: 230000,
      },
      {
        id: "hot-chocolate",
        name: "هات چاکلت",
        image: "/menu-images/hot-chocolate.png",
        description: "۲۶۰ میلی‌لیتر، شکلات ذوب شده، شیر",
        price: 250000,
      },
      {
        id: "masala-tea",
        name: "ماسالا",
        image: "/menu-images/masala-tea.png",
        description: "۲۸۰ میلی‌لیتر، شیر، پودر ماسالا",
        price: 240000,
      },
      {
        id: "saffron-karak-tea",
        name: "کرک",
        image: "/menu-images/saffron-karak-tea.png",
        description: "۲۲۰ میلی‌لیتر، شیر، چای کرک",
        price: 260000,
      },
    ],
  },
  {
    id: "cold-drinks",
    title: "نوشیدنی‌های سرد",
    items: [
      {
        id: "banana-milk",
        name: "شیر موز",
        image: "/menu-images/banana-milk.png",
        description: "۳۲۰ میلی‌لیتر، شیر پاستوریزه، موز",
        price: 280000,
      },
      {
        id: "lemonade",
        name: "لیموناد",
        image: "/menu-images/lemonade.png",
        description: "۴۰۰ میلی‌لیتر، لیمو، شکر، یخ کراش",
        price: 340000,
      },
      {
        id: "mojito",
        name: "موهیتو",
        image: "/menu-images/mojito.png",
        description: "۴۰۰ میلی‌لیتر، سودا، نعنا، لیمو ترش، یخ کراش",
        price: 360000,
      },
      {
        id: "red-mojito",
        name: "رد موهیتو",
        image: "/menu-images/red-mojito.png",
        description: "۴۰۰ میلی‌لیتر، سودا، نعنا، لیمو ترش، اسلایس میوه‌های قرمز توت‌فرنگی، سیروپ میوه‌های قرمز توت‌فرنگی، یخ کراش",
        price: 410000,
      },
      {
        id: "mocktail",
        name: "ماکتل",
        image: "/menu-images/mocktail.png",
        description: " ۳۸۰٬۰۰۰ تا ۵۳۰٬۰۰۰ تومان؛ قیمت دقیق هر مدل باید جداگانه مشخص شود.",
        price: [530000 ,380000], // Price range for mocktails
      },
    ],
  },
  {
    id: "cake",
    title: "کیک و دسر",
    items: [
      {
        id: "cookie",
        name: "کوکی",
        image: "/menu-images/cookie.png",
        description: "یک عدد کوکی",
        price: 140000,
      },
      {
        id: "ginger",
        name: "کوکی زنجبیلی",
        image: "/menu-images/ginger.png",
        description: "",
        price: 180000,
      },
      {
        id: "baklava",
        name: "باقلوا",
        image: "/menu-images/baklava.png",
        description: "یک عدد باقلوا",
        price: 90000,
      },
    ],
  },
  {
    id: "breakfast",
    title: "صبحانه و خوراکی",
    items: [
      {
        id: "omelette",
        name: "املت",
        image: "/menu-images/omelette-sandwich.png",
        description:
        "۲ عدد تخم‌مرغ، گوجه‌فرنگی تازه، رب گوجه‌فرنگی، روغن، ادویه مخصوص، به همراه نان",
        price: 250000,
      },
      {
        id: "cheese-walnut",
        name: "پنیر گردو",
        image: "/menu-images/cheese-walnut.png",
         description:
        "پنیر صبحانه، مغز گردوی تازه، خیار، گوجه‌فرنگی، سبزی تازه، به همراه نان",
        price: 230000,
      },
      {
        id: "ham-cheese-snack",
        name: "اسنک ژامبون",
        image: "/menu-images/ham-cheese-snack.png",
        description: "یک جفت، نان تست، ۲ ورق ژامبون گوشت ۷۰٪، یک ورق پنیر گودا، چیپس، سس مخصوص",
        price: 310000,
      },
      {
        id: "chicken-snack",
        name: "اسنک مرغ",
        image: "/menu-images/chicken-steak-mushroom.png",
        description:
        "یک جفت، نان تست، مرغ مرینیت‌شده، قارچ، پنیر گودا، چیپس، سس مخصوص",
        price: 350000,
      },
      {
        id: "butter-toast",
        name: "تست کره بادام زمینی",
        image: "/menu-images/peanut-butter-banana-toast.png",
        description:
        "۲ عدد نان تست برشته، کره بادام زمینی، موز تازه، عسل",
        price: 320000,
      },
      {
        id: "ham-noodle",
        name: "نودل ژامبون",
        image: "/menu-images/special-noodle.png",
        description:
        "۱۱۰ گرم نودل، ژامبون گوشت ۷۰٪، قارچ، پنیر گودا، ادویه مخصوص",
        price: 370000,
      },
      {
        id: "chicken-noodle",
        name: "نودل مرغ",
        image: "/menu-images/chicken-noodle.png",
        description:
        "۱۱۰ گرم نودل، مرغ مرینیت‌شده، قارچ، پنیر گودا، ادویه مخصوص",
        price: 440000,
      },
      {
        id: "chicken-panini",
        name: "پنینی مرغ",
        image: "/menu-images/chicken-panini.png",
        description:
        "نان پنینی، سینه مرغ مرینیت‌شده، قارچ، پنیر گودا، سس مخصوص، به همراه چیپس",
        price: 550000,
      },
    ],
  },
];
