export const menu = [
  {
  id: "breakfast",
  title: "صبحانه و خوراکی",
  items: [
    {
      id: "chicken-steak-mushroom",
      name: "استیک مرغ و قارچ",
      image: "/menu-images/chicken-steak-mushroom.png",
      description:
        "دو برش نان تست، ۲۰۰ گرم سینه مرغ مرینیت شده به همراه قارچ، سس مخصوص دست‌ساز، چیپس، پنیر گودا، پخت شده در سنگ ساز",
      price: 355000,
    },
    {
      id: "omelette-sandwich",
      name: "ساندویچ املت",
      image: "/menu-images/omelette-sandwich.png",
      description:
        "۲۰۰ گرم، ۲ عدد تخم مرغ، گوجه، رب گوجه، تست شده در نان بربری، سس، لیمو",
      price: 240000,
    },
    {
      id: "special-noodle",
      name: "نودل ویژه",
      image: "/menu-images/special-noodle.png",
      description:
        "۱۱۰ گرم نودل، ژامبون گوشت ۷۰٪، چیپس مخصوص، یک ورق پنیر گودا",
      price: 335000,
    },
    {
      id: "ham-cheese-snack",
      name: "اسنک ژامبون و پنیر",
      image: "/menu-images/ham-cheese-snack.png",
      description:
        "یک جفت، نان تست، ۲ ورق ژامبون گوشت ۷۰٪، یک ورق پنیر گودا، چیپس، سس مخصوص",
      price: 270000,
    },
    {
      id: "peanut-butter-banana-toast",
      name: "تست کره بادام زمینی و موز",
      image: "/menu-images/peanut-butter-banana-toast.png",
      description:
        "۲ عدد نان تست، کره بادام زمینی، موز، عسل",
      price: 285000,
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
      price: 150000,
    },
  ],
},
  {
  id: "cold-drinks",
  title: "نوشیدنی سرد",
  items: [
    {
      id: "banana-milk",
      image: "/menu-images/banana-milk.png",
      name: "شیر موز",
      description: "۳۲۰ میلی‌لیتر، شیر پاستوریزه، موز",
      price: 350000,
    },
  ],
},
{
  id: "mocktail",
  title: "موکتل",
  items: [
    {
      id: "lemonade",
      name: "لیموناد",
      image: "/menu-images/lemonade.png",
      description: "۴۰۰ میلی‌لیتر، لیمو، شکر، یخ کراش",
      price: 260000,
    },
    {
      id: "mojito",
      name: "موهیتو",
      image: "/menu-images/mojito.png",
      description: "۴۰۰ میلی‌لیتر، سودا، نعنا، لیمو ترش، یخ کراش",
      price: 285000,
    },
    {
      id: "red-mojito",
      name: "رد موهیتو",
      image: "/menu-images/red-mojito.png",
      description:
        "۴۰۰ میلی‌لیتر، سودا، نعنا، لیمو ترش، اسلایس میوه‌های قرمز توت‌فرنگی، سیروپ میوه‌های قرمز توت‌فرنگی، یخ کراش",
      price: 340000,
    },
    {
      id: "limito",
      name: "موکتل لیمیتو",
      image: "/menu-images/limito.png",
      description:
        "۴۰۰ میلی‌لیتر، سیروپ ویمیتو، لیمو ترش تازه، سودا، یخ",
      price: 340000,
    },
  ],
},
  {
  id: "coffee",
  title: "قهوه",
  items: [
    {
      id: "latte",
      name: "لاته",
       image: "/menu-images/latte.jpg",
      description:
        "۳۲۰ میلی‌لیتر، دبل اسپرسو، شیر فوم‌گیری شده",
      options: [
        {
          label: "۱۰۰ درصد عربیکا",
          price: 310000,
        },
        {
          label: "۷۰ درصد روبوستا",
          price: 260000,
        },
        {
          label: "۸۰ درصد عربیکا",
          price: 300000,
        },
        {
          label: "۶۰ درصد عربیکا",
          price: 290000,
        },
      ],
    },

    {
      id: "double-espresso",
      name: "اسپرسو دبل",
      description:
        "۴۰ میلی‌لیتر، به همراه آب کوچک، شکلات یا کوکی ساید",
      options: [
        {
          label: "۷۰ درصد روبوستا",
          price: 155000,
        },
        {
          label: "۵۰ درصد عربیکا",
          price: 175000,
        },
        {
          label: "۸۰ درصد عربیکا",
          price: 185000,
        },
        {
          label: "۱۰۰ درصد عربیکا",
          price: 230000,
        },
      ],
    },

    {
      id: "cortado",
      name: "کورتادو",
      description:
        "۸۰ میلی‌لیتر، دبل اسپرسو، ۴۰ میلی‌لیتر شیر، شیر فوم‌گیری شده",
      options: [
        {
          label: "۱۰۰ درصد عربیکا",
          price: 195000,
        },
        {
          label: "۸۰ درصد عربیکا",
          price: 245000,
        },
        {
          label: "۶۰ درصد عربیکا",
          price: 245000,
        },
        {
          label: "۵۰ درصد عربیکا",
          price: 245000,
        },
        {
          label: "۷۰ درصد روبوستا",
          price: 220000,
        },
      ],
    },

    {
      id: "mocha",
      name: "موکا",
      description:
        "۳۲۰ میلی‌لیتر، شیر، شکلات، اسپرسو دبل، شیر فوم‌گیری شده",
      options: [
        {
          label: "۱۰۰ درصد عربیکا",
          price: 345000,
        },
        {
          label: "۸۰ درصد عربیکا",
          price: 325000,
        },
        {
          label: "۶۰ درصد عربیکا",
          price: 295000,
        },
        {
          label: "۵۰ درصد عربیکا",
          price: 295000,
        },
        {
          label: "۷۰ درصد روبوستا",
          price: 295000,
        },
      ],
    },
  ],
},
  {
  id: "hot-drinks",
  title: "نوشیدنی گرم",
  items: [
    {
      id: "relaxing-herbal-tea",
      name: "دمنوش آرامش",
      description:
        "۲۸۰ میلی‌لیتر، گل گاوزبان، بابونه، عسل، اسطوخودوس",
      price: 170000,
    },
    {
      id: "masala-tea",
      name: "چای ماسالا",
      description:
        "۲۸۰ میلی‌لیتر، شیر، پودر ماسالا",
      price: 220000,
    },
    {
      id: "saffron-karak-tea",
      name: "چای کرک کرک زعفران",
      description:
        "۲۲۰ میلی‌لیتر، شیر، چای کرک",
      price: 240000,
    },
    {
      id: "hot-chocolate",
      name: "هات چاکلت",
      description:
        "۲۶۰ میلی‌لیتر، شکلات ذوب شده، شیر",
      price: 240000,
    },
    {
      id: "pistachio-karak-tea",
      name: "چای کرک پسته",
      description:
        "۲۲۰ میلی‌لیتر، پودر چای کرک، شیر، پودر پسته",
      price: 250000,
    },
  ],
},
  {
  id: "shake",
  title: "شیک",
  items: [
    {
      id: "espresso-shake",
      name: "شیک اسپرسو",
      description:
        "۵۰۰ میلی‌لیتر، بستنی شیر، قهوه اسپرسو و بستنی وانیلی، یک شات قهوه ۵۰ درصد عربیکا، ۵۰ درصد روبوستا",
      price: 370000,
    },
    {
      id: "lotus-shake",
      name: "شیک لوتوس",
      description:
        "۵۰۰ میلی‌لیتر، شیر، بستنی وانیلی، کره لوتوس، بیسکویت لوتوس، سس شکلات",
      price: 440000,
    },
    {
      id: "tiramisu-shake",
      name: "شیک تیرامیسو",
      description:
        "۵۰۰ میلی‌لیتر، بستنی وانیلی، قهوه کلاسیک، بیسکویت پتی‌بور، موز",
      price: 430000,
    },
    {
      id: "ayeh-shake",
      name: "شیک آیه",
      description:
        "۴۰۰ میلی‌لیتر، بستنی شیر و بستنی آیه",
      price: 490000,
    },
    {
      id: "peanut-butter-shake",
      name: "شیک بادام زمینی",
      description:
        "۵۰۰ میلی‌لیتر، کره بادام زمینی، بستنی وانیلی، شیر",
      price: 460000,
    },
    {
      id: "vanilla-shake",
      name: "شیک وانیل",
      description:
        "۵۰۰ میلی‌لیتر، شیر، بستنی وانیلی",
      price: 285000,
    },
    {
      id: "nutella-shake",
      name: "شیک نات نوت",
      description:
        "۵۰۰ میلی‌لیتر، بستنی نات نوت، شیر",
      price: 430000,
    },
  ],
},
  {
  id: "iced-coffee",
  title: "قهوه سرد",
  items: [
    {
      id: "iced-americano-soda-lemon",
      name: "  آیس آمریکانو سودا لیمو",
      description:
        "۴۰۰ میلی‌لیتر، ۲ شات اسپرسو ۲۵۰ روبوستا، ۲۵۰ عربیکا، اضافه شده به آب سرد، یخ",
      price: 300000,
    },
    {
      id: "orange-coffee",
      name: "اورنج کافی",
      description:
        "۴۰۰ میلی‌لیتر، ۲ شات اسپرسو، آب پرتقال طبیعی، سودا",
      price: 360000,
    },
    {
      id: "iced-latte",
      name: "آیس لته",
      description:
        "۵۰۰ میلی‌لیتر، دبل اسپرسو، شیر، یخ",
      price: 295000,
    },
    {
      id: "iced-latte-80-arabica",
      name: "آیس لته ۸۰ درصد عربیکا",
      description:
        "۵۰۰ میلی‌لیتر، ۲ شات اسپرسو ۲۰٪ روبوستا، ۸۰٪ عربیکا، شیر، یخ",
      price: 320000,
    },
    {
      id: "iced-americano-60-arabica",
      name: "آیس آمریکانو ۶۰ درصد عربیکا",
      description:
        "۴۰۰ میلی‌لیتر، ۲ شات اسپرسو ۴۰٪ روبوستا، ۶۰٪ عربیکا، اضافه شده به آب سرد، یخ",
      price: 250000,
    },
    {
      id: "iced-americano-100-arabica",
      name: "آیس آمریکانو ۱۰۰ درصد عربیکا",
      description:
        "۴۰۰ میلی‌لیتر، ۲ شات اسپرسو ۱۰۰٪ عربیکا، اضافه شده به آب سرد، یخ",
      price: 290000,
    },
    {
      id: "affogato-50-arabica",
      name: "آفوگاتو ۵۰ درصد عربیکا",
      description:
        "۴۰۰ میلی‌لیتر، ۲ شات اسپرسو ۵۰٪ روبوستا، ۵۰٪ عربیکا، ۲ اسکوپ بستنی وانیلی",
      price: 280000,
    },
    {
      id: "affogato-80-arabica",
      name: "آفوگاتو ۸۰ درصد عربیکا",
      description:
        "۴۰۰ میلی‌لیتر، ۲ شات اسپرسو ۲۰٪ روبوستا، ۸۰٪ عربیکا، ۲ اسکوپ بستنی وانیلی",
      price: 310000,
    },
  ],
},
];